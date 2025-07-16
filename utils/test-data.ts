import { UserData, ShippingData, ProductData } from '../types/test-data';

export class TestDataGenerator {
  static generateRandomEmail(): string {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `test.user.${timestamp}.${randomNum}@example.com`;
  }

  static generateUserData(): UserData {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: this.generateRandomEmail(),
      password: 'SecurePass123!',
      confirmPassword: 'SecurePass123!'
    };
  }

  static generateShippingData(): ShippingData {
    return {
      email: this.generateRandomEmail(),
      firstName: 'Jane',
      lastName: 'Smith',
      company: 'Test Company',
      streetAddress: '123 Main Street',
      city: 'New York',
      state: 'New York',
      zipCode: '10001',
      country: 'United States',
      phoneNumber: '555-123-4567'
    };
  }

  static getProductData(): ProductData {
    return {
      name: 'Radiant Tee',
      size: 'M',
      color: 'Blue',
      quantity: 2
    };
  }
}