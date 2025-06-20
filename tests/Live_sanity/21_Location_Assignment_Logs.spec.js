import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Location Assignment Logs', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Location Assignment Logs
  console.log('Step 2: Navigating to Location Assignment Logs...');
  await page.getByRole('link', { name: 'Storage +' }).click();
  await page.getByRole('link', { name: 'Location Assignment Logs' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Open Logs for specific locations
  console.log('Step 3: Opening logs for specific locations...');
  await page.getByText('2', { exact: true }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  await page.getByText('3', { exact: true }).click();

  console.log('Location Assignment Logs flow completed.');
});