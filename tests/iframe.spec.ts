import {test as it, expect} from "@playwright/test"

it.describe('IFRAME', ()=>{
    it('iframe test', async ({page})=>{
        await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames/');
        const bottomFrame = page.frameLocator('[name="frame-bottom"]');
        const leftFrame = await bottomFrame.frameLocator('[name="frame-left"]').locator('body').textContent();
        const middleFrame = await bottomFrame.frameLocator('[name="frame-middle"]').locator('body').textContent();
        const rightFrame = await bottomFrame.frameLocator('[name="frame-right"]').locator('body').textContent();
        expect(leftFrame).toContain('Left');
        expect(middleFrame).toContain('Middle');
        expect(rightFrame).toContain('Right');

    })
})