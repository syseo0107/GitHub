#!/usr/bin/env node

/**
 * Figma Token Synchronization Script
 * This script reads tokens from tokens.json and generates MUI theme configuration
 */

const fs = require('fs');
const path = require('path');

// Paths
const TOKENS_PATH = path.join(__dirname, '../../tokens.json');
const THEME_OUTPUT_PATH = path.join(__dirname, '../src/theme/tokens.js');
const STORIES_OUTPUT_PATH = path.join(__dirname, '../stories/tokens');

// Helper function to convert token name to camelCase
function toCamelCase(str) {
  return str
    .replace(/\s(.)/g, ($1) => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, ($1) => $1.toLowerCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

// Helper function to create color palette from tokens
function createColorPalette(tokens) {
  const palette = {
    primary: {},
    secondary: {},
    error: {},
    warning: {},
    info: {},
    success: {},
    grey: {},
    text: {},
    background: {},
    action: {},
    divider: '#E5EAF2',
    white: '#ffffff',
  };

  // Process Primary colors
  if (tokens.Primary) {
    Object.entries(tokens.Primary).forEach(([key, value]) => {
      const colorKey = toCamelCase(key);
      if (key.includes('500')) {
        palette.primary.main = value.value;
      } else if (key.includes('400')) {
        palette.primary.light = value.value;
      } else if (key.includes('600')) {
        palette.primary.dark = value.value;
      }
      palette.primary[colorKey] = value.value;
    });
  }

  // Process Secondary colors
  if (tokens.Secondary) {
    Object.entries(tokens.Secondary).forEach(([key, value]) => {
      const colorKey = toCamelCase(key);
      if (key.includes('500')) {
        palette.secondary.main = value.value;
      } else if (key.includes('400')) {
        palette.secondary.light = value.value;
      } else if (key.includes('600')) {
        palette.secondary.dark = value.value;
      }
      palette.secondary[colorKey] = value.value;
    });
  }

  // Process Error colors
  if (tokens.Error) {
    Object.entries(tokens.Error).forEach(([key, value]) => {
      const colorKey = toCamelCase(key);
      if (key.includes('500')) {
        palette.error.main = value.value;
      } else if (key.includes('400')) {
        palette.error.light = value.value;
      } else if (key.includes('600')) {
        palette.error.dark = value.value;
      }
      palette.error[colorKey] = value.value;
    });
  }

  // Process Warning colors
  if (tokens.Warning) {
    Object.entries(tokens.Warning).forEach(([key, value]) => {
      const colorKey = toCamelCase(key);
      if (key.includes('500')) {
        palette.warning.main = value.value;
      } else if (key.includes('400')) {
        palette.warning.light = value.value;
      } else if (key.includes('600')) {
        palette.warning.dark = value.value;
      }
      palette.warning[colorKey] = value.value;
    });
  }

  // Process Success colors
  if (tokens.Success) {
    Object.entries(tokens.Success).forEach(([key, value]) => {
      const colorKey = toCamelCase(key);
      if (key.includes('500')) {
        palette.success.main = value.value;
      } else if (key.includes('400')) {
        palette.success.light = value.value;
      } else if (key.includes('600')) {
        palette.success.dark = value.value;
      }
      palette.success[colorKey] = value.value;
    });
  }

  // Process Text colors
  if (tokens.Text) {
    Object.entries(tokens.Text).forEach(([key, value]) => {
      const colorKey = toCamelCase(key);
      if (key.includes('Main')) {
        palette.text.primary = value.value;
      } else if (key.includes('Muted')) {
        palette.text.secondary = value.value;
      } else if (key.includes('500')) {
        palette.text.primary = value.value;
      } else if (key.includes('400')) {
        palette.text.secondary = value.value;
      }
      palette.text[colorKey] = value.value;
    });
  }

  // Process Grey colors
  if (tokens.Grey) {
    Object.entries(tokens.Grey).forEach(([key, value]) => {
      const colorKey = key.replace('Grey ', '');
      palette.grey[colorKey] = value.value;
    });
  }

  // Set background colors
  palette.background.default = tokens.White?.value || '#ffffff';
  palette.background.paper = tokens.White?.value || '#ffffff';
  if (tokens.Text?.['100']) {
    palette.background.secondary = tokens.Text['100'].value;
  }

  return palette;
}

// Helper function to create typography from tokens
function createTypography(tokens) {
  const typography = {
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
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  };

  // Add font sizes from tokens if available
  if (tokens.fontSize) {
    Object.entries(tokens.fontSize).forEach(([key, value]) => {
      const sizeKey = toCamelCase(key);
      if (typography[sizeKey]) {
        typography[sizeKey].fontSize = value.value;
      }
    });
  }

  return typography;
}

// Helper function to create spacing from tokens
function createSpacing(tokens) {
  const baseSpacing = 8;
  const spacing = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72];
  
  // Override with token values if available
  if (tokens.spacing) {
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      const index = parseInt(key);
      if (!isNaN(index) && index < spacing.length) {
        spacing[index] = parseInt(value.value);
      }
    });
  }

  return spacing;
}

