import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Replen', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Click on "Storage +"
  console.log('Clicking on Storage +...');
  await page.getByRole('link', { name: 'Storage +' }).click();

  // Step 3: Click on "Replen"
  console.log('Clicking on Replen...');
  await page.getByRole('link', { name: ' Replen' }).click();

  // Step 4: Open first filter
  console.log('Opening Filter (1)...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(1000);

  // Step 5: Select "Emergency" in location filter
  console.log('Selecting Emergency location...');
  await page.locator('#location_advance_search').getByText('Emergency').click();
  await page.waitForTimeout(1000);

  // Step 6: Apply first filter
  console.log('Applying first filter...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Step 7: Open filter again (now Filter (2))
  console.log('Opening Filter (2)...');
  await page.getByRole('button', { name: 'Filter (2) ' }).click();
  await page.waitForTimeout(1000);

  // Step 8: Re-select "Emergency" and select "Priority-1"
  console.log('Re-selecting Emergency and selecting Priority-1...');
  await page.locator('#location_advance_search').getByText('Emergency').click();
  await page.getByText('Priority-1').click();
  await page.waitForTimeout(1000);

  // Step 9: Apply second filter
  console.log('Applying second filter...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Step 10: Open filter again and cancel
  console.log('Reopening filter and clicking Cancel...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  console.log(' Replen Test completed.');
});