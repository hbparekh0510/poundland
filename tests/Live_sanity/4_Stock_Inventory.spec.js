import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Dashboard Page - Stock Inventory Search and Filter', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Step 1: Login successful.');

  // Navigate to Inventory +
  console.log('Navigating to Inventory +');
  await page.getByRole('link', { name: 'Inventory +' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Navigate to Stock Inventory
  console.log('Navigating to Stock Inventory');
  await page.getByRole('link', { name: 'Stock Inventory' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Click on Search Box
  console.log('Clicking on search textbox');
  await page.getByRole('textbox', { name: 'Search by Our SKU, Title,' }).click();
  await page.waitForTimeout(2000);

  // Fill in SKU
  console.log('Filling in SKU: 940883');
  await page.getByRole('textbox', { name: 'Search by Our SKU, Title,' }).fill('940883');
  await page.waitForTimeout(2000);

  // Press Enter to Search
  console.log('Pressing Enter to search');
  await page.getByRole('textbox', { name: 'Search by Our SKU, Title,' }).press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Clear the search filter
  console.log('Clearing the search filter');
  await page.getByTitle('Clear Filter').click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Open Filter Panel
  console.log('Opening filter panel');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(2000);

  // Click on "Show In Stock Products only" filter
  console.log('Clicking on "Show In Stock Products only" checkbox');
  await page.locator('span').filter({ hasText: 'Show In Stock Products only' }).locator('i').click();
  await page.waitForTimeout(2000);

  // Apply Filter
  console.log('Applying the filter');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Clear the filter again
  console.log('Clearing the filter');
  await page.getByTitle('Clear Filter').click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  console.log('Test execution completed successfully.');
});