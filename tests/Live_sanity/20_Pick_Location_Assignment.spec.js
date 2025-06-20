import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust path if needed

test('Pick Location Assignment', async ({ page }, testInfo) => {
  // Step 1: Login
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Pick Location Assignments
  console.log('Step 2: Navigating to Pick Location Assignments...');
  await page.getByRole('link', { name: 'Storage +' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Pick Location Assignments' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Apply filter - Show Products Booked-In
  console.log('Step 3: Applying filter - Show Products Booked-In...');
  await page.getByRole('button', { name: 'Filter (2)' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Show Products Booked-In').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 4: Apply filter - New Products
  console.log('Step 4: Applying filter - New Products...');
  await page.getByRole('button', { name: 'Filter (3)' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('New Products').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);

  // Step 5: Open and cancel next filter
  console.log('Step 5: Opening next filter and cancelling...');
  await page.getByRole('button', { name: 'Filter (4)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);

  console.log('Pick Location Assignment flow completed.');
});