import { test, expect } from '@playwright/test';
import {LoginPage} from '../../Pages/Login';
import { Abstact_class } from '../../Abstract_class/abstract';

test('test', async ({ page }) => {

  const login = new LoginPage(page);
  const abclass = new Abstact_class(page);

 await abclass.Wait(getByRole('heading', { name: 'Test login' }));
 await login.GotoLoginPAge();
 await login.loginPagedata();

  // await .
  // await page.getByLabel('Username').click();
  // await page.getByLabelpage.getByRole('button', { name: 'Submit' })('Username').fill('student');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('Password123');
  // await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  // await page.getByRole("button", { name: "Submit" }).click();
  // await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  // await expect(page.getByText('Congratulations student. You')).toBeVisible();
  // await page.getByRole('link', { name: 'Log out' }).click();

// await page.goto('https://practicetestautomation.com/practice-test-login/');
  // await page.goto('https://practicetestautomation.com/practice-test-login/');
  // await page.getByLabel('Username').click();
  // await .fill('student');
  // await page.getByLabel('Password').click();
  // await .fill('Password123');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
});