import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async configureAndAddToCart() {
    await this.page.click('text=M');
    await this.page.click('text=Blue');
    await this.page.click('button:has-text("Add to Cart")');
  }
}
