import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Poundland Listing Screen: Already Listed, To be Listed, In Progress', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Step 1: Login successful.');

  // Step 2: Navigate to Inventory +
  console.log('Step 2: Navigating to Inventory +');
  await page.getByRole('link', { name: 'Inventory +' }).click();
  await page.waitForTimeout(2000);

  // Step 3: Navigate to Poundland Listing
  console.log('Step 3: Navigating to Poundland Listing');
  await page.getByRole('link', { name: 'Poundland Listing' }).click();
  await page.waitForTimeout(2000);

  // Step 4: Click on To Be Listed tab
  console.log('Step 4: Clicking on "To Be Listed" tab');
  await page.getByRole('link', { name: 'To Be Listed' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Click on In Progress tab
  console.log('Step 5: Clicking on "In Progress" tab');
  await page.getByRole('link', { name: 'In Progress' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Click on Already Listed tab
  console.log('Step 6: Clicking on "Already Listed" tab');
  await page.getByRole('link', { name: 'Already Listed' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Click on Filter (1)
  console.log('Step 7: Opening filter panel');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(2000);

  // Step 8: Select "New Product" from filter
  console.log('Step 8: Selecting "New Product" filter');
  await page.getByText('New Product').click();
  await page.waitForTimeout(2000);

  // Step 9: Apply the filter
  console.log('Step 9: Applying the filter');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  console.log('Test completed successfully.');
});