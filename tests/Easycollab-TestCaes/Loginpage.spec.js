const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../EasyCollab-pages/LoginPage');

let page

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();

    const Login = new LoginPage(page)

    await page.goto('https://eros.narola.online:444/EasyCollab/')
    await Login.LoginDetais()

});


test('EasyCollab Whole Site Navigation', async({  }) => {

    const EasyCollab = new LoginPage(page)

    await EasyCollab.SiteNavigation()
})


// test('Making Order of snacks in EasyCollab', async ({  }) => 
//     {
        
//         const Order = new LoginPage(page)
        
//     await Order.makeOrder()

//     await expect(page.getByRole('heading', { name: 'Evening Snacks Items' })).toBeVisible();
//     await page.locator('li').filter({ hasText: 'Balaji Salted Wafer RS.10 Add' }).getByRole('button').click();

//     await page.on('dialog', dialog => {
//         dialog.accept()
//     });
// })

// test('Cancling the order form EasyCollab', async ({  }) =>
// {

//     const CancleMadeOrder = new LoginPage(page)

//     await page.reload();
//     await page.locator("//li[@class='cart-icon']").hover();
//     await page.getByRole('link', { name: 'X' }).click();
// })

test('EasyCollab Logout', async ({  }) => {

    const Logout = new LoginPage(page)

    await Logout.LogoutFromsite()

    page.close()
})

// test(' EasyCollab InValid Login', async ({ }) => {

//     const Invalid = new LoginPage(page)

//     // await Invalid.LogoutFromsite()

//     await Invalid.InValidLogin()
// })