import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/customer/account/login/');
  }

  async login(email: string, password: string) {
    await this.page.fill('#email', email);
    await this.page.fill('#pass', password);
    await this.page.click('button:has-text("Sign In")');
  }
}
