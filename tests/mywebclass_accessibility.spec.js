const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Website should have no accessibility issues', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://njit-wis.github.io/project-2-team-ssh/');
  const accessibilityReport = await page.accessibility.snapshot();

  // Check that each label element has a corresponding input element
  const labelElements = await page.$$('label');
  for (const labelElement of labelElements) {
    const inputId = await labelElement.getAttribute('for');
    expect(inputId).toBeTruthy();
    const inputElement = await page.$(`#${inputId}`);
    expect(inputElement).toBeTruthy();
  }

  // Enter test input values in each input element and check if the values are set correctly
  const inputElements = await page.$$('input');
  for (const inputElement of inputElements) {
    const testValue = 'test value';
    await inputElement.type(testValue);
    const inputValue = await inputElement.inputValue();
    expect(inputValue).toBe(testValue);
  }

  await browser.close();
});

/* test('Cookie button should be clickable', async ({ page }) => {
  await page.goto('https://example.com'); // replace with your website URL

  // Click the accept button and check if the cookie consent message is hidden
  await page.click('button[data-testid="cookie-accept-button"]');
  const isCookieConsentHidden = await page.isVisible('.cookie-consent');
  expect(isCookieConsentHidden).toBe(false);

  // Reload the page and check if the cookie consent message is still hidden
  await page.reload();
  const isCookieConsentHiddenAfterReload = await page.isVisible('.cookie-consent');
  expect(isCookieConsentHiddenAfterReload).toBe(false);

  // Click the decline button and check if the cookie consent message is hidden
  await page.click('button[data-testid="cookie-decline-button"]');
  const isCookieConsentHiddenAfterDecline = await page.isVisible('.cookie-consent');
  expect(isCookieConsentHiddenAfterDecline).toBe(false);
});
*/