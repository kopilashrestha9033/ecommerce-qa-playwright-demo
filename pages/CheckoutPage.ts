import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async goToCheckout() {
    await this.page.goto('/checkout/');
  }

  async fillGuestShippingInfo() {
    await this.page.fill('[name="firstname"]', 'Guest');
    await this.page.fill('[name="lastname"]', 'User');
    await this.page.fill('[name="street[0]"]', '123 Main St');
    await this.page.fill('[name="city"]', 'Testville');
    await this.page.selectOption('[name="region_id"]', { index: 1 });
    await this.page.fill('[name="postcode"]', '12345');
    await this.page.fill('[name="telephone"]', '1234567890');
    await this.page.click('button:has-text("Next")');
  }
}
