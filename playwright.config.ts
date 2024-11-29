import { devices, PlaywrightTestConfig } from "@playwright/test";

const defaultConfig: PlaywrightTestConfig = {
  testDir: "./src/specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html"]],
  use: {
    trace: "on-first-retry",
    ignoreHTTPSErrors: true,
  },
  outputDir: "test-results",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

module.exports = defaultConfig
