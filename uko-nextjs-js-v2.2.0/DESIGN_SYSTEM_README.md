# 🎨 UKO 자동 Storybook 디자인 시스템

UKO Next.js 프로젝트를 위한 자동화된 Storybook 디자인 시스템입니다. Figma 디자인 토큰을 자동으로 동기화하고 컴포넌트 스토리를 자동 생성합니다.

## ✨ 주요 기능

- 🎯 **Figma 토큰 자동 동기화**: Figma에서 내보낸 tokens.json을 자동으로 JavaScript 디자인 토큰으로 변환
- 🚀 **컴포넌트 스토리 자동 생성**: 기존 React 컴포넌트를 분석하여 Storybook 스토리를 자동 생성
- 🎨 **Material-UI 테마 통합**: UKO 디자인 토큰을 Material-UI 테마로 자동 변환
- 📱 **반응형 디자인**: 다양한 뷰포트에서 컴포넌트 테스트 가능
- 📖 **자동 문서화**: 컴포넌트 props와 사용법을 자동으로 문서화

## 🚀 빠른 시작

### 1. 전체 디자인 시스템 설정
```bash
# 디자인 토큰 동기화 + 스토리 생성 + Storybook 실행
npm run design-system:dev
```

### 2. 개별 작업
```bash
# Figma 토큰만 동기화
npm run sync-figma-tokens

# 컴포넌트 스토리만 생성
npm run generate-stories

# Storybook만 실행
npm run storybook
```

## 📁 프로젝트 구조

```
uko-nextjs-js-v2.2.0/
├── .storybook/                  # Storybook 설정
│   ├── main.js                 # Storybook 메인 설정
│   └── preview.js              # 테마 및 데코레이터 설정
├── scripts/                     # 자동화 스크립트
│   ├── generate-stories.js     # 컴포넌트 스토리 자동 생성
│   └── sync-figma-tokens.js    # Figma 토큰 동기화
├── src/
│   ├── components/             # React 컴포넌트들
│   └── design-tokens/          # 디자인 토큰 (자동 생성)
│       ├── index.js           # JavaScript 디자인 토큰
│       └── tokens.json        # JSON 디자인 토큰
├── stories/                    # Storybook 스토리들 (자동 생성)
└── ../../tokens.json          # Figma에서 내보낸 원본 토큰
```

## 🔧 자동화 스크립트

### 1. Figma 토큰 동기화 (`sync-figma-tokens.js`)

Figma Design Token 플러그인에서 내보낸 `tokens.json` 파일을 프로젝트에서 사용할 수 있는 형태로 변환합니다.

**기능:**
- Figma 토큰을 구조화된 JavaScript 객체로 변환
- Material-UI 테마 호환 형식 생성
- 색상, 타이포그래피, 간격, 그림자 등 모든 디자인 토큰 처리
- 자동 camelCase 변환

**사용법:**
```bash
# 한 번 동기화
npm run sync-figma-tokens

# 토큰 파일 변경 감시 (개발 중 유용)
npm run sync-figma-tokens:watch
```

**출력 파일:**
- `src/design-tokens/index.js`: JavaScript 디자인 토큰
- `src/design-tokens/tokens.json`: JSON 형태 토큰 (참조용)

### 2. 컴포넌트 스토리 자동 생성 (`generate-stories.js`)

기존 React 컴포넌트를 분석하여 Storybook 스토리를 자동으로 생성합니다.

**기능:**
- 컴포넌트 파일 자동 스캔
- Props 자동 분석 및 ArgTypes 생성
- 카테고리별 컴포넌트 분류 (Form, Layout, Data Display 등)
- 다양한 스토리 변형 자동 생성 (Default, Disabled, Sizes, Variants 등)
- 기존 스토리 보호 (덮어쓰기 방지)

**사용법:**
```bash
npm run generate-stories
```

**생성되는 스토리 종류:**
- **Default**: 기본 컴포넌트 상태
- **Disabled**: 비활성화 상태 (해당하는 경우)
- **Sizes**: 다양한 크기 (해당하는 경우)  
- **Variants**: 다양한 변형 (해당하는 경우)
- **All States**: 모든 상태를 한 번에 보여주는 스토리

## 🎨 디자인 토큰 사용법

### JavaScript에서 사용
```javascript
import { designTokens, createUkoTheme } from './src/design-tokens';

// 색상 사용
const primaryColor = designTokens.colors.primary.blue500;
const backgroundColor = designTokens.colors.text[100];

// Material-UI 테마 사용
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(createUkoTheme('light'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* 앱 컴포넌트들 */}
    </ThemeProvider>
  );
}
```

