import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/customer/account/create/');
  }

  async register(user: any) {
    await this.page.fill('#firstname', user.firstName);
    await this.page.fill('#lastname', user.lastName);
    await this.page.fill('#email_address', user.email);
    await this.page.fill('#password', user.password);
    await this.page.fill('#password-confirmation', user.password);
    await this.page.click('button:has-text("Create an Account")');
  }
}
