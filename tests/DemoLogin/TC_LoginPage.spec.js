import { test, expect } from '@playwright/test'
import { DemoLoginPage } from '../../LoginDemo/Logindata'


let page

test.beforeEach(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    
    const loginTC = new DemoLoginPage(page)

    await loginTC.GotoLoginPAge();
});



test('TC_1 Click on Login Button without entering the data', async ({  }) => 
{
    const loginTC = new DemoLoginPage(page)

    await loginTC.TC_LoginTestCase_001();

    await page.close();

})

test('TC_2 Click on Login Button without entering your Email id', async ({  }) => 
    {
        const loginTC = new DemoLoginPage(page)
    
        await loginTC.TC_LoginTestCase_002();

        await page.close();
    
    })

    test('TC_3 Click on Login Button without entering a password', async ({  }) => 
        {
            const loginTC = new DemoLoginPage(page)
        
            await loginTC.TC_LoginTestCase_003();
            
            await page.close();
        
        })
        test('TC_4 Verify Login with Invalid Credentials', async ({  }) => 
            {
                const loginTC = new DemoLoginPage(page)
            
                await loginTC.TC_LoginTestCase_004();

                await page.close();
            
            })
            test('TC_5 Verify Login with Valid Credentials and also verify Logout', async ({  }) => 
                {
                    const loginTC = new DemoLoginPage(page)
                
                    await loginTC.TC_LoginTestCase_005();

                    await page.close();
                
                })
