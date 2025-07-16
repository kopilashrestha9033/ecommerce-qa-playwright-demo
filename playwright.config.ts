import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://magento.softwaretestingboard.com/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  testDir: './tests',
  retries: 0,
  reporter: [['list'], ['html']]
});
