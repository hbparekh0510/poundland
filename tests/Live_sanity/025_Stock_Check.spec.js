import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Stock Check', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Navigate to Stock Control
  console.log('Navigating to Stock Control > Stock Check...');
  await page.getByRole('link', { name: 'Stock Control +' }).click();
  await page.waitForTimeout(1000);

  // Navigate to Stock Check
  await page.getByRole('link', { name: 'Stock Check' }).click();
  await page.waitForTimeout(1000);

  // Apply Skips Filter
  console.log('Applying "Skips" filter...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.locator('#custom_advance_search_fields').getByText('Skips').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Cancel Filter Dialog
  console.log('Cancelling Filter popup...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  // Navigate to Perpetual Inventory
  console.log('Navigating to Perpetual Inventory...');
  await page.getByRole('link', { name: 'Perpetual Inventory' }).click();
  await page.waitForTimeout(1000);

  // Apply Dated Products Filter
  console.log('Applying "Dated Products" filter...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.getByText('Dated Products', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Cancel Filter
  console.log('Cancelling Filter popup again...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  // Navigate to PI Job List
  console.log('Navigating to PI Job List...');
  await page.getByRole('link', { name: 'More' }).click();
  await page.getByRole('link', { name: 'PI Job List' }).click();
  await page.waitForTimeout(1000);

  // Navigate to Location Check tab
  console.log('Switching to Location Check tab...');
  await page.getByRole('link', { name: 'More' }).click();
  await page.getByRole('tab', { name: 'Location Check' }).click();
  await page.waitForTimeout(2000);

  // Navigate to Stock Adjustments tab
  console.log('Switching to Stock Adjustments tab...');
  await page.getByRole('link', { name: 'More' }).click();
  await page.getByRole('tab', { name: 'Stock Adjustments' }).click();
  await page.waitForTimeout(2000);

  // Navigate to Product Movements tab
  console.log('Switching to Product Movements tab...');
  await page.getByRole('link', { name: 'More' }).click();
  await page.getByRole('tab', { name: 'Product Movements' }).click();
  await page.waitForTimeout(2000);

  // Apply Location Type Filter
  console.log('Applying Location Type filter...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.locator('#filter_location_type').selectOption('1');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Cancel Final Filter
  console.log('Cancelling final Filter popup...');
  await page.getByRole('button', { name: 'Filter (4)' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  console.log('Stock Check test completed.');
});