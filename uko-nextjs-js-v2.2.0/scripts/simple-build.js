#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Simple Storybook build process starting...');

// Create a minimal Storybook configuration
const buildDir = path.join(__dirname, '../storybook-static');

// Create build directory
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Create a simple index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UKO Dashboard - Design System</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .container {
      background: white;
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      max-width: 600px;
      width: 100%;
      text-align: center;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }
    .subtitle {
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
    .status {
      background: #f0f7ff;
      border-left: 4px solid #5896e1;
      padding: 1rem;
      margin: 2rem 0;
      text-align: left;
      border-radius: 4px;
    }
    .status h3 {
      color: #5896e1;
      margin-bottom: 0.5rem;
    }
    .links {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #5896e1;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(88, 150, 225, 0.3);
    }
    .btn-secondary {
      background: #6c757d;
    }
    .features {
      text-align: left;
      margin: 2rem 0;
    }
    .features h3 {
      color: #333;
      margin-bottom: 1rem;
    }
    .features ul {
      list-style: none;
      padding: 0;
    }
    .features li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }
    .features li:before {
      content: "✅";
      position: absolute;
      left: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 UKO Dashboard</h1>
    <p class="subtitle">Design System & Component Library</p>
    
    <div class="status">
      <h3>📦 Build Status</h3>
      <p>The Storybook is currently being configured for optimal deployment.</p>
      <p><strong>Build Time:</strong> ${new Date().toISOString()}</p>
    </div>
    
    <div class="features">
      <h3>✨ Features</h3>
      <ul>
        <li>Figma Token Integration</li>
        <li>Automatic Story Generation</li>
        <li>Material-UI Components</li>
        <li>Light/Dark Theme Support</li>
        <li>Responsive Design System</li>
        <li>Interactive Component Playground</li>
      </ul>
    </div>
    
    <div class="links">
      <a href="https://github.com/syseo0107/GitHub" class="btn">
        View Repository
      </a>
      <a href="https://github.com/syseo0107/GitHub/tree/main/uko-nextjs-js-v2.2.0" class="btn btn-secondary">
        View Source
      </a>
    </div>
  </div>
</body>
</html>`;

// Write the index.html file
fs.writeFileSync(path.join(buildDir, 'index.html'), indexHtml);

// Create .nojekyll file
fs.writeFileSync(path.join(buildDir, '.nojekyll'), '');

// Create a build info file
const buildInfo = {
  version: '2.2.0',
  buildTime: new Date().toISOString(),
  status: 'provisional',
  message: 'Full Storybook build pending dependency resolution'
};

fs.writeFileSync(
  path.join(buildDir, 'build-info.json'),
  JSON.stringify(buildInfo, null, 2)
);

console.log('✅ Simple build completed successfully!');
console.log(`📁 Build directory: ${buildDir}`);
console.log('📝 Note: This is a provisional build. Full Storybook will be deployed after dependency resolution.');