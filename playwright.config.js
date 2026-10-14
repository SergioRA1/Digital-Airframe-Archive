import { defineConfig } from "@playwright/test";

import { basePath } from "./src/site.js";

const port = 4173;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    // The site is served from its GitHub Pages subfolder, as on the live site.
    baseURL: `http://localhost:${port}${basePath}`,
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
    url: `http://localhost:${port}${basePath}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
