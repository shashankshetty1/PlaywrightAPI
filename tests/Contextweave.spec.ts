import { test, expect } from '@playwright/test';

test('Connect Google source', async ({ page }) => {
  await page.goto('https://cw.vriodigital.com/login');

  // Login
  await page.getByRole('textbox', { name: 'Email' }).fill('adaeze.okonjo@vriodigital.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234565666');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Navigate to Sources
  await page.getByRole('menuitem', { name: 'database Sources' }).click();

  // Connect a source
  await page.getByRole('button', { name: 'plus Connect source' }).nth(1).click();

  // Source registration
  await page.getByRole('button', { name: 'Continue arrow-right' }).click();

  // Google authentication
  await page.getByRole('button', { name: 'google Login with Google' }).click();
  await page.getByRole('button', { name: 'Adaeze Okonjo adaeze.okonjo@' }).click();
  await page.getByRole('button', { name: 'Allow' }).click();

  // Source configuration
  await page.getByRole('textbox', { name: 'E-waste warehouse' }).fill('Conops');
  await page.getByRole('button', { name: 'Continue arrow-right' }).click();

  // Preview and finish
  await page.getByRole('button', { name: 'Run preview' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

  // Close
  await page.locator('button').filter({ hasText: 'Close' }).click();
});