import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Returns & Refunds', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Returns & Refunds
  console.log('Step 2: Navigating to Returns & Refunds');
  await page.getByRole('link', { name: 'Returns & Refunds' }).click();
  await page.waitForLoadState('networkidle'); // wait for network to settle
  await page.waitForTimeout(2000);

  // Step 3: Search for order
  console.log('Step 3: Searching for Order 3002061485');
  await page.getByRole('textbox', { name: 'Search by Customer, Order' }).click();
  await page.getByRole('textbox', { name: 'Search by Customer, Order' }).fill('3002061485');
  await page.getByRole('textbox', { name: 'Search by Customer, Order' }).press('Enter');
  await page.waitForTimeout(2000);

  // Step 4: Click refresh
  console.log('Step 4: Clicking refresh');
  await page.locator('.refresh').click();
  await page.waitForTimeout(2000);

  // Step 5: Filter by 'Complete'
  console.log('Step 5: Applying filter: Complete');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('searchbox').click();
  await page.getByRole('option', { name: 'Complete', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Filter by 'Open'
  console.log('Step 6: Applying filter: Open');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('searchbox').click();
  await page.getByRole('option', { name: 'Open' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Click Create RMA
  console.log('Step 7: Clicking Create RMA');
  await page.getByTitle('Create RMA').click();
  await page.waitForTimeout(2000);

  // Step 8: Cancel RMA creation
  console.log('Step 8: Cancelling RMA');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);

  console.log('Returns & Refunds completed successfully.');
});
