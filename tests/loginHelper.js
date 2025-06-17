// tests/loginHelper.js

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export async function login(page) {
  const loginUrl = process.env.URL;
  const username = process.env.LOGIN;
  const password = process.env.PASSWORD;

  if (!loginUrl || !username || !password) {
    throw new Error('LOGIN, PASSWORD, or URL missing in .env file');
  }

  console.log('Using login URL:', loginUrl);
  console.log('Username:', username);

  await page.goto(loginUrl);

  await page.getByRole('textbox', { name: 'Enter Username Or Email' }).fill(username);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  // Wait for the 2FA screen and click "Skip for now"
  await page.getByText('Skip for now', { exact: true }).click();
  await page.getByRole('button', { name: 'Yes, skip for now' }).click();
  // Wait for Dashboard or some known element to confirm login
  //await page.waitForURL('**/PACKING'); // change this if your landing URL is different
}