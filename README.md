# Keeper QA Automation Assignment – Magento Demo Store

This repository contains an automated test suite for the Magento Demo Store, developed as part of the Keeper QA Automation Engineer technical challenge.

## 🔍 Project Overview

This project demonstrates end-to-end test automation of critical user flows on the [Magento Demo Store](https://magento.softwaretestingboard.com/) using:

- ✅ Playwright
- ✅ TypeScript
- ✅ Page Object Model (POM)

---

## 🧪 Test Cases Implemented

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User Registration** | Tests the creation of a new user account via the registration page. |
| 2 | **Login and Logout** | Validates user login with existing credentials and successful logout. |
| 3 | **Add Product to Cart** | Adds a product (Radiant Tee) to the cart and verifies it's added. |
| 4 | **Guest Checkout Flow** | Completes a guest checkout flow including shipping form submission. |

---

## 📁 Project Structure

```
qa-magento-playwright/
├── tests/                 # Test case files
├── pages/                 # Page Object Model classes
├── utils/                 # Static test data
├── playwright.config.ts   # Playwright config
└── README.md              # Project overview and instructions
```

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install
npx playwright install
```

### ✅ Run All Tests

```bash
npx playwright test
```

### 🧾 View HTML Report

```bash
npx playwright show-report
```

---

## 📚 Notes

- The tests use dynamic email addresses for registration.
- To run login tests, update `utils/test-data.ts` with real credentials.
- Tests run against: `https://magento.softwaretestingboard.com/`

---

## 💡 Possible Enhancements (If More Time)

- CI/CD integration (GitHub Actions)
- Docker support
- Data-driven testing for products
- Parallel cross-browser execution

