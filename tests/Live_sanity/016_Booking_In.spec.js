import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Booking In Flow', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to "Goods In +" > "Booking In"
  console.log('Step 2: Navigating to Booking In...');
  await page.getByRole('link', { name: 'Goods In +' }).click();
  await page.waitForTimeout(1000);
  console.log('Clicking on "BOOKING IN" from sidebar...');
  await page.locator('xpath=//a[@href="https://erp.poundshop.com/booking-in"]').click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Click Previous Button
  console.log('Step 3: Clicking Previous...');
  await page.locator('.bookin_prev').click();
  await page.waitForTimeout(2000);

  // Step 4: Click Next Button
  console.log('Step 4: Clicking Next...');
  await page.locator('.bookin_next').click();
  await page.waitForTimeout(2000);

  // Step 5: Press Escape twice (close modal if open)
  console.log('Step 5: Pressing Escape to close modals...');
  await page.locator('body').press('Escape');
  await page.waitForTimeout(1000);
  await page.locator('body').press('Escape');
  await page.waitForTimeout(1000);

  // Step 6: Click Filter, then Reset
  console.log('Step 6: Clicking Filter → Reset...');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.waitForTimeout(2000);

  // Step 7: Click Previous twice
  console.log('Step 7: Clicking Previous twice...');
  await page.locator('.bookin_prev').click();
  await page.waitForTimeout(1000);
  await page.locator('.bookin_prev').click();
  await page.waitForTimeout(2000);

  // Step 8: Filter by "Completed" status
  console.log('Step 8: Applying filter for Completed bookings...');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Completed', { exact: true }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 9: Open Filter again and click Reset
  console.log('Step 9: Resetting filter...');
  await page.getByRole('button', { name: 'Filter (1)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.waitForTimeout(2000);

  console.log('Booking In flow test completed.');
});
