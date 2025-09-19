/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Allow external hosts for sandbox environment
    config.server = {
      ...config.server,
      host: '0.0.0.0',
      port: 8080,
      allowedHosts: 'all',
      hmr: {
        port: 8080,
        host: '0.0.0.0',
      },
    };
    
    // Disable host check for development
    if (configType === 'DEVELOPMENT') {
      config.server.allowedHosts = 'all';
    }
    
    return config;
  },
};
export default config;