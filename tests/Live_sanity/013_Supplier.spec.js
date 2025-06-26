import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Suppliers', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 2: Navigate to Suppliers
  console.log('Step 2: Navigating to Suppliers...');
  await page.getByRole('link', { name: 'Suppliers' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 3: Search for Poundland
  console.log('Step 3: Searching for "Poundland"...');
  const searchBox = page.getByRole('textbox', { name: 'Search by Sup. Name, Sup.' });
  await searchBox.click();
  await searchBox.fill('Poundland');
  await searchBox.press('Enter');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Step 4: Click on Poundland supplier link
  console.log('Step 4: Selecting Poundland...');
  await page.getByRole('link', { name: 'Poundland', exact: true }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Tab-wise Navigation
  const moreClick = async (tabName) => {
    console.log(`Navigating to "${tabName}" tab...`);
    await page.getByRole('tab', { name: tabName }).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'More' }).click();
    await page.waitForTimeout(2000);
  };

  // Step 5 to 12: Navigate through all tabs
  await moreClick('Contact Info');
  await moreClick('Payment Info');
  await moreClick('Ratings');
  await moreClick('Poundland Products');
  await moreClick('Poundland Credentials');
  await moreClick('Average Lead Time');
  await moreClick('References');
  await moreClick('Terms & Condition');
  await moreClick('Empty Pallets');

  // Step 13: Cancel / Exit
  console.log('Step 13: Clicking Cancel to exit...');
  await page.getByRole('link', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);

  console.log('Supplier detail navigation test completed successfully.');
});