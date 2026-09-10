import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Connect Google source', async ({ page }) => {

 const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '1234565666'
  );

      // Open Sources
  await page.getByRole('menuitem', { name: 'database Sources' }).click();

  // Connect Source
  await page.getByRole('button', { name: 'plus Connect source' })
    .first()
    .click();

  // Select Google BigQuery
  await page.getByText('Google BigQuery', { exact: true }).click();

  // Select BigQuery connector
  await page.getByText('Google BigQueryreal connector', { exact: false }).click();

  // Filter available connectors
  await page.getByRole('combobox', { name: 'Filter' }).click();
  await page.getByText('Filter: Available now').click();

  // Select BigQuery connector again after filtering
  await page.getByText('Google BigQueryreal connector', { exact: false }).click();

  // Continue
  await page.getByRole('button', { name: 'Continue arrow-right' }).click();

  // Login with Google
  await page.getByRole('button', { name: 'google Login with Google' }).click();

  // Select Google account
  await page.getByRole('button', { name: 'Adaeze Okonjo adaeze.okonjo@' }).click();

  // Allow access
  await page.getByRole('button', { name: 'Allow' }).click();

  // Enter warehouse/project information
  await page.getByRole('textbox', { name: 'E-waste warehouse' })
    .fill('TEST');

  await page.getByRole('button', { name: 'Continue arrow-right' }).click();

  await page.getByRole('textbox', { name: 'E-waste warehouse' })
    .fill('TEST123');

  await page.getByRole('button', { name: 'Continue arrow-right' }).click();

  // Preview
  await page.getByRole('button', { name: 'Run preview' }).click();

  await page.waitForTimeout(4000);

  // Finish
  await page.getByRole('button', { name: 'Finish' }).click();

  // Close
  await page.locator('button').filter({ hasText: 'Close' }).click();


});