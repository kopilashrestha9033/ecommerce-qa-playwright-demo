/**
 * test-data.ts
 * Shared test data for user-related tests
 */

// Dynamic test user for registration (avoids duplication issues)
export const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: `john${Date.now()}@example.com`, // Ensures uniqueness
  password: 'Test@12345',
};

// Manually created user for login/logout tests
// 👉 IMPORTANT: Create this user manually on https://magento.softwaretestingboard.com/
export const existingUser = {
  email: 'your_test_user@gmail.com', // Replace with real registered email
  password: 'Test@12345',            // Replace with actual password
};
