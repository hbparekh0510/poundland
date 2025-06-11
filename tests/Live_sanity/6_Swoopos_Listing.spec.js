import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Swoopos Listing Screen: Already Listed, To be Listed, In Progress', async ({ page }, testInfo) => {
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

  // Step 3: Navigate to Swoopos Listing
  console.log('Step 3: Navigating to Swoopos Listing');
  await page.getByRole('link', { name: 'Swoopos Listing' }).click();
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

  console.log('Test completed successfully.');
});