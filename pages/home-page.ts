import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  private readonly createAccountLink: Locator;
  private readonly signInLink: Locator;
  private readonly searchBox: Locator;
  private readonly searchButton: Locator;
  private readonly cartIcon: Locator;
  private readonly welcomeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.createAccountLink = page.locator('a[href*="customer/account/create"]');
    this.signInLink = page.locator('a[href*="customer/account/login"]');
    this.searchBox = page.locator('#search');
    this.searchButton = page.locator('button[title="Search"]');
    this.cartIcon = page.locator('.counter-number');
    this.welcomeMessage = page.locator('.welcome');
  }

  async goto() {
    await super.goto('/');
    await this.waitForPageLoad();
  }

  async clickCreateAccount() {
    await this.createAccountLink.click();
    await this.waitForPageLoad();
  }

  async clickSignIn() {
    await this.signInLink.click();
    await this.waitForPageLoad();
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
    await this.waitForPageLoad();
  }

  async getCartItemCount(): Promise<string> {
    try {
      return await this.cartIcon.textContent() || '0';
    } catch {
      return '0';
    }
  }

  async getWelcomeMessage(): Promise<string> {
    try {
      return await this.welcomeMessage.textContent() || '';
    } catch {
      return '';
    }
  }

  async clickOnProduct(productName: string) {
    const productLink = this.page.locator(`a[title="${productName}"]`).first();
    await productLink.click();
    await this.waitForPageLoad();
  }

  async navigateToCategory(category: string) {
    const categoryLink = this.page.locator(`a[href*="${category.toLowerCase()}"]`).first();
    await categoryLink.click();
    await this.waitForPageLoad();
  }
}