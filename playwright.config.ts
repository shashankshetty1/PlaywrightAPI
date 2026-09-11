import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    // First, login and save the authentication state
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },

    // Then run tests using the saved login state
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});