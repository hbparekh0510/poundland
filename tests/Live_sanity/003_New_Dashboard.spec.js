import { test, expect } from '@playwright/test';
import path from 'path';
import { login } from '../loginHelper.js'; // Adjust this path if needed

// Helper function to select the previous day in a standard calendar
async function selectPreviousDay(page) {
  const today = new Date();
  const prevDay = new Date(today);
  prevDay.setDate(today.getDate() - 1);

  const prevDayNum = prevDay.getDate().toString(); // e.g. "11"
  console.log(`Selecting previous day: ${prevDay.toDateString()}`);

  // Wait a moment to ensure calendar is rendered
  await page.waitForTimeout(500);

  // Use XPath to locate <td> element with exact text (e.g., <td>11</td>)
  const dayLocator = page.locator(`xpath=//td[normalize-space(text())='${prevDayNum}']`);
  await dayLocator.first().click();
  await page.waitForTimeout(1000);
}

test('New Dashboard Page & TV Dashboard', async ({ page }, testInfo) => {
  // Step 1: Login to the application
  console.log('Step 1: Logging in...');
  await login(page);
  await page.waitForTimeout(1000);
  console.log('Step 1: Login successful.');

  // Navigating to New Dashboard
  console.log('Navigating to New Dashboard');
  await page.getByRole('link', { name: 'New Dashboard' }).click();
  await page.waitForTimeout(1000);

  // Clicking filter button
  console.log('Opening filter options');
  await page.getByRole('button', { name: /Filter/i }).click();
  await page.waitForTimeout(1000);

  // Selecting shift date
  console.log('Opening shift date selector');
  await page.locator('#shift_date').click();
  await page.waitForTimeout(1000);

  // ✅ Select previous day in calendar
  await selectPreviousDay(page);

  // Applying filter
  console.log('Applying selected filters');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000);

  // Navigating to Picking module
  console.log('Navigating to Picking');
  await page.getByRole('link', { name: 'Picking' }).click();
  await page.waitForTimeout(1000);

  // Navigating to Packing
  console.log('Navigating to Packing');
  await page.getByRole('link', { name: 'Packing', exact: true }).click();
  await page.waitForTimeout(1000);

  // Navigating to Put Away
  console.log('Navigating to Put Away');
  await page.getByRole('link', { name: 'Put Away', exact: true }).click();
  await page.waitForTimeout(1000);

  // Navigating to Replen
  console.log('Navigating to Replen');
  await page.getByRole('link', { name: 'Replen', exact: true }).click();
  await page.waitForTimeout(1000);

  // Opening More menu and navigating to Goods In
  console.log('Opening More menu');
  await page.getByRole('link', { name: 'More' }).click();
  await page.waitForTimeout(1000);

  console.log('Navigating to Goods In');
  await page.getByRole('link', { name: 'Goods In', exact: true }).click();
  await page.waitForTimeout(1000);

  // Navigating to Forecast via More menu again
  console.log('Opening More menu again');
  await page.getByRole('link', { name: 'More' }).click();
  await page.waitForTimeout(1000);

  console.log('Navigating to Forecast');
  await page.getByRole('link', { name: 'Forecast' }).click();
  await page.waitForTimeout(1000);

  // Navigating to Tv Dashboard
  console.log('Opening More menu for the third time');
  await page.getByRole('link', { name: 'More' }).click();
  await page.waitForTimeout(1000);

  console.log('Navigating to Tv Dashboard');
  await page.getByRole('link', { name: 'Tv Dashboard' }).click();
  await page.waitForTimeout(1000);

  // Handling popup and navigating inside it
  console.log('Waiting for new popup page after clicking Darton 1');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Darton 1 ' }).getByRole('link').nth(1).click();
  const page1 = await page1Promise;
  await page1.waitForTimeout(1000);

  // Clicking Order Well in new popup
  console.log('Clicking exact Order Well');
  await page1.getByText('Order Well', { exact: true }).click();
  await page1.waitForTimeout(1000);

  console.log('✅ Test Completed Successfully');
});
