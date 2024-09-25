import { test, expect } from '@playwright/test';
import { LoginClass } from '../../Pages/Login_Test';

let page;

test.beforeAll(async({ browser }) => {

  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();

});

test('Positive Login test', async ({  }) => {
  
  const login = new LoginClass(page);

  await login.loginpagedata();
  await login.SubmitButton();
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');    
  await expect(page.getByRole('article')).toContainText('Log out');
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  test.slow();
  await page.close();
});

test('Negative username test', async ({  }) => {

  const login = new LoginClass(page);

  await login.Username();
  await login.SubmitButton();
  await expect(page.locator('#error')).toBeVisible();
  await page.close();
});

test('Negative password test', async ({  }) => {

  const login = new LoginClass(page);

  await login.password();
  await login.SubmitButton();
  await expect(page.locator('#error')).toBeVisible();
  await page.close();
});

test('Negative username and password test', async ({  }) => {

  const login = new LoginClass(page);

  await login.Username();
  await login.password();
  await login.SubmitButton();
  await expect(page.locator('#error')).toBeVisible();
  await page.close();
});



