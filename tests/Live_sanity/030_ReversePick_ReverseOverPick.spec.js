import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Reverse Pick and Reverse Over Pick', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Reverse Pick
  console.log('Step 2: Navigating to Reverse Pick');
  await page.getByRole('link', { name: ' Reverse Pick' }).click();
  await page.waitForTimeout(2000);

  // Step 3: Click "Move and Next Product"
  console.log('Step 3: Clicking Move and Next Product');
  await page.getByRole('button', { name: 'Move and Next Product' }).click();
  await page.waitForTimeout(2000);

  // Step 4: Navigate to Reverse Over Pick
  console.log('Step 4: Navigating to Reverse Over Pick');
  await page.getByRole('link', { name: ' Reverse Over Pick' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Click "Report Over Pick"
  console.log('Step 5: Clicking Report Over Pick');
  await page.getByRole('button', { name: 'Report Over Pick' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Click "Cancel"
  console.log('Step 6: Clicking Cancel');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Click "Move to Pallet Locations"
  console.log('Step 7: Clicking Move to Pallet Locations');
  await page.getByRole('button', { name: 'Move to Pallet Locations' }).click();
  await page.waitForTimeout(2000);

  // Step 8: Click OK to confirm
  console.log('Step 8: Clicking OK');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);

  console.log('Reverse Pick and Reverse Over Pick completed successfully.');
});
