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
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  viteFinal: async (config, { configType }) => {
    // React 및 JSX 처리 개선
    config.esbuild = {
      ...config.esbuild,
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
    };
    
    // 빌드 최적화
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        external: [],
      },
    };

    return config;
  },
};

export default config;