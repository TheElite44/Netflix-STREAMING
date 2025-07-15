#!/usr/bin/env node

/**
 * Build script for Vercel deployment
 * This script ensures the frontend is built correctly for Vercel's static hosting
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

console.log('🚀 Starting Vercel build process...');

// Ensure we're in the right directory
const rootDir = process.cwd();
console.log(`📁 Working directory: ${rootDir}`);

// Create dist directory if it doesn't exist
const distDir = path.join(rootDir, 'dist');
if (!existsSync(distDir)) {
  console.log('📁 Creating dist directory...');
  mkdirSync(distDir, { recursive: true });
}

// Build the frontend
console.log('🔨 Building frontend with Vite...');
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('✅ Frontend build completed successfully!');
} catch (error) {
  console.error('❌ Frontend build failed:', error.message);
  process.exit(1);
}

// Verify the build
const publicDir = path.join(distDir, 'public');
if (!existsSync(publicDir)) {
  console.error('❌ Build verification failed: dist/public directory not found');
  process.exit(1);
}

const indexPath = path.join(publicDir, 'index.html');
if (!existsSync(indexPath)) {
  console.error('❌ Build verification failed: index.html not found in dist/public');
  process.exit(1);
}

console.log('✅ Build verification passed!');
console.log('🎉 Vercel build process completed successfully!');
console.log('');
console.log('📝 Next steps:');
console.log('1. Push your code to your repository');
console.log('2. Connect your repository to Vercel');
console.log('3. Set up environment variables in Vercel dashboard');
console.log('4. Deploy!');