import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js';
// Adjust the import path based on your project structure

test('New Dashboard_Main Dashboard', async ({ page }, testInfo) => {

  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  console.log('Step 1: Login successful.');
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 2: Navigate to the New Dashboard
  console.log('Step 2: Clicking on "New Dashboard"...');
  await page.getByRole('link', { name: ' New Dashboard' }).click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 3: Open the filter panel
  console.log('Step 3: Clicking on Filter button...');
  await page.getByRole('button', { name: ' Filter (4) ' }).click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 4: Click on the shift date calendar input
  console.log('Step 4: Clicking on Shift Date input...');
  await page.locator('#shift_date').click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 5: Select date "3" from calendar
  console.log('Step 5: Selecting date "3" from calendar...');
  await page.getByRole('cell', { name: '3', exact: true }).first().click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 6: Click on Apply button
  console.log('Step 6: Clicking on Apply button...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 7: Click on the shift label (confirming selected shift)
  console.log('Step 7: Clicking on selected shift label...');
  await page.getByText('03-Jun 2025 - Night Shift (07').click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  // Step 8: Sort the table header
  console.log('Step 8: Clicking on table header to sort...');
  await page.locator('thead').getByRole('cell').click();
  await page.waitForTimeout(2000); // wait for 2 seconds

  console.log('Test completed successfully.');

 // Step 9: Take screenshot with test file name
  const fileName = path.basename(testInfo.file, '.spec.js'); // gets the current test file name without extension
  const screenshotPath = `test-results/${fileName}-success.png`;

  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`📸 Screenshot saved at: ${screenshotPath}`);
});