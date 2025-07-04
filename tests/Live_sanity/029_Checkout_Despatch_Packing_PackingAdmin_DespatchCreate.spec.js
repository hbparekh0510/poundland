import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Checkout, Packing, Packing Admin, DespatchCreate', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Order Processing -
  console.log('Step 2: Navigating to Order Processing -');
  await page.getByRole('link', { name: 'Order Processing -' }).click();
  await page.waitForTimeout(2000);

  // Step 3: Navigate to Order Processing +
  console.log('Step 3: Navigating to Order Processing +');
  await page.getByRole('link', { name: 'Order Processing +' }).click();
  await page.waitForTimeout(2000);

  // Step 4: Go to Checkout
  console.log('Step 4: Navigating to Checkout');
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Clear existing selections
  console.log('Step 5: Clicking Clear button');
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Send to Packing
  console.log('Step 6: Clicking Send to Packing');
  await page.getByRole('button', { name: 'Send to Packing' }).click();
  await page.waitForTimeout(2000);
  console.log('Step 6.1: Confirming with OK');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Navigate to Despatch Create
  console.log('Step 7: Navigating to Despatch Create');
  await page.getByRole('link', { name: 'Despatch Create' }).click();
  await page.waitForTimeout(2000);

  // Step 8: Navigate to Packaging Admin
  console.log('Step 8: Navigating to Packaging Admin');
  await page.getByRole('link', { name: 'Packaging Admin' }).click();
  await page.waitForTimeout(2000);

  // Step 9: Navigate to Packing
  console.log('Step 9: Navigating to Packing');
  await page.getByRole('link', { name: 'Packing' }).click();
  await page.waitForTimeout(2000);

  // Step 10: Click Pack button
  console.log('Step 10: Clicking Pack button');
  await page.getByRole('button', { name: 'Pack' }).click();
  await page.waitForTimeout(2000);
  console.log('Step 10.1: Confirming with OK');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);

  // Step 11: Reopen Packaging Admin
  console.log('Step 11: Reopening Packaging Admin');
  await page.getByRole('link', { name: 'Packaging Admin' }).click();
  await page.waitForTimeout(2000);

  // Step 12: Go to Despatch Listing
  console.log('Step 12: Navigating to Despatch Listing');
  await page.getByRole('link', { name: 'Despatch Listing' }).click();
  await page.waitForTimeout(2000);

  // Step 13: Apply filter with carrier
  console.log('Step 13: Applying Filter (Carrier = Evri)');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('searchbox', { name: 'Select Carrier' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Evri', exact: true }).click();
  await page.waitForTimeout(2000);

  // Step 14: Set from_date in calendar to previous day
  console.log('Step 14: Selecting From Date (previous day)');
  const today = new Date();
  const prevDay = new Date(today);
  prevDay.setDate(today.getDate() - 1);
  const prevDayNum = prevDay.getDate().toString();

  await page.locator('#from_date').click();
  await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: prevDayNum, exact: true }).first().click();
  await page.waitForTimeout(2000);

  // Step 15: Apply the filter
  console.log('Step 15: Clicking Apply');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 16: Expand filter and cancel
  console.log('Step 16: Re-opening and canceling the filter');
  await page.getByRole('button', { name: 'Filter (4)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);

  // Step 17: Click on page numbers
  console.log('Step 17: Navigating through pagination');
  await page.getByText('2', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByText('3', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByText('1', { exact: true }).click();
  await page.waitForTimeout(2000);

  console.log('Checkout, Packing, Packing Admin, Despatch Create completed successfully.');
});