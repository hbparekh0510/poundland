import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js';
// Adjust the import path based on your project structure
// If you have a different path for loginHelper.js, adjust accordingly

test('Dashboard Page', async ({ page }, testInfo) => {
  
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  console.log('Step 1: Login successful.');
  
  // Step 2: Navigate to the Dashboard
  console.log('Step 2: Navigating to Dashboard...');
  await page.getByRole('link', { name: ' Dashboard' }).click();
  console.log('Step 2: Dashboard link clicked.');

  // Step 3: Click on 'MROS' from the menu
  console.log('Step 3: Clicking on "MROS" main menu...');
  await page.getByText('MROS', { exact: true }).click();
  console.log('Step 3: "MROS" menu clicked.');

  // Step 4: Click on 'Sales' submenu
  console.log('Step 4: Clicking on "Sales" submenu...');
  await page.getByText('Sales', { exact: true }).click();
  console.log('Step 4: "Sales" submenu clicked.');

  // Step 5: Click on 'Stock' submenu
  console.log('Step 5: Clicking on "Stock" submenu...');
  await page.getByText('Stock', { exact: true }).click();
  console.log('Step 5: "Stock" submenu clicked.');

  // Final Step: Test completed
  console.log('Test completed successfully.');

   // Step 6: Take screenshot with test file name
    const fileName = path.basename(testInfo.file, '.spec.js'); // gets the current test file name without extension
    const screenshotPath = `test-results/${fileName}-success.png`;
  
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved at: ${screenshotPath}`);
});