### CSS-in-JS에서 사용
```javascript
import { designTokens } from './src/design-tokens';

const StyledComponent = styled.div`
  color: ${designTokens.colors.text.main200};
  background-color: ${designTokens.colors.white};
  padding: ${designTokens.spacing.md};
  border-radius: ${designTokens.borderRadius.md};
  box-shadow: ${designTokens.shadows.md};
  font-family: ${designTokens.typography.fontFamily};
`;
```

## 🔄 워크플로우

### 디자이너 워크플로우
1. **Figma에서 디자인 토큰 수정**
2. **Design Token 플러그인으로 tokens.json 내보내기**
3. **프로젝트 루트의 tokens.json 파일 교체**
4. **`npm run sync-figma-tokens` 실행** (또는 watch 모드 사용)
5. **자동으로 디자인 토큰이 코드에 반영됨**

### 개발자 워크플로우
1. **새로운 컴포넌트 개발**
2. **`npm run generate-stories` 실행**
3. **자동 생성된 스토리 확인 및 필요시 커스터마이징**
4. **`npm run storybook`으로 Storybook에서 확인**

### 전체 팀 워크플로우
1. **디자인 토큰 업데이트**: `npm run sync-figma-tokens`
2. **새 컴포넌트 스토리 생성**: `npm run generate-stories`  
3. **전체 시스템 확인**: `npm run storybook`
4. **또는 한 번에**: `npm run design-system:dev`

## 📝 Storybook 스토리 커스터마이징

자동 생성된 스토리는 기본적인 형태로 생성됩니다. 필요에 따라 수동으로 커스터마이징할 수 있습니다:

### 스토리 확장 예제
```javascript
// AppCheckBox.stories.js
import AppCheckBox from '../src/components/AppCheckBox';

export default {
  title: 'Components/Form/AppCheckBox',
  component: AppCheckBox,
  // 자동 생성된 설정...
};

// 커스텀 스토리 추가
export const WithFormikIntegration = {
  render: () => (
    <Formik initialValues={{ agreed: false }}>
      {({ values, setFieldValue }) => (
        <AppCheckBox
          checked={values.agreed}
          onChange={(e) => setFieldValue('agreed', e.target.checked)}
        />
      )}
    </Formik>
  ),
};

export const AccessibilityDemo = {
  render: () => (
    <div>
      <label>
        <AppCheckBox />
        I agree to the terms and conditions
      </label>
    </div>
  ),
};
```

## 🛠️ 고급 설정

### Storybook 애드온 추가
`.storybook/main.js`에서 애드온을 추가할 수 있습니다:
```javascript
addons: [
  '@storybook/addon-a11y',        // 접근성 테스트
  '@storybook/addon-design-tokens', // 디자인 토큰 표시
  // 기타 애드온들...
],
```

### 커스텀 컴포넌트 카테고리 추가
`scripts/generate-stories.js`의 `COMPONENT_CATEGORIES` 객체에 새 카테고리를 추가:
```javascript
const COMPONENT_CATEGORIES = {
  'MyCustomComponent': 'Custom Category',
  // 기존 카테고리들...
};
```

### 커스텀 ArgTypes 추가
`scripts/generate-stories.js`의 `COMMON_ARG_TYPES` 객체에 새 prop 타입을 추가:
```javascript
const COMMON_ARG_TYPES = {
  myCustomProp: {
    control: { type: 'select' },
    options: ['option1', 'option2'],
    description: '커스텀 prop 설명'
  },
  // 기존 타입들...
};
```

## 🚀 배포

### Storybook 빌드 및 배포
```bash
# Storybook 정적 파일 빌드
npm run build-storybook

# 빌드된 파일은 storybook-static/ 디렉터리에 생성됨
# 이를 정적 호스팅 서비스에 배포 가능 (Netlify, Vercel 등)
```

## 📚 참고 자료

- [Storybook 공식 문서](https://storybook.js.org/docs/react/get-started/introduction)
- [Material-UI 테마 가이드](https://mui.com/material-ui/customization/theming/)
- [Figma Design Tokens 플러그인](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens)
- [Design Token 표준](https://design-tokens.github.io/community-group/)

## 🤝 기여하기

1. 새로운 기능이나 개선사항이 있다면 이슈를 생성해주세요
2. 스크립트 개선이나 버그 수정은 PR을 보내주세요
3. 문서 개선도 언제나 환영입니다

## 📄 라이선스

이 프로젝트는 UKO 프로젝트의 라이선스를 따릅니다.

---

💡 **팁**: 개발 중에는 `npm run sync-figma-tokens:watch`를 실행해두면 Figma 토큰 파일이 변경될 때마다 자동으로 동기화됩니다!