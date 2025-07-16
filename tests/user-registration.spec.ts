import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { RegistrationPage } from '../pages/registration-page';
import { TestDataGenerator } from '../utils/test-data';

test.describe('User Registration', () => {
  let homePage: HomePage;
  let registrationPage: RegistrationPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    await homePage.goto();
  });

  test('Successful user registration with valid details', async ({ page }) => {
    const userData = TestDataGenerator.generateUserData();

    await homePage.clickCreateAccount();
    await registrationPage.fillRegistrationForm(userData);
    await registrationPage.submitForm();

    await expect(page).toHaveURL(/customer\/account/);
    const welcomeMessage = await homePage.getWelcomeMessage();
    expect(welcomeMessage).toContain(`Welcome, ${userData.firstName} ${userData.lastName}!`);
  });

  test('Registration fails with invalid email format', async ({ page }) => {
    const userData = TestDataGenerator.generateUserData();
    userData.email = 'invalid-email';

    await homePage.clickCreateAccount();
    await registrationPage.fillRegistrationForm(userData);
    await registrationPage.submitForm();

    const isErrorVisible = await registrationPage.isErrorMessageVisible();
    expect(isErrorVisible).toBe(true);
    
    const errorMessage = await registrationPage.getErrorMessage();
    expect(errorMessage).toContain('Please enter a valid email address');
  });

  test('Registration fails with password mismatch', async ({ page }) => {
    const userData = TestDataGenerator.generateUserData();
    userData.confirmPassword = 'DifferentPassword123!';

    await homePage.clickCreateAccount();
    await registrationPage.fillRegistrationForm(userData);
    await registrationPage.submitForm();

    const isErrorVisible = await registrationPage.isErrorMessageVisible();
    expect(isErrorVisible).toBe(true);
  });
});