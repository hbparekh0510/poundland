import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Move Product', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Stock Control > Move Products
  console.log('Step 2: Navigating to Move Products...');
  await page.getByRole('link', { name: 'Stock Control +' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Move Products' }).click();
  await page.waitForTimeout(1000);

  // Step 3: Scan/Enter Location Barcode
  console.log('Step 3: Entering location barcode...');
  const locationInput = page.getByRole('textbox', { name: 'Scan Location Barcode' });
  await locationInput.click();
  await page.waitForTimeout(500);
  // Type 'DP01' character by character
  for (const char of 'DP01') {
    await locationInput.type(char);
    await page.waitForTimeout(100); // Optional: small delay between keystrokes
  }
  await page.keyboard.press('Enter');
  console.log('Location DP01 entered.');
  await page.waitForTimeout(1000);

  // Step 4: Select matching location from dropdown
  console.log('Step 4: Selecting location DP01...');
  await page.getByRole('link', { name: 'DP01' }).click();
  await page.waitForTimeout(1000);

  // Step 5: Confirm location selection
  console.log('Step 5: Confirming location...');
  await page.locator('//button[@id="searchProductModelBtn"]').click();
  await page.waitForTimeout(1000);

  // Step 6: Cancel the movement (test end scenario)
  console.log('Step 6: Cancelling the movement...');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  console.log('Move Product test completed.');
});