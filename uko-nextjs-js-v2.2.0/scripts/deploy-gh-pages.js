#!/usr/bin/env node

/**
 * GitHub Pages Deployment Script
 * This script builds and deploys Storybook to GitHub Pages
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BUILD_DIR = path.join(__dirname, '../storybook-static');
const GH_PAGES_BRANCH = 'gh-pages';

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

// Helper function to check if gh-pages is installed
function checkDependencies() {
  try {
    execSync('npx gh-pages --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Main deployment function
async function deploy() {
  try {
    console.log('🚀 Starting GitHub Pages deployment...\n');

    // Check if gh-pages is installed
    if (!checkDependencies()) {
      console.log('📦 Installing gh-pages...');
      exec('npm install --save-dev gh-pages');
    }

    // Check if build directory exists
    if (!fs.existsSync(BUILD_DIR)) {
      console.log('❌ Build directory not found. Building Storybook first...');
      exec('npm run build-storybook');
    }

    // Get repository information
    let repoUrl;
    try {
      repoUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
      console.log(`📍 Repository URL: ${repoUrl}`);
    } catch (error) {
      console.error('❌ Could not get repository URL. Make sure you are in a git repository.');
      process.exit(1);
    }

    // Extract repository name and owner
    const repoMatch = repoUrl.match(/github\.com[:/](.+?)\/(.+?)(\.git)?$/);
    if (!repoMatch) {
      console.error('❌ Could not parse repository URL.');
      process.exit(1);
    }

    const [, owner, repo] = repoMatch;
    const repoName = repo.replace('.git', '');
    
    console.log(`👤 Owner: ${owner}`);
    console.log(`📚 Repository: ${repoName}`);

    // Create CNAME file for custom domain (optional)
    // Uncomment and modify if you have a custom domain
    // const cnameFile = path.join(BUILD_DIR, 'CNAME');
    // fs.writeFileSync(cnameFile, 'your-custom-domain.com');

    // Create .nojekyll file to bypass Jekyll processing
    const nojekyllFile = path.join(BUILD_DIR, '.nojekyll');
    fs.writeFileSync(nojekyllFile, '');
    console.log('✅ Created .nojekyll file');

    // Deploy to GitHub Pages
    console.log('\n🚢 Deploying to GitHub Pages...');
    exec(`npx gh-pages -d ${BUILD_DIR} -b ${GH_PAGES_BRANCH} --message "Deploy Storybook to GitHub Pages [skip ci]"`);

    // Calculate the GitHub Pages URL
    const ghPagesUrl = `https://${owner}.github.io/${repoName}/`;
    
    console.log('\n✨ Deployment successful! ✨');
    console.log('🌐 Your Storybook is live at:');
    console.log(`   ${ghPagesUrl}`);
    console.log('\n📝 Note: It may take a few minutes for changes to appear.');
    console.log('💡 Make sure GitHub Pages is enabled in your repository settings.');
    console.log(`   Settings URL: https://github.com/${owner}/${repoName}/settings/pages`);

    // Update package.json with homepage if needed
    const packageJsonPath = path.join(__dirname, '../package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (!packageJson.homepage) {
      packageJson.homepage = ghPagesUrl;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
      console.log('\n✅ Updated package.json with homepage URL');
    }

  } catch (error) {
    console.error('\n❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

// Run deployment
deploy();