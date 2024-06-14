import {test, expect, devices} from '@playwright/test'

// test.use({
//     viewport:{
//         width:500, 
//         height:500
//     }
// })
test.use({
    ...devices['iPhone 14']
})


test.describe('ASSERTION', () => {
    test('assertions', async ({page})=>{
        await page.goto('https://www.lambdatest.com/');
        const title = await page.title();
        expect.soft(title).toContain('LambdaTest');
        const header = await page.locator('h1')
        expect(await header.textContent()).toContain('Next-Generation')
        await expect(page.locator('img[src$="Vimeo.svg"]')).toHaveAttribute('alt', 'vimeo', {timeout: 1000});

    })
})