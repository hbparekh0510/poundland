import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Carrier Manifest', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Carrier Manifest
  console.log('Step 2: Navigating to Carrier Manifest');
  await page.getByRole('link', { name: 'Carrier Manifest' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Open Settings
  console.log('Step 3: Opening Settings');
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);

  // Step 4: Close Settings
  console.log('Step 4: Closing Settings');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Click Royal Mail
  console.log('Step 5: Clicking Royal Mail');
  await page.getByRole('button', { name: 'Royal Mail' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Close Royal Mail modal
  console.log('Step 6: Closing Royal Mail modal');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Open Filter
  console.log('Step 7: Opening Filter');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(1000);

  // Step 8: Select Carrier ID 12
  console.log('Step 8: Selecting Carrier ID = 12');
  await page.locator('#custom_advance_search_fields #carrier_id').selectOption('12');
  await page.waitForTimeout(1000);

  // Step 9: Apply Filter
  console.log('Step 9: Applying Filter');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 10: Reopen Filter and Cancel
  console.log('Step 10: Re-opening Filter and Cancelling');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);

  console.log('Carrier Manifest test completed successfully.');
});
