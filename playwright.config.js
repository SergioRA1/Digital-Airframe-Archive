import { defineConfig } from "@playwright/test";

const port = 4173;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${port}/`,
    // The installed Google Chrome, which GitHub's Ubuntu runners also have,
    // so no browser download is needed.
    channel: "chrome",
    viewport: {
      width: 1280,
      height: 900,
    },
  },
  // Tests run against the production build, the same files GitHub Pages serves.
  webServer: {
    command: `npm run build && npm run preview -- --port ${port} --strictPort`,
    url: `http://localhost:${port}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
