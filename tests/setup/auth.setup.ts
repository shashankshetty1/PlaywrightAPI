import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '1234565666'
  );

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});