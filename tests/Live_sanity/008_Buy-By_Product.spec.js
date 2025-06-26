import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Buy by Product', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Step 1: Login successful.');

  // Step 6: Navigate to Buying +
  console.log('Step 6: Navigating to Buying + menu...');
  await page.getByRole('link', { name: 'Buying +' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Click on Buy by Product
  console.log('Step 7: Opening Buy by Product...');
  await page.getByRole('link', { name: 'Buy by Product' }).click();
  await page.waitForTimeout(2000);

  // Step 8: Focus on the barcode input field
  console.log('Step 8: Focusing barcode input field...');
  await page.getByRole('textbox', { name: 'Scan or Search Barcode and' }).click();
  await page.waitForTimeout(2000);

  // Step 9: Fill barcode
  console.log('Step 9: Entering barcode...');
  await page.getByRole('textbox', { name: 'Scan or Search Barcode and' }).fill('2200435408268');
  await page.waitForTimeout(2000);

  // Step 10: Press Enter to search
  console.log('Step 10: Pressing Enter to search barcode...');
  await page.getByRole('textbox', { name: 'Scan or Search Barcode and' }).press('Enter');
  await page.waitForTimeout(2000);

  // Step 11: Switch to Sales tab
  console.log('Step 11: Switching to Sales tab...');
  await page.getByRole('tab', { name: 'Sales' }).click();
  await page.waitForTimeout(2000);

  // Step 12: Switch to Supplier tab
  console.log('Step 12: Switching to Supplier tab...');
  await page.getByRole('tab', { name: 'Supplier' }).click();
  await page.waitForTimeout(2000);

  // Step 13: Switch to P.O. tab
  console.log('Step 13: Switching to P.O. tab...');
  await page.getByRole('tab', { name: 'P.O.' }).click();
  await page.waitForTimeout(2000);

  console.log('Test flow completed successfully.');
});