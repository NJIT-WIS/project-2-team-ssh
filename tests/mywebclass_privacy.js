const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto('http://localhost:3000/');

  // Check if privacy policy link exists
  const privacyPolicyLink = await page.$('a[href="/privacy-policy"]');
  expect(privacyPolicyLink).not.toBeNull();

  await browser.close();
})();
