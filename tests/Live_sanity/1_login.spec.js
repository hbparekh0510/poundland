// tests/Live_sanity/login.spec.js

import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust the import path if needed

test('Login', async ({ page }, testInfo) => {
  // Step 1: Perform login
  await login(page);

  // Step 2: Validate login by checking for a known element
  console.log('✅ Checking if "PACKING" heading is visible...');
  await expect(page.getByRole('heading', { name: 'PACKING' })).toBeVisible();

  // Step 3: Take screenshot with test file name
  const fileName = path.basename(testInfo.file, '.spec.js'); // gets the base file name
  const screenshotPath = `test-results/${fileName}-success.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`📸 Screenshot saved at: ${screenshotPath}`);
});