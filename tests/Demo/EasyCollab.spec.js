import { test, expect } from '@playwright/test';

// id jnd@narola.email
// pass Gjnry@7383380104

test('EasyCollab Navigation Test', async({ page }) => {

    await page.goto('https://eros.narola.online:444/EasyCollab/');
    await page.getByPlaceholder('test@example.com').click();
    await page.getByPlaceholder('test@example.com').fill('jnd@narola.email');
    
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Gjnry@7383380104');
    await page.getByRole('button', { name: 'Sign in' }).click();
    // await expect(page.getByRole('heading', { name: 'Today\'s Headline' })).toBeVisible();
    await page.getByRole('link', { name: 'Project' }).click();
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page.getByRole('paragraph')).toBeVisible();
    await page.getByRole('link', { name: 'Marketing' }).click();
    await page.getByRole('link', { name: 'Inquiry Technical' }).click();
    await expect(page.locator('#pjax-container')).toBeVisible();
    await page.getByRole('link', { name: 'Badges' }).click();
    await expect(page.getByRole('paragraph')).toBeVisible();
    await page.getByRole('link', { name: 'Support' }).click();
    await page.getByRole('link', { name: 'Support Tickets' }).click();
    await expect(page.locator('#pjax-container').getByText('Support Tickets')).toBeVisible();
    await page.getByRole('link', { name: 'Timesheet' }).click();
    await page.locator('a').filter({ hasText: /^Timesheet$/ }).click();
    await expect(page.locator('#headDiv').getByText('Timesheet')).toBeVisible();
    await page.getByRole('link', { name: 'Library & Snacks' }).click();
    await page.getByRole('link', { name: 'Library', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Readers are Leaders' })).toBeVisible();
})

test(' Positive EasyCollab labirary Module', async ({ page }) => {

    await page.goto('https://eros.narola.online:444/EasyCollab/');
    await page.getByPlaceholder('test@example.com').click();
    await page.getByPlaceholder('test@example.com').fill('jnd@narola.email');
    
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Gjnry@7383380104');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Library & Snacks' }).click();
    await page.getByRole('link', { name: 'My Library' }).click();
    await expect(page.getByRole('heading', { name: 'My Library' })).toBeVisible();
    await expect(page.getByText('Reading In Progress')).toBeVisible();
    await expect(page.getByText('No Book In Progress')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Donate A Book' })).toBeVisible();
    await page.getByRole('link', { name: 'Donate A Book' }).click();
    await expect(page.getByText('Add Donate Books')).toBeVisible();
    await page.locator('#ElibraryDonateBookName').click();
    await page.locator('#ElibraryDonateBookName').fill('J. Robert Oppenheimer');
    await page.locator('#ElibraryDonateDescription').click();
    await page.locator('#ElibraryDonateDescription').fill('Story of Atomic Bomb ');
    await page.locator('#ElibraryDonateAuthorName').click();
    await page.locator('#ElibraryDonateAuthorName').fill('Christopher Nolan');
    await page.locator('#ElibraryDonateNoOfPages').click();
    await page.locator('#ElibraryDonateNoOfPages').fill('51');
    await page.locator('a').filter({ hasText: 'Select Category' }).click();
    await page.locator('#ElibraryDonateCategoryId_chosen').getByText('Biography').click();
    await expect(page.getByRole('link', { name: 'Cancel' })).toBeVisible();
    await page.getByRole('link', { name: 'Cancel' }).click();
    await expect(page.getByRole('heading', { name: 'My Library' })).toBeVisible();
});


test(' Negative EasyCollab labirary Module', async ({ page }) => {

    await page.goto('https://eros.narola.online:444/EasyCollab/');await page.goto('https://eros.narola.online:444/EasyCollab/');
    await page.getByPlaceholder('test@example.com').click();
    await page.getByPlaceholder('test@example.com').fill('jnd@narola.email');
    
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Gjnry@7383380104');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Library & Snacks' }).click();
    await page.getByRole('link', { name: 'My Library' }).click();
    await expect(page.getByRole('heading', { name: 'My Library' })).toBeVisible();
    await expect(page.getByText('Reading In Progress')).toBeVisible();
    await expect(page.getByText('No Book In Progress')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Donate A Book' })).toBeVisible();
    await page.getByRole('link', { name: 'Donate A Book' }).click();
    await expect(page.getByText('Add Donate Books')).toBeVisible();
    await page.locator('#ElibraryDonateBookName').click();
    await page.locator('#ElibraryDonateBookName').fill('J. Robert Oppenheimer');
    // await page.locator('#ElibraryDonateDescription').click();
    // await page.locator('#ElibraryDonateDescription').fill('Story of Atomic Bomb ');
    // await page.locator('#ElibraryDonateAuthorName').click();
    // await page.locator('#ElibraryDonateAuthorName').fill('Christopher Nolan');
    // await page.locator('#ElibraryDonateNoOfPages').click();
    // await page.locator('#ElibraryDonateNoOfPages').fill('51');


    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Please Enter Author Name')).toBeVisible();

    await page.locator('a').filter({ hasText: 'Select Category' }).click();
    await page.locator('#ElibraryDonateCategoryId_chosen').getByText('Biography').click();
    await expect(page.getByRole('link', { name: 'Cancel' })).toBeVisible();
    await page.getByRole('link', { name: 'Cancel' }).click();
    await expect(page.getByRole('heading', { name: 'My Library' })).toBeVisible();
});