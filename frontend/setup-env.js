#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment file content for local development
const localEnvContent = `# Local Development Environment
VITE_API_BASE_URL=http://localhost:5000
`;

// Environment file content for production
const productionEnvContent = `# Production Environment
# Replace with your actual Render backend URL
VITE_API_BASE_URL=https://your-backend-url.onrender.com
`;

// Create .env.local for local development
const localEnvPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(localEnvPath)) {
  fs.writeFileSync(localEnvPath, localEnvContent);
  console.log('✅ Created .env.local for local development');
} else {
  console.log('⚠️  .env.local already exists');
}

// Create .env.production for production
const productionEnvPath = path.join(__dirname, '.env.production');
if (!fs.existsSync(productionEnvPath)) {
  fs.writeFileSync(productionEnvPath, productionEnvContent);
  console.log('✅ Created .env.production for production');
} else {
  console.log('⚠️  .env.production already exists');
}

console.log('\n📝 Environment files created!');
console.log('📋 Next steps:');
console.log('1. Update .env.production with your actual Render backend URL');
console.log('2. For Vercel deployment, add VITE_API_BASE_URL as environment variable');
console.log('3. Restart your development server: npm run dev');
