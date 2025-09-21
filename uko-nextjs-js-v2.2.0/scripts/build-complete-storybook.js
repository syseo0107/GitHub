#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { designTokens } = require('../src/design-tokens');

// 완전한 인터랙티브 Storybook 사이트 빌드 스크립트

const PROJECT_ROOT = path.join(__dirname, '..');
const BUILD_DIR = path.join(PROJECT_ROOT, 'storybook-static');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/components');

console.log('🏗️  완전한 UKO Storybook 사이트를 빌드합니다...');

// 빌드 디렉터리 생성
if (fs.existsSync(BUILD_DIR)) {
  console.log('🧹 기존 빌드 디렉터리를 정리합니다...');
  fs.rmSync(BUILD_DIR, { recursive: true });
}
fs.mkdirSync(BUILD_DIR, { recursive: true });

// 컴포넌트 정보 수집
function getComponentFiles() {
  const components = [];
  
  function scanDir(dir, prefix = '') {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath, prefix + item + '/');
      } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
        const componentName = path.basename(item, path.extname(item));
        if (!item.includes('getLayout') && !item.startsWith('.')) {
          const relativePath = prefix + item;
          const category = getComponentCategory(componentName);
          
          components.push({
            name: componentName,
            path: relativePath,
            fullPath: fullPath,
            category: category
          });
        }
      }
    });
  }
  
  scanDir(COMPONENTS_DIR);
  return components;
}

// 컴포넌트 카테고리 결정
function getComponentCategory(componentName) {
  const categories = {
    'AppCheckBox': 'Form Controls',
    'AppRadio': 'Form Controls', 
    'AppSelect': 'Form Controls',
    'AppTextField': 'Form Controls',
    'ColorRadio': 'Form Controls',
    'RoundCheckBox': 'Form Controls',
    'SearchInput': 'Form Controls',
    'ImageUploadInput': 'Form Controls',
    
    'FlexBox': 'Layout',
    'FlexBetween': 'Layout',
    'FlexRowAlign': 'Layout',
    
    'AppAvatar': 'Data Display',
    'AvatarBadge': 'Data Display',
    'Typography': 'Data Display',
    'IconWrapper': 'Data Display',
    
    'AppModal': 'Feedback',
    'LoadingScreen': 'Feedback',
    
    'AppPagination': 'Navigation',
    'MoreOptions': 'Utils',
    'ScrollBar': 'Utils',
    'RTL': 'Utils'
  };
  
  return categories[componentName] || 'Components';
}

// React와 Material-UI 의존성을 위한 CDN 링크
const cdnLinks = {
  react: 'https://unpkg.com/react@18/umd/react.development.js',
  reactDOM: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
  mui: 'https://unpkg.com/@mui/material@latest/umd/material-ui.development.js',
  emotion: 'https://unpkg.com/@emotion/react@latest/dist/emotion-react.umd.min.js'
};

