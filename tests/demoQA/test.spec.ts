import {test as it, expect} from '@playwright/test'

it.beforeEach(async({page})=>{
    await page.goto('https://demoqa.com/login');
})
it.describe('LOGIN', ()=>{
    it('login', async({page, browserName})=>{
        const name = page.locator('#submit');
        await expect(name).toHaveText('Log out');
        await page.screenshot({path:`screenShot/${browserName}.png`});
    })
})