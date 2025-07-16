import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openMiniCart() {
    await this.page.click('a.showcart');
  }

  async getFirstCartItemName() {
    return await this.page.locator('.product-item-name').first().textContent();
  }
}
