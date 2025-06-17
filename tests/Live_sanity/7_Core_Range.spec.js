import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Core range', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Step 1: Login successful.');

  // Step 2: Click on "Buying +"
  console.log('Step 2: Navigating to Buying + section...');
  await page.getByRole('link', { name: 'Buying +' }).click();
  await page.waitForTimeout(2000);

  // Step 3: Click on "Core Range"
  console.log('Step 3: Navigating to Core Range...');
  await page.getByRole('link', { name: 'Core Range' }).click();
  await page.waitForTimeout(3000);
});