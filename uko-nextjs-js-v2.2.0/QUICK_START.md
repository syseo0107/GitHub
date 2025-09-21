# 🚀 UKO Storybook 디자인 시스템 빠른 시작 가이드

## 📋 준비사항 체크리스트

- ✅ Node.js 및 npm 설치 완료
- ✅ UKO Next.js 프로젝트 설정 완료
- ✅ Figma 디자인 토큰 파일 (`tokens.json`) 준비
- ✅ 프로젝트 디렉터리: `/home/user/webapp/uko-nextjs-js-v2.2.0`

## 🎯 30초 빠른 시작

```bash
# 프로젝트 디렉터리로 이동
cd /home/user/webapp/uko-nextjs-js-v2.2.0

# 전체 디자인 시스템 설정 및 Storybook 실행
npm run design-system:dev
```

이 명령어 하나로 다음이 모두 실행됩니다:
1. Figma 토큰 동기화
2. 컴포넌트 스토리 자동 생성
3. Storybook 개발 서버 시작

## 📚 단계별 상세 가이드

### 1단계: 의존성 설치 (필요시)

Storybook 관련 패키지가 설치되지 않은 경우:

```bash
# Storybook 패키지 설치 (Next.js 13 호환 버전)
npm install --save-dev @storybook/nextjs@7.6.15 @storybook/addon-essentials@7.6.15 --legacy-peer-deps
```

### 2단계: Figma 디자인 토큰 동기화

```bash
# Figma tokens.json → JavaScript 디자인 토큰 변환
npm run sync-figma-tokens

# 또는 파일 변경 감시 모드로 실행 (개발 중 유용)
npm run sync-figma-tokens:watch
```

### 3단계: 컴포넌트 스토리 생성

```bash
# 기존 컴포넌트들을 분석하여 Storybook 스토리 자동 생성
npm run generate-stories
```

### 4단계: Storybook 실행

```bash
# Storybook 개발 서버 실행 (포트: 6006)
npm run storybook
```

## 📁 생성된 파일 구조

```
uko-nextjs-js-v2.2.0/
├── .storybook/              # Storybook 설정
│   ├── main.js             # 메인 설정
│   ├── preview.js          # 테마 및 데코레이터
│   └── theme.js            # 커스텀 테마
├── scripts/                 # 자동화 스크립트
│   ├── generate-stories.js # 스토리 자동 생성
│   └── sync-figma-tokens.js # 토큰 동기화
├── src/design-tokens/      # 디자인 토큰 (자동 생성)
│   ├── index.js           # JavaScript 토큰
│   └── tokens.json        # JSON 토큰
├── stories/               # Storybook 스토리 (자동 생성)
│   ├── Introduction.stories.mdx
│   ├── AppCheckBox.stories.js
│   ├── FlexBox.stories.js
│   └── ... (총 22개 스토리)
└── DESIGN_SYSTEM_README.md # 상세 문서
```

## 🔧 주요 npm 스크립트

| 스크립트 | 설명 |
|---------|------|
| `npm run design-system:dev` | 전체 시스템 설정 + Storybook 실행 |
| `npm run storybook` | Storybook만 실행 |
| `npm run build-storybook` | Storybook 정적 빌드 |
| `npm run sync-figma-tokens` | Figma 토큰 동기화 |
| `npm run generate-stories` | 컴포넌트 스토리 생성 |

## 🎨 자동 생성된 컴포넌트 스토리

다음 컴포넌트들의 스토리가 자동으로 생성되었습니다:

### Form 컴포넌트
- ✅ AppCheckBox - 커스텀 체크박스
- ✅ AppRadio - 커스텀 라디오버튼  
- ✅ AppSelect - 커스텀 셀렉트박스
- ✅ AppTextField - 커스텀 텍스트 입력
- ✅ ColorRadio - 색상 라디오버튼
- ✅ RoundCheckBox - 둥근 체크박스

### Layout 컴포넌트  
- ✅ FlexBox - Flex 레이아웃 컴포넌트
- ✅ FlexBetween - 양 끝 정렬 컴포넌트
- ✅ FlexRowAlign - 행 정렬 컴포넌트

### Data Display 컴포넌트
- ✅ AppAvatar - 사용자 아바타
- ✅ AvatarBadge - 아바타 배지
- ✅ Typography - 타이포그래피

### Navigation 컴포넌트
- ✅ AppPagination - 페이지네이션

### Feedback 컴포넌트
- ✅ AppModal - 모달 다이얼로그
- ✅ LoadingScreen - 로딩 화면

### Utils 컴포넌트
- ✅ IconWrapper - 아이콘 래퍼
- ✅ MoreOptions - 더보기 옵션
- ✅ ScrollBar - 커스텀 스크롤바

## 🎯 다음 단계

1. **Storybook 확인**: `http://localhost:6006`에서 생성된 스토리들을 확인하세요
2. **커스텀 스토리 작성**: 필요에 따라 자동 생성된 스토리를 수정하거나 새로 추가하세요
3. **디자인 토큰 업데이트**: Figma에서 토큰을 수정한 후 `npm run sync-figma-tokens` 실행
4. **새 컴포넌트 추가**: 새 컴포넌트 생성 후 `npm run generate-stories` 실행

## 🔗 추가 리소스

- 📖 [상세 문서](./DESIGN_SYSTEM_README.md) - 완전한 사용법과 고급 설정
- 🎨 [Storybook 공식 문서](https://storybook.js.org/)
- 🎯 [Material-UI 테마 가이드](https://mui.com/material-ui/customization/theming/)

## ❓ 문제 해결

### Storybook이 시작되지 않는 경우
```bash
# 패키지 재설치
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### 토큰 동기화가 실패하는 경우  
```bash
# tokens.json 파일 경로 확인
ls -la ../../tokens.json

# 권한 확인
chmod +x scripts/sync-figma-tokens.js
```

### 스토리 생성이 실패하는 경우
```bash
# 컴포넌트 디렉터리 확인
ls -la src/components/

# 권한 확인  
chmod +x scripts/generate-stories.js
```

---

🎉 **축하합니다!** UKO 자동 Storybook 디자인 시스템이 준비되었습니다. 
이제 `npm run design-system:dev`로 시작하세요!