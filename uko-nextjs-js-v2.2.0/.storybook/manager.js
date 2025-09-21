import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'UKO Dashboard Design System',
    brandUrl: 'https://github.com/syseo0107/GitHub',
    brandImage: undefined, // You can add a logo here
    brandTarget: '_self',
    
    // UI
    appBg: '#f9fafb',
    appContentBg: '#ffffff',
    appBorderColor: '#e5eaf2',
    appBorderRadius: 8,
    
    // Typography
    fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontCode: 'monospace',
    
    // Text colors
    textColor: '#283252',
    textInverseColor: '#ffffff',
    textMutedColor: '#94a4c4',
    
    // Toolbar default and active colors
    barTextColor: '#283252',
    barSelectedColor: '#5896e1',
    barBg: '#ffffff',
    
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#e5eaf2',
    inputTextColor: '#283252',
    inputBorderRadius: 4,
    
    // Colors
    colorPrimary: '#5896e1',
    colorSecondary: '#00c9a7',
  },
  
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});