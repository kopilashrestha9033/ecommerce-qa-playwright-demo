import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async configureAndAddToCart() {
    await this.page.locator('.swatch-option.text').first().scrollIntoViewIfNeeded();
    await this.page.locator('.swatch-option.text').first().click({ timeout: 5000 });
    
    await this.page.locator('.swatch-option.color').first().scrollIntoViewIfNeeded();
    await this.page.locator('.swatch-option.color').first().click({ timeout: 5000 });
    
    await this.page.click('button:has-text("Add to Cart")');
  }
}