// Main sync function
async function syncTokens() {
  try {
    console.log('🎨 Starting Figma token synchronization...');

    // Check if tokens.json exists
    if (!fs.existsSync(TOKENS_PATH)) {
      console.error('❌ tokens.json not found at:', TOKENS_PATH);
      process.exit(1);
    }

    // Read tokens
    const tokensContent = fs.readFileSync(TOKENS_PATH, 'utf8');
    const tokens = JSON.parse(tokensContent);

    console.log('✅ Tokens loaded successfully');

    // Create theme configuration
    const palette = createColorPalette(tokens);
    const typography = createTypography(tokens);
    const spacing = createSpacing(tokens);

    // Generate theme file content
    const themeContent = `/**
 * Auto-generated theme tokens from Figma
 * Generated on: ${new Date().toISOString()}
 */

export const designTokens = ${JSON.stringify({ palette, typography, spacing }, null, 2)};

// Export individual token categories
export const colors = ${JSON.stringify(palette, null, 2)};
export const typography = ${JSON.stringify(typography, null, 2)};
export const spacing = ${JSON.stringify(spacing, null, 2)};

// MUI theme configuration
export const muiThemeConfig = {
  palette: colors,
  typography,
  spacing,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
};

export default designTokens;
`;

    // Ensure theme directory exists
    const themeDir = path.dirname(THEME_OUTPUT_PATH);
    if (!fs.existsSync(themeDir)) {
      fs.mkdirSync(themeDir, { recursive: true });
    }

    // Write theme file
    fs.writeFileSync(THEME_OUTPUT_PATH, themeContent);
    console.log('✅ Theme tokens generated at:', THEME_OUTPUT_PATH);

    // Create stories directory if it doesn't exist
    if (!fs.existsSync(STORIES_OUTPUT_PATH)) {
      fs.mkdirSync(STORIES_OUTPUT_PATH, { recursive: true });
    }

    // Generate color stories JSON
    const colorStoriesData = {
      primary: palette.primary,
      secondary: palette.secondary,
      error: palette.error,
      warning: palette.warning,
      success: palette.success,
      grey: palette.grey,
      text: palette.text,
      background: palette.background,
    };

    fs.writeFileSync(
      path.join(STORIES_OUTPUT_PATH, 'colors.json'),
      JSON.stringify(colorStoriesData, null, 2)
    );
    console.log('✅ Color stories data generated');

    // Generate typography stories JSON
    fs.writeFileSync(
      path.join(STORIES_OUTPUT_PATH, 'typography.json'),
      JSON.stringify(typography, null, 2)
    );
    console.log('✅ Typography stories data generated');

    // Generate spacing stories JSON
    fs.writeFileSync(
      path.join(STORIES_OUTPUT_PATH, 'spacing.json'),
      JSON.stringify({ values: spacing }, null, 2)
    );
    console.log('✅ Spacing stories data generated');

    console.log('🎉 Token synchronization completed successfully!');

    // Watch mode
    if (process.argv.includes('watch')) {
      console.log('👀 Watching for token changes...');
      fs.watchFile(TOKENS_PATH, () => {
        console.log('🔄 Tokens changed, re-syncing...');
        syncTokens();
      });
    }

  } catch (error) {
    console.error('❌ Error syncing tokens:', error);
    process.exit(1);
  }
}

// Run the sync
syncTokens();