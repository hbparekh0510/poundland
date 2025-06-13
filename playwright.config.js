// playwright.config.js
 
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');
 
// Load environment variables from .env and .env.Careview2 (in that order)
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config({ path: '.env.Careview2' });
 
module.exports = defineConfig({
  timeout: 100 * 1000,
  testDir: './tests',
  testMatch: '**/*.spec.js',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
 
reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ['junit', { outputFile: 'test-results/results.xml' }]
],
 
    use: {
  headless: false, // <--- change this line
  baseURL: process.env.BASE_URL || 'https://preprod.poundshop.com/login',
  slowMo: 2000,
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
},
 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});