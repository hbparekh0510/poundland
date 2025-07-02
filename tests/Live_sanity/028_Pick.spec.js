import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Picking - Smart Pick, Personalized and Order Pick List', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Pick section
  console.log('Step 2: Navigating to Order Processing...');
  await page.getByRole('link', { name: 'Order Processing -' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicked on "Order Processing -"');

  await page.getByRole('link', { name: 'Order Processing +' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicked on "Order Processing +"');

  console.log('Clicking on PICK menu...');
  await page.locator('a[href*="pick-lists-smart"]').click();
  await page.waitForTimeout(1000);
  console.log('Clicked on "PICK"');

  // Step 3: Open and cancel Settings
  console.log('Step 3: Opening Settings and Canceling...');
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  // Step 4: Open Personalized Smart Pick
  console.log('Step 4: Navigating to Personalized Smart Pick...');
  await page.getByRole('link', { name: 'Personalized Smart Pick' }).click();
  await page.waitForTimeout(1000);

  // Step 5: Select Smart Pick Origin
  console.log('Step 5: Selecting Smart Pick Origin...');
  await page.getByRole('combobox', { name: 'Smart Pick Origin' }).click();
  await page.waitForTimeout(1000);

  // Step 6: Filter By Reference
  console.log('Step 6: Filtering by Reference...');
  await page.getByRole('combobox', { name: 'Filter By Reference' }).click();
  await page.waitForTimeout(1000);

  // Step 7: Click Filter (1)
  console.log('Step 7: Clicking Filter (1)...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(1000);

  // Step 8: Filter by User
  console.log('Step 8: Selecting a User...');
  await page.getByRole('combobox', { name: 'Filter By User' }).click();
  await page.waitForTimeout(500);
  await page.locator('#bs-select-7-2').click();
  await page.waitForTimeout(1000);

  // Step 9: Apply Filter
  console.log('Step 9: Applying filter...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Step 10: Reopen filter and reset
  console.log('Step 10: Reopening filter and resetting...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Reset Filter' }).click();
  await page.waitForTimeout(1000);

  // Step 12: Open Order Pick List
  console.log('Step 12: Clicking on Order Pick List...');
  await page.getByRole('link', { name: 'Order Pick List' }).click();
  await page.waitForTimeout(2000);

  // Step 13: Apply Pick List filters
  console.log('Step 13: Applying Pick List filters (In Progress, Pending, Completed)...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('In Progress Pick List').click();
  await page.getByText('Pending Pick List').click();
  await page.getByText('Completed Pick List').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Step 14: Toggle Completed and In Progress
  console.log('Step 14: Toggling Completed and In Progress Pick List...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Completed Pick List').click();
  await page.getByText('In Progress Pick List').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Step 15: Toggle In Progress and Pending
  console.log('Step 15: Toggling In Progress and Pending Pick List...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('In Progress Pick List').click();
  await page.getByText('Pending Pick List').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Step 16: Cancel filter
  console.log('Step 16: Canceling filter...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  console.log('✅ Test completed: Picking - Smart Pick, Personalized and Order Pick List');
});
