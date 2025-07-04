import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Spot Check Orders, Refund Reasons, Failed Order List', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Spot Check Orders
  console.log('Step 2: Navigating to Spot Check Orders');
  await page.getByRole('link', { name: 'Spot Check Orders' }).click();
  await page.waitForTimeout(2000);

  // Step 3: Open Refund Reasons
  console.log('Step 3: Navigating to Refund Reasons');
  await page.getByRole('link', { name: 'Refund Reasons' }).click();
  await page.waitForTimeout(2000);

  // Step 4: Open Refund Reason modal (icon )
  console.log('Step 4: Opening Refund Reason modal');
  await page.getByRole('link', { name: '' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Close modal
  console.log('Step 5: Closing modal');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Open Wrong Order No row detail
  console.log('Step 6: Opening Wrong Order No detail');
  await page.getByRole('row', { name: 'Wrong Order No Shannon Jones' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  // Step 7: Close detail view
  console.log('Step 7: Closing detail view');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);

  // Step 8: Open Out of Date No row detail
  console.log('Step 8: Opening Out of Date No detail');
  await page.getByRole('row', { name: 'Out of Date No Shannon Jones' }).locator('a').click();
  await page.waitForTimeout(2000);

  // Step 9: Close detail view
  console.log('Step 9: Closing detail view');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);

  // Step 10: Sort Cancel Reason column
  console.log('Step 10: Sorting Cancel Reason column');
  await page.getByRole('gridcell', { name: 'Cancel Reason: activate to' }).first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('row', {
    name: 'Cancel Reason: activate to sort column descending Default: activate to sort'
  }).getByLabel('Default: activate to sort').click();
  await page.waitForTimeout(2000);

  // Step 11: Navigate to Failed Order List
  console.log('Step 11: Navigating to Failed Order List');
  await page.getByRole('link', { name: 'Failed Order List' }).click();
  await page.waitForTimeout(2000);

  // Step 12: Open Filter
  console.log('Step 12: Opening Filter');
  await page.getByRole('button', { name: 'Filter (1) ' }).click();
  await page.waitForTimeout(2000);

  // Step 13: Set From Date
  console.log('Step 13: Setting From Date');
  await page.getByRole('textbox', { name: 'From Date' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: 'June' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: '2025' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('table').getByText('2020', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByText('Jun', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: '13' }).click();
  await page.waitForTimeout(2000);

  // Step 14: Apply Filter
  console.log('Step 14: Applying Filter');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 15: Open Order Details
  console.log('Step 15: Opening Order 200013999');
  await page.getByRole('row', { name: '200013999 27-Jul-2023' }).getByRole('link').click();
  await page.waitForTimeout(2000);

  // Step 16: Close Order Detail View
  console.log('Step 16: Closing Order Detail View');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);

  console.log('Spot Check Orders, Refund Reasons, Failed Order List completed successfully.');
});