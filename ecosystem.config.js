module.exports = {
  apps: [{
    name: 'uko-storybook',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp/uko-storybook',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 6006,
      STORYBOOK_DISABLE_TELEMETRY: '1'
    }
  }]
};