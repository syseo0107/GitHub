import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Import theme configuration
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5896e1',
      light: '#88c3ff',
      dark: '#3876d1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00c9a7',
      light: '#66d9bf',
      dark: '#00a489',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff6b6b',
      light: '#ff9999',
      dark: '#cc5555',
    },
    warning: {
      main: '#ffd93d',
      light: '#ffe066',
      dark: '#ccae31',
    },
    info: {
      main: '#539bff',
      light: '#7fb3ff',
      dark: '#427ccc',
    },
    success: {
      main: '#00c9a7',
      light: '#33d4b8',
      dark: '#00a186',
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
    text: {
      primary: '#283252',
      secondary: '#94a4c4',
    },
    divider: '#e5eaf2',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px rgba(0, 0, 0, 0.12)',
    '0px 3px 6px rgba(0, 0, 0, 0.12)',
    '0px 4px 6px rgba(0, 0, 0, 0.12)',
    '0px 5px 7px rgba(0, 0, 0, 0.12)',
    '0px 6px 8px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px rgba(0, 0, 0, 0.12)',
    '0px 12px 16px rgba(0, 0, 0, 0.12)',
    '0px 13px 17px rgba(0, 0, 0, 0.12)',
    '0px 14px 19px rgba(0, 0, 0, 0.12)',
    '0px 15px 20px rgba(0, 0, 0, 0.12)',
    '0px 16px 22px rgba(0, 0, 0, 0.12)',
    '0px 17px 23px rgba(0, 0, 0, 0.12)',
    '0px 18px 25px rgba(0, 0, 0, 0.12)',
    '0px 19px 26px rgba(0, 0, 0, 0.12)',
    '0px 20px 28px rgba(0, 0, 0, 0.12)',
    '0px 21px 29px rgba(0, 0, 0, 0.12)',
  ],
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5896e1',
      light: '#88c3ff',
      dark: '#3876d1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00c9a7',
      light: '#66d9bf',
      dark: '#00a489',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff6b6b',
      light: '#ff9999',
      dark: '#cc5555',
    },
    warning: {
      main: '#ffd93d',
      light: '#ffe066',
      dark: '#ccae31',
    },
    info: {
      main: '#539bff',
      light: '#7fb3ff',
      dark: '#427ccc',
    },
    success: {
      main: '#00c9a7',
      light: '#33d4b8',
      dark: '#00a186',
    },
    background: {
      default: '#0a0e1a',
      paper: '#131825',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b9c8',
    },
    divider: '#2a3142',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  layout: 'padded',
  docs: {
    theme: lightTheme,
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f9fafb',
      },
      {
        name: 'dark',
        value: '#0a0e1a',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};