const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Define the URL you want to test
  const url = 'http://localhost:3000/';

  // Start the performance trace
  await page.route('**', route => {
    const request = route.request();
    if (request.url() === url) {
      const timing = JSON.stringify(request.timing());
      console.log(`Performance timing for ${url}: ${timing}`);
    }
    route.continue();
  });

  // Navigate to the URL
  await page.goto(url);

  // Wait for page to load completely
  await page.waitForLoadState('networkidle');

  // Close the browser
  await browser.close();
})();
