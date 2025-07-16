import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';
import { UserData } from '../types/test-data';

export class RegistrationPage extends BasePage {
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly createAccountButton: Locator;
  private readonly successMessage: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('#firstname');
    this.lastNameInput = page.locator('#lastname');
    this.emailInput = page.locator('#email_address');
    this.passwordInput = page.locator('#password');
    this.confirmPasswordInput = page.locator('#password-confirmation');
    this.createAccountButton = page.locator('button[title="Create an Account"]');
    this.successMessage = page.locator('.message-success');
    this.errorMessage = page.locator('.message-error');
  }

  async fillRegistrationForm(userData: UserData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.confirmPassword);
  }

  async submitForm() {
    await this.createAccountButton.click();
    await this.waitForPageLoad();
  }

  async getSuccessMessage(): Promise<string> {
    try {
      return await this.successMessage.textContent() || '';
    } catch {
      return '';
    }
  }

  async getErrorMessage(): Promise<string> {
    try {
      return await this.errorMessage.textContent() || '';
    } catch {
      return '';
    }
  }

  async isErrorMessageVisible(): Promise<boolean> {
    try {
      return await this.errorMessage.isVisible();
    } catch {
      return false;
    }
  }
}