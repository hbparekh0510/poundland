import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Repeat Buying', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('✅ Login successful.');

  // Step 2: Navigate to Repeat Buying module
  console.log('Step 2: Navigating to Repeat Buying...');
  await page.getByRole('link', { name: 'Repeat Buying Repeat Buying' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Click on icon in first row
  console.log('Step 3: Clicking icon in first row...');
  await page.locator('.odd > .sorting_1 > .d-flex > .icon-moon').first().click();
  await page.waitForTimeout(2000);

  // Step 4: Click on icon in 7th row
  console.log('Step 4: Clicking icon in 7th row...');
  await page.locator('tr:nth-child(7) > .sorting_1 > .d-flex > .icon-moon').click();
  await page.waitForTimeout(2000);

  // Step 5: Focus on search box
  console.log('Step 5: Clicking on search input...');
  await page.getByRole('textbox', { name: 'Search by Our SKU, Title,' }).click();
  await page.waitForTimeout(1000);

  // Step 6: Enter SKU
  console.log('Step 6: Entering SKU 478701...');
  await page.getByRole('textbox', { name: 'Search by Our SKU, Title,' }).fill('478701');
  await page.waitForTimeout(1000);

  // Step 7: Press Enter to search
  console.log('Step 7: Pressing Enter to search...');
  await page.getByRole('textbox', { name: 'Search by Our SKU, Title,' }).press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  console.log('Repeat Buying test completed.');
});