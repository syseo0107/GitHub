#!/usr/bin/env node

/**
 * Build Live Storybook Script
 * This script prepares and builds Storybook for production deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BUILD_DIR = path.join(__dirname, '../storybook-static');
const STORIES_DIR = path.join(__dirname, '../stories');
const TOKENS_DIR = path.join(__dirname, '../stories/tokens');

// Helper function to execute commands
function exec(command, options = {}) {
  try {
    console.log(`📦 Executing: ${command}`);
    return execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    throw error;
  }
}

// Helper function to ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
}

// Main build function
async function buildStorybook() {
  try {
    console.log('🏗️  Starting Storybook build process...\n');

    // Ensure required directories exist
    ensureDir(STORIES_DIR);
    ensureDir(TOKENS_DIR);

    // Step 1: Sync Figma tokens
    console.log('🎨 Step 1: Syncing Figma tokens...');
    if (fs.existsSync(path.join(__dirname, 'sync-figma-tokens.js'))) {
      exec('node scripts/sync-figma-tokens.js');
    } else {
      console.log('⚠️  Figma token sync script not found, skipping...');
    }

    // Step 2: Generate stories
    console.log('\n📚 Step 2: Generating stories...');
    if (fs.existsSync(path.join(__dirname, 'generate-stories.js'))) {
      exec('node scripts/generate-stories.js');
    } else {
      console.log('⚠️  Story generation script not found, skipping...');
    }

    // Step 3: Clean previous build
    console.log('\n🧹 Step 3: Cleaning previous build...');
    if (fs.existsSync(BUILD_DIR)) {
      fs.rmSync(BUILD_DIR, { recursive: true, force: true });
      console.log('✅ Cleaned previous build');
    }

    // Step 4: Build Storybook
    console.log('\n🔨 Step 4: Building Storybook for production...');
    exec('npx storybook build');

    // Step 5: Optimize build
    console.log('\n⚡ Step 5: Optimizing build...');
    
    // Add custom index.html modifications if needed
    const indexPath = path.join(BUILD_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      let indexContent = fs.readFileSync(indexPath, 'utf8');
      
      // Add Google Analytics or other tracking (optional)
      // indexContent = indexContent.replace(
      //   '</head>',
      //   `<!-- Google Analytics -->
      //    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      //    <script>
      //      window.dataLayer = window.dataLayer || [];
      //      function gtag(){dataLayer.push(arguments);}
      //      gtag('js', new Date());
      //      gtag('config', 'GA_MEASUREMENT_ID');
      //    </script>
      //    </head>`
      // );

      // Add meta tags for better SEO
      indexContent = indexContent.replace(
        '<title>Storybook</title>',
        `<title>UKO Dashboard - Design System</title>
         <meta name="description" content="UKO Dashboard Design System - Component library and design tokens">
         <meta property="og:title" content="UKO Dashboard Design System">
         <meta property="og:description" content="Component library and design tokens for UKO Dashboard">
         <meta property="og:type" content="website">`
      );

      fs.writeFileSync(indexPath, indexContent);
      console.log('✅ Optimized index.html');
    }

    // Step 6: Generate build info
    const buildInfo = {
      version: require('../package.json').version,
      buildTime: new Date().toISOString(),
      nodeVersion: process.version,
      env: process.env.NODE_ENV || 'production',
    };

    fs.writeFileSync(
      path.join(BUILD_DIR, 'build-info.json'),
      JSON.stringify(buildInfo, null, 2)
    );
    console.log('✅ Generated build info');

    // Step 7: Create custom 404 page for GitHub Pages
    const notFoundPath = path.join(BUILD_DIR, '404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
      console.log('✅ Created 404.html for GitHub Pages');
    }

    // Calculate build size
    const getDirSize = (dirPath) => {
      let size = 0;
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          size += getDirSize(filePath);
        } else {
          size += stat.size;
        }
      });
      
      return size;
    };

    const buildSize = getDirSize(BUILD_DIR);
    const buildSizeMB = (buildSize / (1024 * 1024)).toFixed(2);

    console.log('\n✨ Build completed successfully! ✨');
    console.log(`📁 Build directory: ${BUILD_DIR}`);
    console.log(`📊 Build size: ${buildSizeMB} MB`);
    console.log(`📅 Build time: ${buildInfo.buildTime}`);
    console.log('\n💡 Next step: Run "npm run deploy" to deploy to GitHub Pages');

  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run build
buildStorybook();