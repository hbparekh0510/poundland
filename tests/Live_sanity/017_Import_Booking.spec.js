import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Import booking', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Goods In > Import Booking
  console.log('Step 2: Navigating to Booking In...');
  await page.getByRole('link', { name: 'Goods In +' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Import Booking' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Click on Page 2
  console.log('Step 3: Clicking Page 2...');
  await page.getByText('2', { exact: true }).click();
  await page.waitForTimeout(1000);

  // Step 4: Click on Page 3
  console.log('Step 4: Clicking Page 3...');
  await page.getByText('3', { exact: true }).click();
  await page.waitForTimeout(1000);

  // Step 5: Click Import File icon
  console.log('Step 5: Clicking Import File icon...');
  await page.getByTitle('Import File').click();
  await page.waitForTimeout(2000);

  // Step 6: Click Cancel to close popup
  console.log('Step 6: Clicking Cancel button to close Import popup...');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);

  console.log('Import Booking flow test completed.');
});