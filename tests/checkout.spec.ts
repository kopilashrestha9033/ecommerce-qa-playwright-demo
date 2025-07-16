import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Guest checkout flow', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  await home.navigate();
  await home.selectProduct('Radiant Tee');
  await product.configureAndAddToCart();
  await checkout.goToCheckout();
  await checkout.fillGuestShippingInfo();
  await expect(page.locator('text=Shipping Methods')).toBeVisible();
});
