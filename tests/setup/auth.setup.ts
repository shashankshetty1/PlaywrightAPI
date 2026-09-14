import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/Loginpage';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '1234565666'
  );

  await page.waitForURL('https://cw.vriodigital.com/E/ask');

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});