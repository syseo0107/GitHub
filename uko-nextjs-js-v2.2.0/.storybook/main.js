/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Add absolute import support
    config.resolve.modules.push(
      require('path').resolve(__dirname, '../src')
    );
    
    // Add alias for components
    config.resolve.alias = {
      ...config.resolve.alias,
      'components': require('path').resolve(__dirname, '../src/components'),
      'theme': require('path').resolve(__dirname, '../src/theme'),
      'contexts': require('path').resolve(__dirname, '../src/contexts'),
      'hooks': require('path').resolve(__dirname, '../src/hooks'),
      'utils': require('path').resolve(__dirname, '../src/utils'),
      'layouts': require('path').resolve(__dirname, '../src/layouts'),
      'page-sections': require('path').resolve(__dirname, '../src/page-sections'),
    };
    
    return config;
  },
};

export default config;