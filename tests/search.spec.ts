import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Search returns relevant products', async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate();
  await home.search('shirt');
  await expect(page.locator('.product-item-info')).toHaveCountGreaterThan(0);
});
