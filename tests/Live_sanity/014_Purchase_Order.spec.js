import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Purchase order', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 5: Navigate to Purchase Order module
  console.log('Step 5: Navigating to Purchase Order module...');
  await page.getByRole('link', { name: ' Purchase Order' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 6: Focus on Search Box
  console.log('Step 6: Clicking on Search by Purchase Order...');
  const searchBox = page.getByRole('textbox', { name: 'Search by Purchase Order' });
  await searchBox.click();
  await page.waitForTimeout(1000);

  // Step 7: Fill search value
  console.log('Step 7: Entering search term: Poundland...');
  await searchBox.fill('Poundland');
  await page.waitForTimeout(1000);

  // Step 8: Press Enter to search
  console.log('Step 8: Pressing Enter to search...');
  await searchBox.press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 9: Click Refresh icon
  console.log('Step 9: Clicking refresh icon...');
  await page.locator('.refresh').click();
  await page.waitForTimeout(2000);

  console.log('Purchase Order search test completed.');
});