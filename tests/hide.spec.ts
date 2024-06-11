import {test as it,expect} from '@playwright/test'

it.describe('HIDDEN ELEMENT', ()=>{
    it('hidden el test', async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await expect(page.locator('#displayed-text')).toBeVisible();
        await page.locator('#hide-textbox').click();
        await expect(page.locator('#displayed-text')).toBeHidden();

    })
})