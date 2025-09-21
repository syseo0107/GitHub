import { create } from '@storybook/theming';
import { designTokens } from '../src/design-tokens';

export default create({
  base: 'light',
  
  // Brand
  brandTitle: 'UKO Design System',
  brandUrl: 'https://github.com/uko-nextjs',
  brandImage: null,
  
  // Colors
  colorPrimary: designTokens.colors.primary?.blue500 || '#5896e1',
  colorSecondary: designTokens.colors.text?.muted400 || '#94a4c4',
  
  // UI
  appBg: designTokens.colors.text?.[100] || '#f9f9f9',
  appContentBg: designTokens.colors.white || '#ffffff',
  appBorderColor: designTokens.colors.text?.outlineMain300 || '#e5eaf2',
  appBorderRadius: 8,
  
  // Typography  
  fontBase: designTokens.typography?.fontFamily || '"Inter", sans-serif',
  fontCode: 'Monaco, "Consolas", "Lucida Console", monospace',
  
  // Text colors
  textColor: designTokens.colors.text?.main200 || '#1f2738',
  textInverseColor: designTokens.colors.white || '#ffffff',
  
  // Toolbar default and active colors
  barTextColor: designTokens.colors.text?.muted400 || '#94a4c4',
  barSelectedColor: designTokens.colors.primary?.blue500 || '#5896e1',
  barBg: designTokens.colors.white || '#ffffff',
  
  // Form colors
  inputBg: designTokens.colors.white || '#ffffff',
  inputBorder: designTokens.colors.text?.outlineMain300 || '#e5eaf2',
  inputTextColor: designTokens.colors.text?.main200 || '#1f2738',
  inputBorderRadius: 8,
});