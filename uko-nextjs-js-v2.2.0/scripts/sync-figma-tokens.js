#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Figma 토큰을 디자인 시스템에 동기화하는 스크립트

const TOKENS_FILE = path.join(__dirname, '../../tokens.json');
const DESIGN_TOKENS_FILE = path.join(__dirname, '../src/design-tokens/index.js');
const DESIGN_TOKENS_JSON_FILE = path.join(__dirname, '../src/design-tokens/tokens.json');

// 색상 이름을 camelCase로 변환
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (chr) => chr.toLowerCase());
}

// Figma 토큰을 파싱하여 구조화된 디자인 토큰으로 변환
function parseFigmaTokens(tokens) {
  const designTokens = {
    colors: {},
    typography: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem'
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px'
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  };

  // 색상 토큰 처리
  Object.keys(tokens).forEach(key => {
    const token = tokens[key];
    
    if (token.type === 'color') {
      const categoryName = toCamelCase(key);
      
      if (typeof token.value === 'string') {
        // 단일 색상 값
        if (key === 'White') {
          designTokens.colors.white = token.value;
        } else {
          designTokens.colors[categoryName] = token.value;
        }
      } else if (typeof token === 'object') {
        // 색상 그룹 처리
        const colorGroup = {};
        
        Object.keys(token).forEach(subKey => {
          const subToken = token[subKey];
          if (subToken.type === 'color' && subToken.value) {
            const subName = toCamelCase(subKey);
            colorGroup[subName] = subToken.value;
          }
        });
        
        if (Object.keys(colorGroup).length > 0) {
          designTokens.colors[categoryName] = colorGroup;
        }
      }
    }
  });

  // 특별 처리: Primary, Secondary, Warning, Error 색상 정리
  if (tokens.Primary) {
    designTokens.colors.primary = {};
    Object.keys(tokens.Primary).forEach(key => {
      if (tokens.Primary[key].type === 'color') {
        const colorName = toCamelCase(key);
        designTokens.colors.primary[colorName] = tokens.Primary[key].value;
      }
    });
  }

  if (tokens.Secondary) {
    designTokens.colors.secondary = {};
    Object.keys(tokens.Secondary).forEach(key => {
      if (tokens.Secondary[key].type === 'color') {
        const colorName = toCamelCase(key);
        designTokens.colors.secondary[colorName] = tokens.Secondary[key].value;
      }
    });
  }

  return designTokens;
}

// Material-UI 테마 생성 함수
function generateMUIThemeFunction(designTokens) {
  return `
// Material-UI 테마와 호환되는 형태로 변환
export const createUkoTheme = (mode = 'light') => ({
  palette: {
    mode,
    primary: {
      main: designTokens.colors.primary?.blue500 || designTokens.colors.primary?.main || '#5896e1',
      light: designTokens.colors.primary?.blue300 || designTokens.colors.primary?.light || '#a0d4ff',
      dark: designTokens.colors.text?.[500] || designTokens.colors.text?.dark || '#283252',
      contrastText: designTokens.colors.white || '#ffffff'
    },
    secondary: {
      main: designTokens.colors.text?.muted400 || designTokens.colors.secondary?.main || '#94a4c4',
      light: designTokens.colors.text?.[200] || designTokens.colors.secondary?.light || '#eceff5',
      dark: designTokens.colors.text?.main200 || designTokens.colors.secondary?.dark || '#1f2738'
    },
    background: {
      default: designTokens.colors.text?.[100] || designTokens.colors.background?.default || '#f9f9f9',
      paper: designTokens.colors.white || '#ffffff'
    },
    text: {
      primary: designTokens.colors.text?.main200 || designTokens.colors.text?.primary || '#1f2738',
      secondary: designTokens.colors.text?.muted400 || designTokens.colors.text?.secondary || '#94a4c4'
    },
    success: {
      main: designTokens.colors.secondary?.green500 || designTokens.colors.success?.main || '#55ed86',
      light: designTokens.colors.secondary?.green200 || designTokens.colors.success?.light || '#c3f9d7',
      dark: designTokens.colors.secondary?.green400 || designTokens.colors.success?.dark || '#7af1a1'
    },
    warning: {
      main: designTokens.colors.warning?.orange500 || designTokens.colors.warning?.main || '#ffa726',
      light: designTokens.colors.warning?.orange200 || designTokens.colors.warning?.light || '#ffe0b3',
      dark: designTokens.colors.warning?.orange400 || designTokens.colors.warning?.dark || '#ffb74d'
    },
    error: {
      main: designTokens.colors.error?.red500 || designTokens.colors.error?.main || '#f44336',
      light: designTokens.colors.error?.red200 || designTokens.colors.error?.light || '#ffcdd2',
      dark: designTokens.colors.error?.red400 || designTokens.colors.error?.dark || '#e57373'
    }
  },
  typography: {
    fontFamily: designTokens.typography.fontFamily,
    h1: {
      fontSize: designTokens.typography.fontSize['4xl'],
      fontWeight: designTokens.typography.fontWeight.bold,
      lineHeight: 1.25
    },
    h2: {
      fontSize: designTokens.typography.fontSize['3xl'],
      fontWeight: designTokens.typography.fontWeight.bold,
      lineHeight: 1.25
    },
    h3: {
      fontSize: designTokens.typography.fontSize['2xl'],
      fontWeight: designTokens.typography.fontWeight.semibold,
      lineHeight: 1.5
    },
    h4: {
      fontSize: designTokens.typography.fontSize.xl,
      fontWeight: designTokens.typography.fontWeight.semibold,
      lineHeight: 1.5
    },
    h5: {
      fontSize: designTokens.typography.fontSize.lg,
      fontWeight: designTokens.typography.fontWeight.medium,
      lineHeight: 1.5
    },
    h6: {
      fontSize: designTokens.typography.fontSize.base,
      fontWeight: designTokens.typography.fontWeight.medium,
      lineHeight: 1.5
    },
    body1: {
      fontSize: designTokens.typography.fontSize.base,
      lineHeight: 1.5
    },
    body2: {
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: 1.5
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    designTokens.shadows.sm,
    designTokens.shadows.base,
    designTokens.shadows.md,
    designTokens.shadows.lg,
    designTokens.shadows.xl,
    ${Array(19).fill('designTokens.shadows.xl').map((shadow, i) => `    ${shadow}`).join(',\n')}
  ]
});`;
}

