import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// UKO 테마 설정 (tokens.json 기반)
const ukoTheme = createTheme({
  palette: {
    primary: {
      main: '#5896e1', // Primary Blue 500
      light: '#a0d4ff', // Primary Blue 300
      dark: '#4285d1', // Primary Blue 600
    },
    secondary: {
      main: '#94a4c4', // Text Muted 400
    },
    background: {
      default: '#f9f9f9', // Text 100
      paper: '#ffffff', // White
    },
    text: {
      primary: '#1f2738', // Text Main 200
      secondary: '#94a4c4', // Text Muted 400
    },
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
    },
    h5: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1,
    },
    h6: {
      fontSize: 13,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.6,
    },
  },
});

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => React.createElement(
      ThemeProvider,
      { theme: ukoTheme },
      React.createElement(CssBaseline, null),
      React.createElement(Story, null)
    ),
  ],
};

export default preview;