import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('MROS Report', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to "Buying +" menu
  console.log('Step 2: Navigating to Buying +...');
  await page.getByRole('link', { name: 'Buying +' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Click on MROS Report
  console.log('Step 3: Clicking on MROS Report...');
  await page.getByRole('link', { name: 'MROS Report' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 4: Click on Search input
  console.log('Step 4: Focusing Search by SKU...');
  await page.getByRole('textbox', { name: 'Search by SKU' }).click();
  await page.waitForTimeout(1000);

  // Step 5: Enter SKU value
  console.log('Step 5: Entering SKU - XMA137303...');
  await page.getByRole('textbox', { name: 'Search by SKU' }).fill('XMA137303');
  await page.waitForTimeout(1000);

  // Step 6: Press Enter to search
  console.log('Step 6: Pressing Enter to search...');
  await page.getByRole('textbox', { name: 'Search by SKU' }).press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  console.log('MROS Report test completed.');
});