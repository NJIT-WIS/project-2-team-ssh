const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const TIMEOUT = 30000;

test('Website should have title "MyWebclass.org"', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://njit-wis.github.io/project-2-team-ssh/', { timeout: TIMEOUT });
  const pageTitle = await page.title();

  await browser.close();

  expect(pageTitle).toBe('MyWebclass.org');
});
