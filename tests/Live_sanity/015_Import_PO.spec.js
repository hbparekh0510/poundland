import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

test('Import PO Flow', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  console.log('Login successful.');

  // Step 3: Click on "Import PO" tab
  console.log('Step 3: Clicking on Import PO...');
  await page.getByRole('link', { name: 'Import PO' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // // Step 4: Click on the specific PO row link
  // console.log('Step 4: Clicking on PO row link: "904 Nicky Taylor Process"...');
  // await page.getByRole('row', { name: '904 Nicky Taylor Process' }).getByRole('link').first().click();
  // await page.waitForLoadState('networkidle');
  // await page.waitForTimeout(2000);

  // // Step 5: Click Cancel button to exit
  // console.log('Step 5: Clicking Cancel button...');
  // await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.waitForTimeout(2000);

  console.log('Import PO test completed.');
});