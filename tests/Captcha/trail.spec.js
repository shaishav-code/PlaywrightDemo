import { test,expect } from '@playwright/test';

test('Captruing captcha', async ({ page }) => {


})

// const { chromium } = require('playwright');
// const stealth = require('playwright-extra-plugin-stealth');
// const Tesseract = require('tesseract.js');
// const fs = require('fs');
// const path = require('path');

// // Add stealth plugin to Playwright
// const playwright = addExtra(chromium);
// playwright.use(stealth());

// (async () => {
//   const browser = await playwright.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://example.com/captcha'); // Replace with the actual URL containing the CAPTCHA

//   // Wait for the CAPTCHA image to be visible
//   const captchaSelector = 'img#captcha'; // Replace with the actual selector
//   await page.waitForSelector(captchaSelector);

//   // Capture the CAPTCHA image
//   const captchaElement = await page.$(captchaSelector);
//   const captchaImagePath = path.join(__dirname, 'captcha.png');
//   await captchaElement.screenshot({ path: captchaImagePath });

//   // Use Tesseract.js to solve the CAPTCHA
//   const { data: { text: captchaText } } = await Tesseract.recognize(captchaImagePath, 'eng');

//   console.log(`CAPTCHA text: ${captchaText.trim()}`);

//   // Use the extracted CAPTCHA text to fill in the CAPTCHA input field
//   await page.fill('input[name="captcha"]', captchaText.trim()); // Replace with the actual selector
//   await page.click('button[type="submit"]'); // Replace with the actual selector for the submit button

//   // Wait for some indication that the CAPTCHA was successfully solved
//   // For example, wait for a successful login or form submission
//   await page.waitForNavigation();

//   await browser.close();
// })();
