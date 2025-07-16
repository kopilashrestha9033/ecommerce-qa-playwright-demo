import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const testProduct = 'Radiant Tee';

test('Guest checkout flow', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  await home.navigate();
  await home.selectProduct(testProduct);
  await product.configureAndAddToCart();
  await page.goto('/checkout/');
  await checkout.fillGuestShippingInfo();
  await expect(page.locator('text=Shipping Methods')).toBeVisible();
});
