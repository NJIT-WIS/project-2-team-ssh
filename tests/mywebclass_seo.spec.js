const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Home page should have proper SEO', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/'); // replace with your website URL

  // Check page title
  const title = await page.title();
  expect(title).toBeTruthy();

  // Check page description
  const metaDescriptionElement = await page.$('meta[name="description"]');
  const metaDescription = await metaDescriptionElement?.getAttribute('content');
  expect(metaDescription).toBeTruthy();

  // Check page headings
  const headingElements = await page.$$('h1');
  for (const headingElement of headingElements) {
    const text = await headingElement.innerText();
    expect(text).toBeTruthy();
  }

  // Check page images have alt tags
  const imageElements = await page.$$('img');
  for (const imageElement of imageElements) {
    const altText = await imageElement.getAttribute('alt');
    expect(altText).toBeTruthy();
  }

  await browser.close();
});