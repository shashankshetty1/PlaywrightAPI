import { test, expect } from '@playwright/test';

test('user can log out', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('button', { name: /log out|logout/i }).click();

	await expect(page).toHaveURL(/login|sign-in/i);
});
