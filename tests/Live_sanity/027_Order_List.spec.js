import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Order Listing', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Orders List
  console.log('Step 2: Navigating to Order Processing...');
  await page.getByRole('link', { name: 'Order Processing -' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicked on "Order Processing -"');

  await page.getByRole('link', { name: 'Order Processing +' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicked on "Order Processing +"');

  await page.getByRole('link', { name: 'Orders List' }).click();
  await page.waitForTimeout(1000);
  console.log('Navigated to Orders List page');

  // Step 3: Apply first filter - Despatched status
  console.log('Step 3: Applying filter - Status: Despatched...');
  await page.locator('#btnFilter').click();
  await page.waitForTimeout(1000);
  console.log('Opened filter dialog');

  await page.getByRole('searchbox', { name: 'Select Status' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicked on status dropdown');

  await page.getByRole('option', { name: 'Despatched' }).click();
  await page.waitForTimeout(1000);
  console.log('Selected status: Despatched');

  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);
  console.log('Applied the filter');

  // Step 4: Open and cancel the filter to simulate user behavior
  console.log('Step 4: Reopening filter and clicking cancel...');
  await page.getByRole('button', { name: 'Filter (5)' }).click();
  await page.waitForTimeout(1000);
  console.log('Filter reopened');

  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  console.log('Filter canceled');

  // Step 5: Apply date range and another status
  console.log('Step 5: Applying date range and new status filter...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(1000);
  console.log('Opened filter again');

  await page.getByRole('searchbox', { name: 'Select Status' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicked on status dropdown again');

  await page.getByRole('option', { name: 'Processing' }).click();
  await page.waitForTimeout(1000);
  console.log('Selected status: Processing');

  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  console.log('Applied final filter with date and status');

  console.log('Order Listing test completed.');
});