// 디자인 토큰 JavaScript 파일 생성
function generateDesignTokensFile(designTokens) {
  const muiThemeFunction = generateMUIThemeFunction(designTokens);
  
  return `// UKO 디자인 토큰 - Figma tokens.json에서 자동 생성됨
// 이 파일은 자동으로 생성됩니다. 수동으로 편집하지 마세요.
// 변경사항이 있으면 scripts/sync-figma-tokens.js를 실행하세요.

export const designTokens = ${JSON.stringify(designTokens, null, 2)};
${muiThemeFunction}

export default designTokens;`;
}

// 메인 함수
function syncFigmaTokens() {
  console.log('🎨 Figma 디자인 토큰 동기화를 시작합니다...');
  
  try {
    // tokens.json 파일 읽기
    if (!fs.existsSync(TOKENS_FILE)) {
      console.error(`❌ 토큰 파일을 찾을 수 없습니다: ${TOKENS_FILE}`);
      process.exit(1);
    }
    
    const tokensContent = fs.readFileSync(TOKENS_FILE, 'utf8');
    const figmaTokens = JSON.parse(tokensContent);
    
    console.log('📖 Figma 토큰 파일을 읽었습니다.');
    
    // 디자인 토큰 파싱
    const designTokens = parseFigmaTokens(figmaTokens);
    console.log('🔄 디자인 토큰을 파싱했습니다.');
    
    // design-tokens 디렉터리 생성
    const designTokensDir = path.dirname(DESIGN_TOKENS_FILE);
    if (!fs.existsSync(designTokensDir)) {
      fs.mkdirSync(designTokensDir, { recursive: true });
    }
    
    // JavaScript 파일 생성
    const jsContent = generateDesignTokensFile(designTokens);
    fs.writeFileSync(DESIGN_TOKENS_FILE, jsContent);
    console.log('✅ 디자인 토큰 JavaScript 파일을 생성했습니다.');
    
    // JSON 파일도 생성 (참조용)
    fs.writeFileSync(DESIGN_TOKENS_JSON_FILE, JSON.stringify(designTokens, null, 2));
    console.log('✅ 디자인 토큰 JSON 파일을 생성했습니다.');
    
    // 토큰 요약 출력
    console.log('\\n📊 토큰 요약:');
    console.log(`   - 색상 그룹: ${Object.keys(designTokens.colors).length}개`);
    console.log(`   - 타이포그래피: ${Object.keys(designTokens.typography.fontSize).length}개 크기`);
    console.log(`   - 간격: ${Object.keys(designTokens.spacing).length}개 단계`);
    console.log(`   - 모서리 반경: ${Object.keys(designTokens.borderRadius).length}개 단계`);
    console.log(`   - 그림자: ${Object.keys(designTokens.shadows).length}개 단계`);
    
    console.log('\\n🎉 Figma 디자인 토큰 동기화가 완료되었습니다!');
    
  } catch (error) {
    console.error('❌ 동기화 중 오류가 발생했습니다:', error.message);
    process.exit(1);
  }
}

// Watch 모드 (토큰 파일 변경 감지)
function watchTokens() {
  console.log('👀 Figma 토큰 파일 변경을 감시합니다...');
  console.log(`📁 감시 대상: ${TOKENS_FILE}`);
  console.log('📝 변경사항이 감지되면 자동으로 동기화됩니다.');
  console.log('🛑 중지하려면 Ctrl+C를 누르세요.\\n');
  
  fs.watchFile(TOKENS_FILE, (curr, prev) => {
    console.log('\\n🔄 토큰 파일 변경이 감지되었습니다.');
    syncFigmaTokens();
    console.log('\\n👀 계속 감시 중...');
  });
}

// CLI 인터페이스
const args = process.argv.slice(2);
const command = args[0];

if (command === 'watch' || command === '-w' || command === '--watch') {
  syncFigmaTokens(); // 초기 동기화
  watchTokens();     // 감시 시작
} else if (command === 'help' || command === '-h' || command === '--help') {
  console.log(`
🎨 UKO Figma 토큰 동기화 도구

사용법:
  node sync-figma-tokens.js          # 한번 동기화
  node sync-figma-tokens.js watch    # 변경 감시 모드
  node sync-figma-tokens.js help     # 도움말 표시

설명:
  Figma에서 내보낸 tokens.json 파일을 읽어서
  프로젝트에서 사용할 수 있는 디자인 토큰으로 변환합니다.
  
파일:
  입력: ../../tokens.json
  출력: ../src/design-tokens/index.js
       ../src/design-tokens/tokens.json
`);
} else {
  syncFigmaTokens();
}

module.exports = {
  syncFigmaTokens,
  parseFigmaTokens,
  generateDesignTokensFile
};