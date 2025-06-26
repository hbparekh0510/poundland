import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('MROS Summary Report', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to "Buying +" menu
  console.log('Step 2: Clicking on Buying +...');
  await page.getByRole('link', { name: 'Buying +' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Open MROS Summary Report
  console.log('Step 3: Navigating to MROS Summary Report...');
  await page.getByRole('link', { name: 'MROS Summary Report' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 4: Click into "Search by Supplier SKU"
  console.log('Step 4: Focusing on search input...');
  await page.getByRole('textbox', { name: 'Search by Supllier SKU' }).click();
  await page.waitForTimeout(1000);

  // Step 5: Enter SKU
  console.log('Step 5: Entering Supplier SKU - YTC178818...');
  await page.getByRole('textbox', { name: 'Search by Supllier SKU' }).fill('YTC178818');
  await page.waitForTimeout(1000);

  // Step 6: Press Enter to search
  console.log('Step 6: Triggering search...');
  await page.getByRole('textbox', { name: 'Search by Supllier SKU' }).press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 7: Repeat fill and enter (if needed again by design)
  console.log('Step 7: Re-confirming input and triggering search again...');
  await page.getByRole('textbox', { name: 'Search by Supllier SKU' }).fill('YTC178818');
  await page.getByRole('textbox', { name: 'Search by Supllier SKU' }).press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 8: Click Refresh
  console.log('Step 8: Clicking refresh icon...');
  await page.locator('.refresh').click();
  await page.waitForTimeout(2000);

  console.log('MROS Summary Report test completed.');
});