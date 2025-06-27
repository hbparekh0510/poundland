import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed
import { Console } from 'console';

test('Replen Request', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Replen Request
  console.log('Step 2: Navigating to Storage > Replen Request...');
  await page.getByRole('link', { name: 'Storage +' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Replen Request' }).click();
  await page.waitForLoadState('networkidle');
  console.log('Page loaded.');

  // Step 3: Apply priority filter
  console.log('Step 3: Opening filter and setting priority...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.locator('#priority').selectOption('4');
  await page.waitForTimeout(500); // wait for dropdown to take effect
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForLoadState('networkidle');
  console.log('Filter applied.');

  // Step 4: Open filter again and cancel
  console.log('Step 4: Reopening filter and cancelling...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Cancel' }).click();
  console.log('Filter modal cancelled.');
  console.log('Replen Request flow completed successfully.');
});