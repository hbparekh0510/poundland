import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Put Away Flow', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Put Away Dashboard
  console.log('Step 2: Navigating to Put Away Dashboard...');
  await page.getByRole('link', { name: 'Storage +' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Put Away' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Put Away Dashboard' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Open Job List
  console.log('Step 3: Opening Put Away Job List...');
  await page.getByRole('link', { name: 'Put Away Job List' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 4: Click on all Job Types tabs
  console.log('Step 4: Exploring job type tabs...');
  await page.getByText('Replen Jobs').click();
  await page.waitForTimeout(1000);
  await page.getByText('Move Module Jobs').click();
  await page.waitForTimeout(1000);
  await page.getByText('Manual Jobs').click();
  await page.waitForTimeout(1000);
  await page.getByText('Return Jobs').click();
  await page.waitForTimeout(1000);
  await page.getByText('Reverse Pick Jobs').click();
  await page.waitForTimeout(1000);
  await page.getByText('Goods-In Jobs').click();
  await page.waitForTimeout(2000);

  console.log('Put Away test completed.');
});