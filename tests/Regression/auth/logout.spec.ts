import { expect, test } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

test('Logout Test@regression', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://cw.vriodigital.com/E/ask', { waitUntil: 'domcontentloaded' });

  await loginPage.logout();

  await expect(page).toHaveURL('https://cw.vriodigital.com/login');
});