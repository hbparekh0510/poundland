import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Customer', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // extra wait post login
  console.log('Login successful.');

  // Step 2: Navigate to Customer module
  console.log('Step 2: Navigating to Customer module');
  await page.getByRole('link', { name: 'Customer' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Search by name "Louise"
  console.log('Step 3: Searching for customer: Louise');
  await page.getByRole('textbox', { name: 'Search by ID, Name, Email,' }).click();
  await page.getByRole('textbox', { name: 'Search by ID, Name, Email,' }).fill('Louise');
  await page.getByRole('textbox', { name: 'Search by ID, Name, Email,' }).press('Enter');
  await page.waitForTimeout(2000);

  // Step 4: Sort by Customer ID
  console.log('Step 4: Sorting by Customer Id');
  await page.getByRole('button', { name: 'Customer Id' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Click on Customer Name to sort
  console.log('Step 5: Sorting by Customer Name');
  await page.getByRole('link', { name: 'Customer Name' }).click();
  await page.waitForTimeout(2000);

  // Step 6: Focus again on the search box
  console.log('Step 6: Clicking search box again');
  await page.getByRole('textbox', { name: 'Search by ID, Name, Email,' }).click();
  await page.waitForTimeout(2000);

  console.log('Customer test completed successfully.');
});
