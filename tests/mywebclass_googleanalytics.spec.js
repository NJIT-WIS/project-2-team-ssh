const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');

  // Check if Google Analytics script is present
  const googleAnalyticsScript = await page.$('script[src*="www.googletagmanager.com/gtag/js"]');
  expect(googleAnalyticsScript).not.toBeNull();

  // Check if GA tracking code is present
  const gaTrackingCode = await page.evaluate(() => window.dataLayer && window.dataLayer.length);
  expect(gaTrackingCode).toBeGreaterThan(0);

  await browser.close();
})();
