import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { testUser } from '../utils/test-data';

test('User can register successfully', async ({ page }) => {
  const register = new RegisterPage(page);
  await register.navigate();
  await register.register(testUser);
  await expect(page.locator('text=Thank you for registering')).toBeVisible();
});
