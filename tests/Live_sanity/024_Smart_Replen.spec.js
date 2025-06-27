import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Replen', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // Wait after login
  console.log('Login successful.');

  // Step 2: Click on Storage +
  console.log('Step 2: Clicking on Storage +...');
  await page.getByRole('link', { name: ' Storage +' }).click();
  await page.waitForTimeout(1000); // Wait after menu expand

  // Step 3: Click on Smart Replen
  console.log('Step 3: Clicking on Smart Replen...');
  await page.getByRole('link', { name: ' Smart Replen' }).click();
  await page.waitForTimeout(1000); // Wait after Smart Replen click

  // Step 4: Click on Order Replen
  console.log('Step 4: Clicking on Order Replen...');
  await page.getByRole('link', { name: 'Order Replen' }).click();
  await page.waitForTimeout(1000); // Wait after Order Replen click

  // Step 5: Click on Smart Replen (exact match)
  console.log('Step 5: Clicking on Smart Replen (exact)...');
  await page.getByRole('link', { name: 'Smart Replen', exact: true }).click();
  await page.waitForTimeout(1000); // Wait after navigation

  // Step 6: Open Filter (1)
  console.log('Step 6: Opening Filter (1)...');
  await page.getByRole('button', { name: ' Filter (1) ' }).click();
  await page.waitForTimeout(1000); // Wait after filter open

  // Step 7: Apply filter
  console.log('Step 7: Clicking Apply on Filter...');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000); // Wait after Apply

  // Step 8: Open Filter again
  console.log('Step 8: Reopening Filter (1)...');
  await page.getByRole('button', { name: ' Filter (1) ' }).click();
  await page.waitForTimeout(1000); // Wait after filter reopen

  // Step 9: Cancel filter
  console.log('Step 9: Clicking Cancel on Filter...');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000); // Final wait

  console.log('Smart ReplenTest completed.');
});