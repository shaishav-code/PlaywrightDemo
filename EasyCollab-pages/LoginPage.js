const { expect } = require("@playwright/test")
const { log } = require("console")

exports.LoginPage = class LoginPage
{

    constructor(page)
    {

        this.page = page

        // LoginPage
        this.username="//input[@id='username']"
        this.password="//input[@id='inputPassword']"
        this.signinbutton="//button[normalize-space()='Sign in']"
        // this.loginSuccessVerify="//a[normalize-space()='Dashboard']"
        this.loginSuccessVerify="//button[@id='projColumn']"
        // await expect(page.getByRole('paragraph')).toBeVisible();
        // await page.getByRole('link', { name: 'Badges' }).click();
        // await page.getByRole('link', { name: 'Contribution' }).click();
        // await expect(page.getByRole('paragraph')).toBeVisible();
        this.loginSuccessVerify="//strong[1]"

        // EasyCollab WholeSite Navigation

        this.ProjectDP="//a[normalize-space()='Project']"
        this.ProjectPage="//a[normalize-space()='Projects']"

        this.MarketingDP="//a[normalize-space()='Marketing']"
        this.InqueryPage="//a[normalize-space()='Inquiry Technical']"

        this.BadgesDP="//a[@class='dropdown-toggle'][normalize-space()='Badges']"
        this.ContributionPAge="//a[normalize-space()='Contribution']"
        this.badgesPage="//a[@href='/EasyCollab/badges']"
        this.EndorsePage="//a[normalize-space()='Endorse']"

        this.SuppoerDP="//a[normalize-space()='Support']"
        this.supportTicketsPage="//a[normalize-space()='Support Tickets']"

        this.TimesheetDP="//a[@class='dropdown-toggle'][normalize-space()='Timesheet']"
        this.timesheetpage="//a[contains(@href,'/EasyCollab/time_sheets')]"

        this.LibrarySnacksDP="//a[normalize-space()='Library & Snacks']"
        this.LibraryPage="//a[normalize-space()='Library']"
        this.Mylibrarypage="//a[normalize-space()='My Library']"
        this.OrdersnackPage="//a[normalize-space()='Order Snacks']"
        this.myorderpage="//a[normalize-space()='My Order']"

        this.DashboardPage="//a[normalize-space()='Dashboard']"

        this.profileDP="//a[normalize-space()='JND']"
        this.MyprofilePage="//a[normalize-space()='My Profile']"
        this.ChangePasswordPage="//a[normalize-space()='Change Password']"
        this.mailConfigurationPage="//a[normalize-space()='Mail Configuration']"

        // Logoutpage
        this.profileDropDown="//a[normalize-space()='JND']"
        this.logout="//a[normalize-space()='Logout']"
        this.logoutsuccessverify="button[type='submit']"

        // Order Snacks
        this.LibrarySnacksDP="//a[normalize-space()='Library & Snacks']"
        this.OrdersnackPage="//a[normalize-space()='Order Snacks']"
        // make order
        
        // this.makeorder="//li[1]//button[1]"

        // Cancle Order
        this.cartpopup="//li[@class='cart-icon']"
        this.popupcartcanclebutton="//a[normalize-space()='X']"

        // error flash message
        this.flashmssage="//div[@id='flashMessage']"


    }

    async makeOrder()
    {
        await this.page.click(this.LibrarySnacksDP)
        await this.page.click(this.OrdersnackPage)

        // await this.page.click(this.makeorder)
        
    }

    async cancleOrder()
    {

        await this.page.click(this.LibrarySnacksDP)
        await this.page.click(this.OrdersnackPage)
        
        await this.page.hover(this.cartpopup);
        await this.page.click(this.popupcartcanclebutton)
    }

    async SiteNavigation()
    {

        await this.page.click(this.ProjectDP)
        await this.page.click(this.ProjectPage)

        await this.page.click(this.MarketingDP)
        await this.page.click(this.InqueryPage)

        await this.page.click(this.BadgesDP)
        await this.page.click(this.ContributionPAge)
        await this.page.click(this.BadgesDP)
        await this.page.click(this.badgesPage)
        await this.page.click(this.BadgesDP)
        await this.page.click(this.EndorsePage)

        await this.page.click(this.SuppoerDP)
        await this.page.click(this.supportTicketsPage)

        await this.page.click(this.TimesheetDP)
        await this.page.click(this.timesheetpage)

        await this.page.click(this.LibrarySnacksDP)
        await this.page.click(this.LibraryPage)
        await this.page.click(this.LibrarySnacksDP)
        await this.page.click(this.Mylibrarypage)
        await this.page.click(this.LibrarySnacksDP)
        await this.page.click(this.OrdersnackPage)
        await this.page.click(this.LibrarySnacksDP)
        await this.page.click(this.myorderpage)

        await this.page.click(this.DashboardPage)

        await this.page.click(this.profileDP)
        await this.page.click(this.MyprofilePage)
        await this.page.click(this.profileDP)
        await this.page.click(this.ChangePasswordPage)

        
    }


    async LoginDetais()
    {

        await this.page.fill(this.username,"jnd@narola.email")
        await this.page.fill(this.password,"Gjnry@7383380104")
        await this.page.click(this.signinbutton)
        
    }

    async InValidLogin()
    {

        await this.page.fill(this.username,"jnd@narola.email")
        await this.page.fill(this.password,"Gjnry@73833801041")
        await this.page.click(this.signinbutton)

        await expect(this.page.locator(this.flashmssage)).toBeVisible()
    }

    async LogoutFromsite()
    {

        await this.page.click(this.profileDropDown)
        await this.page.click(this.logout)

        await expect(this.page.locator(this.logoutsuccessverify)).toBeVisible()

    }

    
}