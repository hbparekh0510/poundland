import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Buy by Range', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Step 1: Login successful.');

  // Step 2: Navigate to Buying +
  console.log('Step 2: Clicking on Buying + menu...');
  await page.getByRole('link', { name: 'Buying +' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Click on Buy by Range
  console.log('Step 3: Clicking on Buy by Range...');
  await page.getByRole('link', { name: 'Buy by Range' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 4: Select main category (e.g. 915)
  console.log('Step 4: Selecting main category: 915...');
  await page.locator('#parent_id').selectOption('915');
  await page.waitForTimeout(2000);

  // Step 5: Go to filtered range page
  console.log('Step 5: Navigating to Stock tab with filter 915...');
  await page.goto('https://erp.poundshop.com/buy-by-range?filter_buying=915&tab=stock');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 6: Click Sales tab
  console.log('Step 6: Switching to Sales tab...');
  await page.getByRole('tab', { name: 'Sales' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 7: Click Supplier tab
  console.log('Step 7: Switching to Supplier tab...');
  await page.getByRole('tab', { name: 'Supplier' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 8: Click P.O. tab
  console.log('Step 8: Switching to P.O. tab...');
  await page.getByRole('tab', { name: 'P.O.' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 9: Select different main category: 4
  console.log('Step 9: Changing main category to 4...');
  await page.locator('#parent_id').selectOption('4');
  await page.waitForTimeout(2000);

  // Step 10: Go to PO tab with category 4
  console.log('Step 10: Navigating to PO tab with filter 4...');
  await page.goto('https://erp.poundshop.com/buy-by-range?filter_buying=4&tab=po');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 11: Select child category 109
  console.log('Step 11: Selecting child category: 109...');
  await page.locator('#child_category').getByRole('combobox').selectOption('109');
  await page.waitForTimeout(2000);

  // Step 12: Go to PO tab with filter 4,109
  console.log('Step 12: Navigating to PO tab with filters 4,109...');
  await page.goto('https://erp.poundshop.com/buy-by-range?filter_buying=4,109&tab=po');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 13: Select sub category 432 (e.g., Breakfast Bars)
  console.log('Step 13: Selecting sub-category: 432...');
  await page.locator('#child_category div')
    .filter({ hasText: '--Select Sub Category--Breakfast BarsCerealsPorridgePreserves & Spreads' })
    .getByRole('combobox')
    .selectOption('432');
  await page.waitForTimeout(2000);

  // Step 14: Go to PO tab with filter 4,109,432
  console.log('Step 14: Navigating to PO tab with filters 4,109,432...');
  await page.goto('https://erp.poundshop.com/buy-by-range?filter_buying=4,109,432&tab=po');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 15: Switch to Stock tab
  console.log('Step 15: Switching to Stock tab...');
  await page.getByRole('tab', { name: 'Stock' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 16: Switch to Sales tab
  console.log('Step 16: Switching to Sales tab...');
  await page.getByRole('tab', { name: 'Sales' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 17: Switch to Supplier tab
  console.log('Step 17: Switching to Supplier tab...');
  await page.getByRole('tab', { name: 'Supplier' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 18: Switch to P.O. tab
  console.log('Step 18: Switching to P.O. tab...');
  await page.getByRole('tab', { name: 'P.O.' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  console.log('Buy by Range test flow completed successfully.');
});