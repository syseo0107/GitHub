import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { themes } from '@storybook/theming';
import { designTokens, createUkoTheme } from '../src/design-tokens';
// import '../src/styles/globals.css';

// UKO 테마 토큰을 사용한 Material-UI 테마 생성
const ukoTheme = createTheme(createUkoTheme('light'));

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.light,
    },
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: designTokens.colors.text?.[100] || '#f9f9f9',
        },
        {
          name: 'dark',
          value: designTokens.colors.text?.[500] || '#283252',
        },
        {
          name: 'white',
          value: designTokens.colors.white || '#ffffff',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={ukoTheme}>
        <CssBaseline />
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;