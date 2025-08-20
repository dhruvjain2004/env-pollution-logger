#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Production environment content with the actual Render URL
const productionEnvContent = `# Production Environment
VITE_API_BASE_URL=https://env-pollution-logger.onrender.com
`;

// Update .env.production
const productionEnvPath = path.join(__dirname, '.env.production');
fs.writeFileSync(productionEnvPath, productionEnvContent);
console.log('✅ Updated .env.production with Render backend URL');
console.log('📝 VITE_API_BASE_URL=https://env-pollution-logger.onrender.com');

console.log('\n🚀 Ready for deployment!');
console.log('📋 Next steps:');
console.log('1. Deploy backend to Render (if not already done)');
console.log('2. Deploy frontend to Vercel');
console.log('3. Set VITE_API_BASE_URL=https://env-pollution-logger.onrender.com in Vercel environment variables');
