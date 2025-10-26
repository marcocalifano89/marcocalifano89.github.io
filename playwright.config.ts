import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:4321',
    headless: true
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321',
    port: 4321,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
});
