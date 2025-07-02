# Test info

- Name: Picking - Smart Pick, Personalized and Order Pick List
- Location: /home/tops/Hitesh/Automation/Poundshop/tests/Live_sanity/028_Pick.spec.js:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'More' })

    at /home/tops/Hitesh/Automation/Poundshop/tests/Live_sanity/028_Pick.spec.js:81:50
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import path from 'path';
   3 | import { login } from '../loginHelper.js'; // Adjust path if needed
   4 |
   5 | test('Picking - Smart Pick, Personalized and Order Pick List', async ({ page }, testInfo) => {
   6 |   // Step 1: Login to the application
   7 |   console.log('Step 1: Logging in...');
   8 |   await login(page);
   9 |   await page.waitForLoadState('networkidle');
   10 |   await page.waitForTimeout(2000); // extra wait post login
   11 |   console.log('Login successful.');
   12 |
   13 |   // Step 2: Navigate to Pick section
   14 |   console.log('Step 2: Navigating to Order Processing...');
   15 |   await page.getByRole('link', { name: 'Order Processing -' }).click();
   16 |   await page.waitForTimeout(1000);
   17 |   console.log('Clicked on "Order Processing -"');
   18 |
   19 |   await page.getByRole('link', { name: 'Order Processing +' }).click();
   20 |   await page.waitForTimeout(1000);
   21 |   console.log('Clicked on "Order Processing +"');
   22 |
   23 |   console.log('Clicking on PICK menu...');
   24 |   await page.locator('a[href*="pick-lists-smart"]').click();
   25 |   await page.waitForTimeout(1000);
   26 |   console.log('Clicked on "PICK"');
   27 |
   28 |   // Step 3: Open and cancel Settings
   29 |   console.log('Step 3: Opening Settings and Canceling...');
   30 |   await page.getByRole('button', { name: 'Settings' }).click();
   31 |   await page.waitForTimeout(1000);
   32 |   await page.getByRole('button', { name: 'Cancel' }).click();
   33 |   await page.waitForTimeout(1000);
   34 |
   35 |   // Step 4: Open Personalized Smart Pick
   36 |   console.log('Step 4: Navigating to Personalized Smart Pick...');
   37 |   await page.getByRole('link', { name: 'Personalized Smart Pick' }).click();
   38 |   await page.waitForTimeout(1000);
   39 |
   40 |   // Step 5: Select Smart Pick Origin
   41 |   console.log('Step 5: Selecting Smart Pick Origin...');
   42 |   await page.getByRole('combobox', { name: 'Smart Pick Origin' }).click();
   43 |   await page.waitForTimeout(1000);
   44 |
   45 |   // Step 6: Filter By Reference
   46 |   console.log('Step 6: Filtering by Reference...');
   47 |   await page.getByRole('combobox', { name: 'Filter By Reference' }).click();
   48 |   await page.waitForTimeout(1000);
   49 |
   50 |   // Step 7: Click Filter (1)
   51 |   console.log('Step 7: Clicking Filter (1)...');
   52 |   await page.getByRole('button', { name: 'Filter (1)' }).click();
   53 |   await page.waitForTimeout(1000);
   54 |
   55 |   // Step 8: Filter by User
   56 |   console.log('Step 8: Selecting a User...');
   57 |   await page.getByRole('combobox', { name: 'Filter By User' }).click();
   58 |   await page.waitForTimeout(500);
   59 |   await page.locator('#bs-select-7-2').click();
   60 |   await page.waitForTimeout(1000);
   61 |
   62 |   // Step 9: Apply Filter
   63 |   console.log('Step 9: Applying filter...');
   64 |   await page.getByRole('button', { name: 'Apply' }).click();
   65 |   await page.waitForTimeout(1000);
   66 |
   67 |   // Step 10: Reopen filter and reset
   68 |   console.log('Step 10: Reopening filter and resetting...');
   69 |   await page.getByRole('button', { name: 'Filter (2)' }).click();
   70 |   await page.waitForTimeout(1000);
   71 |   await page.getByRole('button', { name: 'Reset Filter' }).click();
   72 |   await page.waitForTimeout(1000);
   73 |
   74 |   // Step 11: Keyboard shortcut Ctrl/Cmd + O
   75 |   console.log('Step 11: Triggering keyboard shortcut (Ctrl/Cmd + O)...');
   76 |   await page.locator('body').press('ControlOrMeta+o');
   77 |   await page.waitForTimeout(1000);
   78 |
   79 |   // Step 12: Open More menu
   80 |   console.log('Step 12: Clicking on More...');
>  81 |   await page.getByRole('link', { name: 'More' }).click();
      |                                                  ^ Error: locator.click: Target page, context or browser has been closed
   82 |   await page.waitForTimeout(1000);
   83 |
   84 |   // Step 13: Apply Pick List filters
   85 |   console.log('Step 13: Applying Pick List filters (In Progress, Pending, Completed)...');
   86 |   await page.getByRole('button', { name: 'Filter (2)' }).click();
   87 |   await page.waitForTimeout(1000);
   88 |   await page.getByText('In Progress Pick List').click();
   89 |   await page.getByText('Pending Pick List').click();
   90 |   await page.getByText('Completed Pick List').click();
   91 |   await page.waitForTimeout(1000);
   92 |   await page.getByRole('button', { name: 'Apply' }).click();
   93 |   await page.waitForTimeout(1000);
   94 |
   95 |   // Step 14: Toggle Completed and In Progress
   96 |   console.log('Step 14: Toggling Completed and In Progress Pick List...');
   97 |   await page.getByRole('button', { name: 'Filter (2)' }).click();
   98 |   await page.waitForTimeout(1000);
   99 |   await page.getByText('Completed Pick List').click();
  100 |   await page.getByText('In Progress Pick List').click();
  101 |   await page.waitForTimeout(1000);
  102 |   await page.getByRole('button', { name: 'Apply' }).click();
  103 |   await page.waitForTimeout(1000);
  104 |
  105 |   // Step 15: Toggle In Progress and Pending
  106 |   console.log('Step 15: Toggling In Progress and Pending Pick List...');
  107 |   await page.getByRole('button', { name: 'Filter (2)' }).click();
  108 |   await page.waitForTimeout(1000);
  109 |   await page.getByText('In Progress Pick List').click();
  110 |   await page.getByText('Pending Pick List').click();
  111 |   await page.waitForTimeout(1000);
  112 |   await page.getByRole('button', { name: 'Apply' }).click();
  113 |   await page.waitForTimeout(1000);
  114 |
  115 |   // Step 16: Cancel filter
  116 |   console.log('Step 16: Canceling filter...');
  117 |   await page.getByRole('button', { name: 'Filter (2)' }).click();
  118 |   await page.waitForTimeout(1000);
  119 |   await page.getByRole('button', { name: 'Cancel' }).click();
  120 |   await page.waitForTimeout(1000);
  121 |
  122 |   console.log('✅ Test completed: Picking - Smart Pick, Personalized and Order Pick List');
  123 | });
  124 |
```