//This is the code for accessibility

const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Website should have no accessibility issues', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://njit-wis.github.io/project-2-team-ssh/');
  const accessibilityReport = await page.accessibility.snapshot();


  await browser.close();
});
