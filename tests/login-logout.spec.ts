import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { existingUser } from '../utils/test-data';

test('User can login and logout', async ({ page }) => {
  const login = new LoginPage(page);
  await login.navigate();
  await login.login(existingUser.email, existingUser.password);
  await expect(page.locator('text=Welcome')).toBeVisible();
  await page.click('button:has-text("Sign Out")');
  await expect(page.locator('text=You are signed out')).toBeVisible();
});
