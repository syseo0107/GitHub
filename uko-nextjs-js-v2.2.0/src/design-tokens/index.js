// UKO 디자인 토큰 - Figma tokens.json에서 자동 생성됨
// 이 파일은 자동으로 생성됩니다. 수동으로 편집하지 마세요.
// 변경사항이 있으면 scripts/sync-figma-tokens.js를 실행하세요.

export const designTokens = {
  "colors": {
    "white": "#ffffff",
    "primary": {
      "blue100": "#ebf4ff",
      "blue200": "#bfe5ff",
      "blue300": "#a0d4ff",
      "blue400": "#88c3ff",
      "blue500": "#5896e1",
      "blue600": "#4683db",
      "blue700": "#3061b7",
      "blue800": "#1e4493",
      "blue900": "#122e7a"
    },
    "secondary": {}
  },
  "typography": {
    "fontFamily": "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    },
    "fontWeight": {
      "normal": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "borderRadius": {
    "none": "0",
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem",
    "full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "base": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
};

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
        designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl,
    designTokens.shadows.xl
  ]
});

export default designTokens;