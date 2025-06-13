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
  await page.waitForTimeout(2000);

  // Step 4: Wait for popup and click on specific range row
  console.log('Step 4: Waiting for popup after clicking "BACK TO SCHOOL" range...');
  const page2Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle');

  // Wait for the "BACK TO SCHOOL" row to be visible and clickable
  const backToSchoolRow = page.locator('tr', { hasText: 'BACK TO SCHOOL' });
  await backToSchoolRow.waitFor({ state: 'visible' });
  console.log('Step 4: "BACK TO SCHOOL" row is visible, clicking it...');

  // Click on the first link in the "BACK TO SCHOOL" row
  await backToSchoolRow.getByRole('link').first().click();
  await page.waitForTimeout(1000);

  // Step 5: Switch to the newly opened popup page
  const page2 = await page2Promise;
  console.log('Step 5: Popup opened and control switched.');
  await page2.waitForTimeout(1000);
});