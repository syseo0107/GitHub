#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// GitHub Pages에 Storybook을 배포하는 스크립트

const STORYBOOK_STATIC_DIR = path.join(__dirname, '../storybook-static');
const TEMP_DIR = path.join(__dirname, '../.temp-gh-pages');

console.log('🚀 GitHub Pages에 Storybook 배포를 시작합니다...');

try {
  // 1. storybook-static 디렉터리 확인
  if (!fs.existsSync(STORYBOOK_STATIC_DIR)) {
    console.log('📦 Storybook 빌드가 필요합니다. 빌드를 시작합니다...');
    execSync('npm run build-storybook', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  }

  console.log('✅ Storybook 정적 파일이 준비되었습니다.');

  // 2. 현재 브랜치 확인
  const currentBranch = execSync('git branch --show-current', { 
    encoding: 'utf8', 
    cwd: path.join(__dirname, '..') 
  }).trim();
  
  console.log(`📍 현재 브랜치: ${currentBranch}`);

  // 3. gh-pages 브랜치 생성 또는 체크아웃
  try {
    console.log('🌟 gh-pages 브랜치를 생성/체크아웃합니다...');
    
    // 기존 gh-pages 브랜치가 있는지 확인
    try {
      execSync('git show-ref --verify --quiet refs/heads/gh-pages', { 
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe'
      });
      console.log('📂 기존 gh-pages 브랜치를 사용합니다.');
      execSync('git checkout gh-pages', { 
        stdio: 'inherit', 
        cwd: path.join(__dirname, '..') 
      });
    } catch {
      console.log('🆕 새로운 gh-pages 브랜치를 생성합니다.');
      execSync('git checkout --orphan gh-pages', { 
        stdio: 'inherit', 
        cwd: path.join(__dirname, '..') 
      });
    }

    // 4. gh-pages 브랜치에서 기존 파일들 정리
    console.log('🧹 gh-pages 브랜치를 정리합니다...');
    
    // .git 폴더를 제외한 모든 파일 삭제
    const filesToKeep = ['.git', '.gitignore'];
    const allFiles = fs.readdirSync(path.join(__dirname, '..'));
    
    allFiles.forEach(file => {
      if (!filesToKeep.includes(file)) {
        const filePath = path.join(__dirname, '..', file);
        try {
          execSync(`rm -rf "${filePath}"`, { cwd: path.join(__dirname, '..') });
        } catch (error) {
          console.warn(`⚠️  파일 삭제 실패: ${file}`);
        }
      }
    });

    // 5. storybook-static 내용을 루트로 복사
    console.log('📋 Storybook 파일들을 복사합니다...');
    execSync(`cp -R "${STORYBOOK_STATIC_DIR}"/* "${path.join(__dirname, '..')}"`, {
      cwd: path.join(__dirname, '..')
    });

    // 6. CNAME 파일 생성 (커스텀 도메인이 있는 경우)
    // 필요하면 여기에 추가

    // 7. .nojekyll 파일 생성 (GitHub Pages에서 Jekyll 처리 비활성화)
    fs.writeFileSync(path.join(__dirname, '..', '.nojekyll'), '');
    console.log('✅ .nojekyll 파일을 생성했습니다.');

    // 8. README.md 생성
    const readmeContent = `# UKO Design System Storybook

이 사이트는 UKO 디자인 시스템의 Storybook 문서입니다.

## 🎨 UKO Design System

- **자동 Figma 토큰 동기화**: Figma에서 디자인 토큰을 자동으로 동기화
- **컴포넌트 라이브러리**: 재사용 가능한 React 컴포넌트들
- **Material-UI 통합**: Material-UI 테마와 완벽 호환

## 🚀 개발 환경

소스 코드: [GitHub Repository](https://github.com/syseo0107/GitHub)

\`\`\`bash
# 로컬 개발 환경 실행
npm run design-system:dev
\`\`\`

## 📚 문서

- [빠른 시작 가이드](https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/QUICK_START.md)
- [상세 문서](https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/DESIGN_SYSTEM_README.md)

---

배포일: ${new Date().toISOString().split('T')[0]}
`;

    fs.writeFileSync(path.join(__dirname, '..', 'README.md'), readmeContent);
    console.log('✅ README.md 파일을 생성했습니다.');

    // 9. Git add 및 commit
    console.log('📝 변경사항을 커밋합니다...');
    execSync('git add .', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    
    const commitMessage = `Deploy Storybook to GitHub Pages - ${new Date().toISOString().split('T')[0]}`;
    execSync(`git commit -m "${commitMessage}"`, { 
      stdio: 'inherit', 
      cwd: path.join(__dirname, '..') 
    });

    // 10. gh-pages 브랜치에 푸시
    console.log('🚀 GitHub Pages에 배포합니다...');
    execSync('git push origin gh-pages --force', { 
      stdio: 'inherit', 
      cwd: path.join(__dirname, '..') 
    });

    console.log('✅ 배포가 완료되었습니다!');

    // 11. 원래 브랜치로 복귀
    console.log(`🔄 원래 브랜치 (${currentBranch})로 복귀합니다...`);
    execSync(`git checkout ${currentBranch}`, { 
      stdio: 'inherit', 
      cwd: path.join(__dirname, '..') 
    });

    // 12. 배포 완료 메시지
    console.log(`
🎉 GitHub Pages 배포 완료!

📍 배포 URL: https://syseo0107.github.io/GitHub/

⚠️  주의사항:
- GitHub Pages 배포는 몇 분 정도 시간이 걸릴 수 있습니다.
- GitHub 저장소의 Settings > Pages에서 배포 상태를 확인할 수 있습니다.
- gh-pages 브랜치가 자동으로 생성되었습니다.

🔧 GitHub Pages 설정:
1. GitHub 저장소 > Settings > Pages
2. Source: Deploy from a branch  
3. Branch: gh-pages / (root)

📚 다음번 배포:
npm run deploy-storybook
`);

  } catch (error) {
    console.error('❌ GitHub Pages 배포 중 오류가 발생했습니다:', error.message);
    
    // 오류 발생 시 원래 브랜치로 복귀 시도
    try {
      execSync(`git checkout ${currentBranch}`, { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..') 
      });
    } catch {
      console.warn('⚠️  원래 브랜치로 복귀하지 못했습니다. 수동으로 복귀해주세요.');
    }
    
    process.exit(1);
  }

} catch (error) {
  console.error('❌ 배포 스크립트 실행 중 오류:', error.message);
  process.exit(1);
}