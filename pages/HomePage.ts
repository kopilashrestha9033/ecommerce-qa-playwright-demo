import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async selectProduct(name: string) {
    await this.page.click(`text=${name}`);
  }

  async search(term: string) {
    await this.page.fill('#search', term);
    await this.page.press('#search', 'Enter');
  }
}
