# UKO Design System Storybook

> 🎨 UKO 대시보드에서 추출한 디자인 시스템 컴포넌트 라이브러리

## 📋 프로젝트 개요

이 프로젝트는 기존 UKO NextJS 대시보드 프로젝트에서 컴포넌트들을 추출하여 Storybook으로 구성한 디자인 시스템입니다. Figma 디자인 파일과 JavaScript 코드를 기반으로 역공학적 접근을 통해 체계적인 컴포넌트 라이브러리를 만들었습니다.

## ✨ 주요 기능

- **📦 컴포넌트 라이브러리**: UKO 대시보드의 핵심 컴포넌트들
- **🎯 디자인 토큰**: Figma에서 추출한 컬러, 타이포그래피 시스템
- **📚 인터랙티브 문서**: Storybook을 통한 실시간 컴포넌트 테스트
- **🔧 커스터마이징**: MUI 기반 테마 시스템
- **📱 반응형**: 모든 컴포넌트는 반응형 디자인 지원

## 🗂 포함된 컴포넌트

### Typography Components
- **H1-H6**: 다양한 헤딩 레벨
- **Paragraph**: 본문 텍스트
- **Small/Tiny**: 작은 텍스트
- **Span**: 인라인 텍스트

### Form Components
- **AppCheckBox**: 커스텀 체크박스
- **AppRadio**: 커스텀 라디오 버튼
- **AppSelect**: 커스텀 셀렉트 박스

### UI Components
- **AppModal**: 모달 다이얼로그
- **AppPagination**: 페이지네이션
- **IconWrapper**: 아이콘 래퍼
- **LoadingScreen**: 로딩 화면

### Design Tokens
- **Colors**: Primary, Secondary, Text 색상 시스템
- **Typography**: 폰트 크기 및 가중치 시스템

## 🚀 시작하기

### 🌐 온라인 데모
**GitHub Pages**: [https://syseo0107.github.io/uko-design-system-storybook/](https://syseo0107.github.io/uko-design-system-storybook/)

### 설치

```bash
# 저장소 복제
git clone https://github.com/syseo0107/uko-design-system-storybook.git
cd uko-design-system-storybook

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

### 실행

```bash
# Storybook 개발 서버
npm run dev

# PM2로 데몬 실행
npx pm2 start ecosystem.config.js
```

## 📖 사용법

### 기본 컴포넌트 사용

```jsx
import { H1, Paragraph } from './components/Typography';
import AppCheckBox from './components/AppCheckBox';
import AppModal from './components/AppModal';

function MyComponent() {
  return (
    <>
      <H1>페이지 제목</H1>
      <Paragraph>본문 내용입니다.</Paragraph>
      <AppCheckBox checked onChange={handleChange} />
    </>
  );
}
```

### 디자인 토큰 활용

```jsx
import { ThemeProvider } from '@mui/material/styles';
import { ukoTheme } from './theme';

// 테마에 정의된 UKO 디자인 토큰 사용
const MyApp = () => (
  <ThemeProvider theme={ukoTheme}>
    <App />
  </ThemeProvider>
);
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary Blue**: `#5896e1` (메인 브랜드 컬러)
- **Text Colors**: 
  - Main: `#1f2738`
  - Muted: `#94a4c4`
- **Background**: `#f9f9f9`

### 타이포그래피

- **H1**: 28px, Bold
- **H2**: 24px, Bold
- **H3**: 18px, Bold
- **H4**: 16px, Bold
- **Body**: 14px, Medium

## 📁 프로젝트 구조

```
uko-storybook/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트들
│   ├── stories/            # Storybook 스토리 파일들
│   ├── tokens/             # 디자인 토큰 (tokens.json)
│   └── icons/              # 아이콘 컴포넌트들
├── .storybook/             # Storybook 설정
│   ├── main.js
│   └── preview.js
├── ecosystem.config.js     # PM2 설정
└── package.json
```

## 🔧 기술 스택

- **React 18**: UI 라이브러리
- **Storybook 8**: 컴포넌트 개발 환경
- **Material-UI (MUI) 5**: 디자인 시스템 기반
- **Emotion**: CSS-in-JS 솔루션
- **Vite**: 빌드 도구

## 🎯 향후 계획

- [ ] 더 많은 UKO 컴포넌트 추가
- [ ] Figma 플러그인 연동
- [ ] 자동화된 디자인 토큰 동기화
- [ ] 컴포넌트 테스트 추가
- [ ] NPM 패키지 배포

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 ISC 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 생성해 주세요.

---

**UKO Design System** - 일관되고 재사용 가능한 UI 컴포넌트로 더 나은 사용자 경험을 만들어갑니다.