import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Add product to cart', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.navigate();
  await home.selectProduct('Radiant Tee');
  await product.configureAndAddToCart();
  await page.waitForSelector('text=You added Radiant Tee to your shopping cart.');
  await cart.openMiniCart();
  const name = await cart.getFirstCartItemName();
  expect(name).toContain('Radiant Tee');
});
