import { test, expect } from '@playwright/test';



test('Cheacking Captcha', async ({ page }) => {
  await page.goto('https://demo.swimpay.com/auth/login');
  await expect(page.getByRole('img', { name: 'img' })).toBeVisible();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();

  
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').click();
  await page.pause();

  // await page.goto('https://app.keka.com/Account/KekaLogin?returnUrl=%2F');
  // console.log(await page.textContent("//p[normalize-space()='Login to Keka']"));
  // await page.pause();

  //  https://youtu.be/TCRcRXszhhU
});

