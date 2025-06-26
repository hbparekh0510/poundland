import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Booking in Report', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Booking In Report
  console.log('Step 2: Navigating to Goods In > Booking In Report...');
  await page.getByRole('link', { name: 'Goods In +' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Booking In Report' }).click();
  await page.waitForLoadState('networkidle');
  console.log('Navigation successful.');

  // Step 3: Open filter panel
  console.log('Step 3: Opening filter panel...');
  await page.getByRole('button', { name: 'Filter (2) ' }).click();
  await page.waitForTimeout(1000);

  // Step 4: Selecting From Date (yesterday)
  console.log('Step 4: Selecting From Date (yesterday)...');
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const day = yesterday.getDate().toString(); // e.g., "25"

  // Open the calendar by clicking the From Date textbox
  await page.getByRole('textbox', { name: 'From Date' }).click();
  await page.waitForTimeout(500);

  // Try a flexible locator: click the first visible cell with exact date text
  await page.locator(`role=cell[name="${day}"]`).first().click();

  console.log(`Selected yesterday's date: ${day}`);
  await page.waitForTimeout(1000); // Wait for date selection to process

  // Step 5: Search and select user
  console.log('Step 5: Searching for user Maria Stefania...');
  const searchList = page.getByRole('list').filter({ hasText: /^$/ });
  await searchList.getByRole('searchbox').click();
  await searchList.getByRole('searchbox').fill('maria');
  await page.waitForTimeout(1000); // Wait for dropdown to populate
  await page.getByRole('option', { name: 'Maria Stefania' }).click();
  console.log('User selected.');

  // Step 6: Apply filter
  console.log('Step 6: Applying filter...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForLoadState('networkidle');

  // Step 7: Reopen filter panel and cancel
  console.log('Step 7: Reopening filter panel and cancelling...');
  await page.getByRole('button', { name: 'Filter (5) ' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  console.log('Test completed.');
});
