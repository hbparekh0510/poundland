import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Booking In Report Filter Flow', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Goods In > Booking In Report
  console.log('Step 2: Navigating to Booking In Report...');
  await page.getByRole('link', { name: 'Goods In +' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Booking In Report' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Open Filter Panel
  console.log('Step 3: Opening filter panel...');
  await page.getByRole('button', { name: 'Filter (2) ' }).click();
  await page.waitForTimeout(1000);

  // Step 4: Select From Date
  console.log('Step 4: Selecting Previous day as From Date...');
  // Get yesterday's date in the required format
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const day = yesterday.getDate().toString();

  await page.getByRole('textbox', { name: 'From Date' }).click();
  await page.getByRole('cell', { name: day }).click();
  await page.waitForTimeout(1000);

  // Step 5: Apply the filter
  console.log('Step 5: Clicking Apply filter...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 6: Reopen filter (now showing 3 applied)
  console.log('Step 6: Reopening filter panel...');
  await page.getByRole('button', { name: 'Filter (3)' }).click();
  await page.waitForTimeout(1000);

  // Step 7: Click Cancel to close filter panel
  console.log('Step 7: Closing filter panel by clicking Cancel...');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  console.log('Booking In Report test completed.');
});