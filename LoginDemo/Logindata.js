const { expect } = require("@playwright/test")
const exp = require("constants")


exports.DemoLoginPage = class DemoLoginPage{

    constructor(page){

        this.page = page
        // Loginpage xpaths
        this.usernamefield="//input[@id='username']"
        this.passwordfield="//input[@id='password']"
        this.submitBTN="//button[@id='submit']"
        this.logoutBTN="//a[normalize-space()='Log out']"

        // Validation Message Xpaths
        this.validationmessagefiled="//div[@id='error']"

        // VerifymanageOptions xpaths
        this.loginVerify="//h1[normalize-space()='Logged In Successfully']"
        this.logoutVerify="//h2[normalize-space()='Test login']"

    }


    async GotoLoginPAge()
    {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async TC_LoginTestCase_001()
    {
        await expect(this.page.locator(this.logoutVerify)).toBeVisible()
        await this.page.click(this.submitBTN)

        // verify Validation Message
        await expect(this.page.locator(this.validationmessagefiled)).toBeVisible()

        console.log('TC_LoginTestCase_001 Passed Successfully')
    }

    async TC_LoginTestCase_002()
    {
        await expect(this.page.locator(this.logoutVerify)).toBeVisible()
        await this.page.fill(this.passwordfield, "password123")
        await this.page.click(this.submitBTN)

        // verify Validation Message
        await expect(this.page.locator(this.validationmessagefiled)).toBeVisible()

        console.log('TC_LoginTestCase_002 Passed Successfully')
    }

    async TC_LoginTestCase_003()
    {

        await expect(this.page.locator(this.logoutVerify)).toBeVisible()
        await this.page.fill(this.usernamefield, "student")
        await this.page.click(this.submitBTN)

        // verify Validation Message
        await expect(this.page.locator(this.validationmessagefiled)).toBeVisible()
        
        console.log('TC_LoginTestCase_003 Passed Successfully')
    }

    async TC_LoginTestCase_004()
    {

        await expect(this.page.locator(this.logoutVerify)).toBeVisible()
        await this.page.fill(this.usernamefield, "InvalidUsername")
        await this.page.fill(this.passwordfield, "Invalidpassword")
        await this.page.click(this.submitBTN)

        // verify Validation Message
        await expect(this.page.locator(this.validationmessagefiled)).toBeVisible()

        console.log('Login Successfully')

        console.log('TC_LoginTestCase_004 Passed Successfully')

    }

    async TC_LoginTestCase_005()
    {

        await expect(this.page.locator(this.logoutVerify)).toBeVisible()
        await this.page.fill(this.usernamefield, "student")
        await this.page.fill(this.passwordfield, "Password123")
        await this.page.click(this.submitBTN)

        // VerifymanageOptions xpaths
        await expect(this.page.locator(this.loginVerify)).toBeVisible()
        console.log('Login Successfully')

        await this.page.click(this.logoutBTN)

        // VerifymanageOptions xpaths
        await expect(this.page.locator(this.logoutVerify)).toBeVisible()
        console.log('Logout Successfully')
        
        console.log('TC_LoginTestCase_005 Passed Successfully')
    }

}

