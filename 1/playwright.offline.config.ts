import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './framework-tests', testMatch: /offline\.spec\.ts/,
  outputDir: './temp/framework-audit/offline-results',
  timeout: 30000, workers: 1, retries: 0,
  reporter: [['list'], ['html', { outputFolder: 'temp/framework-audit/offline-report', open: 'never' }], ['json', { outputFile: 'temp/framework-audit/offline-results.json' }]],
  use: { channel: process.env.PLAYWRIGHT_BROWSER_CHANNEL || 'msedge', headless: true, trace: 'on', video: 'on', screenshot: 'only-on-failure' },
});
