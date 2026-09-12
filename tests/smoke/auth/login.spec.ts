import { expect, test } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

test('Login Test@Smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '1234565666'
  );

  await expect(page).toHaveURL('https://cw.vriodigital.com/E/ask');
});