// 메인 HTML 생성
function createMainHTML(components) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UKO Design System - Interactive Storybook</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: ${designTokens.colors.text?.main200 || '#1f2738'};
      background-color: ${designTokens.colors.text?.[100] || '#f9f9f9'};
    }
    
    .app-container {
      display: flex;
      height: 100vh;
    }
    
    .sidebar {
      width: 280px;
      background: ${designTokens.colors.white || '#ffffff'};
      border-right: 1px solid ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      overflow-y: auto;
      padding: 1rem;
    }
    
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .header {
      background: ${designTokens.colors.white || '#ffffff'};
      border-bottom: 1px solid ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .content {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
      background: ${designTokens.colors.white || '#ffffff'};
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      margin-bottom: 2rem;
    }
    
    .nav-category {
      margin-bottom: 1.5rem;
    }
    
    .nav-category h3 {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${designTokens.colors.text?.muted400 || '#94a4c4'};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
      padding: 0.5rem 0;
    }
    
    .nav-item {
      display: block;
      padding: 0.5rem 1rem;
      color: ${designTokens.colors.text?.main200 || '#1f2738'};
      text-decoration: none;
      border-radius: 6px;
      margin-bottom: 0.25rem;
      transition: all 0.2s;
      cursor: pointer;
    }
    
    .nav-item:hover {
      background-color: ${designTokens.colors.text?.[100] || '#f9f9f9'};
    }
    
    .nav-item.active {
      background-color: ${designTokens.colors.primary?.blue100 || '#ebf4ff'};
      color: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      font-weight: 500;
    }
    
    .component-preview {
      border: 1px solid ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      border-radius: 8px;
      margin-bottom: 2rem;
    }
    
    .preview-header {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      background: ${designTokens.colors.text?.[100] || '#f9f9f9'};
    }
    
    .preview-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .preview-description {
      color: ${designTokens.colors.text?.muted400 || '#94a4c4'};
      font-size: 0.875rem;
    }
    
    .preview-content {
      padding: 2rem;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .controls {
      padding: 1rem 1.5rem;
      border-top: 1px solid ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      background: ${designTokens.colors.text?.[100] || '#f9f9f9'};
    }
    
    .intro-content {
      text-align: center;
      max-width: 600px;
      margin: 4rem auto;
    }
    
    .intro-title {
      font-size: 3rem;
      font-weight: 700;
      color: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      margin-bottom: 1rem;
    }
    
    .intro-subtitle {
      font-size: 1.25rem;
      color: ${designTokens.colors.text?.muted400 || '#94a4c4'};
      margin-bottom: 3rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .stat-card {
      text-align: center;
      padding: 1.5rem;
      background: ${designTokens.colors.white || '#ffffff'};
      border: 1px solid ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      border-radius: 8px;
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: ${designTokens.colors.primary?.blue500 || '#5896e1'};
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: ${designTokens.colors.text?.muted400 || '#94a4c4'};
      margin-top: 0.5rem;
    }
    
    .link-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
      margin: 0.5rem;
      transition: all 0.2s;
    }
    
    .link-button:hover {
      background: ${designTokens.colors.primary?.blue600 || '#4683db'};
      transform: translateY(-1px);
    }
    
    .link-button.secondary {
      background: transparent;
      color: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      border: 1px solid ${designTokens.colors.primary?.blue500 || '#5896e1'};
    }
    
    .link-button.secondary:hover {
      background: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      color: white;
    }
    
    .component-demo {
      padding: 2rem;
      border: 2px dashed ${designTokens.colors.text?.outlineMain300 || '#e5eaf2'};
      border-radius: 8px;
      text-align: center;
      background: ${designTokens.colors.text?.[100] || '#f9f9f9'};
      margin: 1rem 0;
    }
    
    .demo-placeholder {
      color: ${designTokens.colors.text?.muted400 || '#94a4c4'};
      font-style: italic;
    }
    
    .breadcrumb {
      font-size: 0.875rem;
      color: ${designTokens.colors.text?.muted400 || '#94a4c4'};
      margin-bottom: 1rem;
    }
    
    .breadcrumb a {
      color: ${designTokens.colors.primary?.blue500 || '#5896e1'};
      text-decoration: none;
    }
    
    .github-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: #24292e;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background 0.2s;
    }
    
    .github-button:hover {
      background: #1b1f23;
    }
  </style>
</head>
<body>
  <div class="app-container">
    <nav class="sidebar">
      <div class="logo">🎨 UKO Design System</div>
      
      <div class="nav-category">
        <h3>Overview</h3>
        <a href="#introduction" class="nav-item active" onclick="showContent('introduction')">
          소개
        </a>
        <a href="#tokens" class="nav-item" onclick="showContent('tokens')">
          디자인 토큰
        </a>
      </div>
      
      ${generateNavigation(components)}
    </nav>
    
    <div class="main-content">
      <header class="header">
        <div class="breadcrumb">
          <a href="#introduction">UKO Design System</a> / <span id="current-section">소개</span>
        </div>
        <a href="https://github.com/syseo0107/GitHub" target="_blank" rel="noopener" class="github-button">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
      </header>
      
      <main class="content">
        <div id="content-area">
          ${generateIntroContent(components)}
        </div>
      </main>
    </div>
  </div>

  <script>
    // 디자인 토큰
    window.designTokens = ${JSON.stringify(designTokens, null, 2)};
    
    // 컴포넌트 데이터
    window.components = ${JSON.stringify(components, null, 2)};
    
    // 현재 활성 섹션
    let currentSection = 'introduction';
    
    // 네비게이션 함수
    function showContent(sectionId) {
      // 이전 활성 항목 제거
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // 새 활성 항목 추가
      event.target.classList.add('active');
      
      // 브레드크럼 업데이트
      const breadcrumb = document.getElementById('current-section');
      
      // 컨텐츠 영역 업데이트
      const contentArea = document.getElementById('content-area');
      
      if (sectionId === 'introduction') {
        breadcrumb.textContent = '소개';
        contentArea.innerHTML = getIntroductionContent();
      } else if (sectionId === 'tokens') {
        breadcrumb.textContent = '디자인 토큰';
        contentArea.innerHTML = getTokensContent();
      } else {
        // 컴포넌트 페이지
        const component = window.components.find(c => c.name === sectionId);
        if (component) {
          breadcrumb.innerHTML = \`<a href="#" onclick="showContent('introduction')">소개</a> / \${component.category} / \${component.name}\`;
          contentArea.innerHTML = getComponentContent(component);
        }
      }
      
      currentSection = sectionId;
    }
    
    // 소개 컨텐츠
    function getIntroductionContent() {
      return \`
        <div class="intro-content">
          <h1 class="intro-title">🎨 UKO Design System</h1>
          <p class="intro-subtitle">자동화된 Figma 토큰 동기화와 컴포넌트 라이브러리</p>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">\${window.components.length}</div>
              <div class="stat-label">컴포넌트</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">\${Object.keys(window.designTokens.colors).length}</div>
              <div class="stat-label">색상 그룹</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">자동화</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">∞</div>
              <div class="stat-label">확장성</div>
            </div>
          </div>
          
          <div>
            <a href="https://github.com/syseo0107/GitHub" target="_blank" class="link-button">
              GitHub Repository
            </a>
            <a href="https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/QUICK_START.md" target="_blank" class="link-button secondary">
              빠른 시작 가이드
            </a>
            <a href="https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/DESIGN_SYSTEM_README.md" target="_blank" class="link-button secondary">
              상세 문서
            </a>
          </div>
        </div>
      \`;
    }
    
    // 토큰 컨텐츠
    function getTokensContent() {
      let colorHTML = '';
      Object.entries(window.designTokens.colors).forEach(([groupName, colors]) => {
        if (typeof colors === 'string') {
          colorHTML += \`
            <div style="text-align: center; margin: 1rem;">
              <div style="width: 80px; height: 80px; background: \${colors}; border-radius: 8px; margin: 0 auto 0.5rem; border: 1px solid #e0e0e0;"></div>
              <div style="font-size: 0.875rem; font-weight: 500;">\${groupName}</div>
              <div style="font-size: 0.75rem; color: #666; font-family: monospace;">\${colors}</div>
            </div>
          \`;
        } else {
          Object.entries(colors).forEach(([colorName, colorValue]) => {
            colorHTML += \`
              <div style="text-align: center; margin: 1rem;">
                <div style="width: 80px; height: 80px; background: \${colorValue}; border-radius: 8px; margin: 0 auto 0.5rem; border: 1px solid #e0e0e0;"></div>
                <div style="font-size: 0.875rem; font-weight: 500;">\${groupName} \${colorName}</div>
                <div style="font-size: 0.75rem; color: #666; font-family: monospace;">\${colorValue}</div>
              </div>
            \`;
          });
        }
      });
      
      return \`
        <h1>디자인 토큰</h1>
        <p>Figma에서 자동으로 동기화되는 디자인 토큰들입니다.</p>
        
        <div class="component-preview">
          <div class="preview-header">
            <div class="preview-title">색상 팔레트</div>
            <div class="preview-description">UKO 디자인 시스템의 색상 토큰</div>
          </div>
          <div class="preview-content">
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem; width: 100%;">
              \${colorHTML}
            </div>
          </div>
        </div>
        
        <div class="component-preview">
          <div class="preview-header">
            <div class="preview-title">타이포그래피</div>
            <div class="preview-description">폰트 크기와 가중치</div>
          </div>
          <div class="preview-content">
            <div style="text-align: left; width: 100%;">
              <div style="font-size: 2.25rem; margin-bottom: 1rem;">Heading 1</div>
              <div style="font-size: 1.875rem; margin-bottom: 1rem;">Heading 2</div>
              <div style="font-size: 1.5rem; margin-bottom: 1rem;">Heading 3</div>
              <div style="font-size: 1.25rem; margin-bottom: 1rem;">Heading 4</div>
              <div style="font-size: 1rem; margin-bottom: 1rem;">Body Text</div>
              <div style="font-size: 0.875rem;">Small Text</div>
            </div>
          </div>
        </div>
      \`;
    }
    
    // 컴포넌트 컨텐츠
    function getComponentContent(component) {
      return \`
        <h1>\${component.name}</h1>
        <p>\${component.category} 카테고리의 \${component.name} 컴포넌트입니다.</p>
        
        <div class="component-preview">
          <div class="preview-header">
            <div class="preview-title">기본 예제</div>
            <div class="preview-description">\${component.name}의 기본 상태</div>
          </div>
          <div class="preview-content">
            <div class="component-demo">
              <div class="demo-placeholder">
                📦 \${component.name} 컴포넌트
                <br><br>
                <small>실제 React 컴포넌트는 개발 환경에서 확인하실 수 있습니다.</small>
              </div>
            </div>
          </div>
          <div class="controls">
            <strong>Props:</strong> 개발 환경에서 \`npm run design-system:dev\` 실행 후 확인 가능
          </div>
        </div>
        
        <div class="component-preview">
          <div class="preview-header">
            <div class="preview-title">사용법</div>
            <div class="preview-description">컴포넌트 import 및 사용 방법</div>
          </div>
          <div class="preview-content">
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; text-align: left; overflow-x: auto;"><code>import \${component.name} from 'components/\${component.path}';

function MyComponent() {
  return (
    &lt;\${component.name} 
      // props here
    /&gt;
  );
}</code></pre>
          </div>
        </div>
      \`;
    }
    
    // 페이지 로드 시 초기 설정
    document.addEventListener('DOMContentLoaded', function() {
      showContent('introduction');
    });
  </script>
</body>
</html>`;
}

// 네비게이션 HTML 생성
function generateNavigation(components) {
  const categories = {};
  
  components.forEach(component => {
    if (!categories[component.category]) {
      categories[component.category] = [];
    }
    categories[component.category].push(component);
  });
  
  let navHTML = '';
  Object.entries(categories).forEach(([category, items]) => {
    navHTML += `
      <div class="nav-category">
        <h3>${category}</h3>
        ${items.map(item => `
          <a href="#${item.name}" class="nav-item" onclick="showContent('${item.name}')">
            ${item.name}
          </a>
        `).join('')}
      </div>
    `;
  });
  
  return navHTML;
}

// 소개 컨텐츠 생성
function generateIntroContent(components) {
  return `
    <div class="intro-content">
      <h1 class="intro-title">🎨 UKO Design System</h1>
      <p class="intro-subtitle">자동화된 Figma 토큰 동기화와 컴포넌트 라이브러리</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">${components.length}</div>
          <div class="stat-label">컴포넌트</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${Object.keys(designTokens.colors).length}</div>
          <div class="stat-label">색상 그룹</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">자동화</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">∞</div>
          <div class="stat-label">확장성</div>
        </div>
      </div>
      
      <div>
        <a href="https://github.com/syseo0107/GitHub" target="_blank" class="link-button">
          GitHub Repository
        </a>
        <a href="https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/QUICK_START.md" target="_blank" class="link-button secondary">
          빠른 시작 가이드
        </a>
        <a href="https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/DESIGN_SYSTEM_README.md" target="_blank" class="link-button secondary">
          상세 문서
        </a>
      </div>
    </div>
  `;
}

// 메인 실행
try {
  const components = getComponentFiles();
  console.log(`📊 발견된 컴포넌트: ${components.length}개`);
  
  const mainHTML = createMainHTML(components);
  fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), mainHTML);
  
  // .nojekyll 파일 생성
  fs.writeFileSync(path.join(BUILD_DIR, '.nojekyll'), '');
  
  // README.md 생성
  const readmeContent = `# UKO Design System - Interactive Storybook

🎨 **UKO 디자인 시스템의 인터랙티브 Storybook**

## ✨ 특징

- **${components.length}개 컴포넌트**: 완전한 React 컴포넌트 라이브러리
- **자동 Figma 토큰 동기화**: 디자인 토큰이 자동으로 동기화됩니다
- **인터랙티브 문서**: 브라우저에서 바로 확인 가능한 컴포넌트 문서
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험

## 🚀 로컬 개발

\`\`\`bash
# 전체 디자인 시스템 설정 및 실행
npm run design-system:dev
\`\`\`

## 📚 문서

- [GitHub Repository](https://github.com/syseo0107/GitHub)
- [빠른 시작 가이드](https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/QUICK_START.md)
- [상세 문서](https://github.com/syseo0107/GitHub/blob/main/uko-nextjs-js-v2.2.0/DESIGN_SYSTEM_README.md)

---

**배포일**: ${new Date().toISOString().split('T')[0]}  
**컴포넌트 수**: ${components.length}개  
**자동 배포**: GitHub Actions
`;
  
  fs.writeFileSync(path.join(BUILD_DIR, 'README.md'), readmeContent);
  
  console.log('✅ 인터랙티브 Storybook 빌드가 완료되었습니다!');
  console.log(`📁 빌드 결과: ${BUILD_DIR}`);
  console.log('📄 생성된 파일:');
  console.log('  - index.html (메인 Storybook 사이트)');
  console.log('  - .nojekyll (Jekyll 비활성화)');  
  console.log('  - README.md (저장소 문서)');
  console.log(`📊 포함된 컴포넌트: ${components.length}개`);
  
} catch (error) {
  console.error('❌ 빌드 중 오류 발생:', error.message);
  process.exit(1);
}