import {test as it,expect} from '@playwright/test'

it.describe('POPUP ELEMENT',()=>{
    it('popUp window', async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.pause();
        page.on('dialog',async dialog=>await dialog.accept())
        await page.locator('#confirmbtn').click()
    })

    it.only('popUp window dismiss', async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.pause();
        page.on('dialog',async dialog=>await dialog.dismiss())
        await page.locator('#confirmbtn').click()
    })
})