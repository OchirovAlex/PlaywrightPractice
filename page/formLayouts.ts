class formLayouts{

    async visit({page}){
        await page.goto('http://localhost:4200/pages/forms/layouts')
    };
    async inlineForm({page}){
        await page.getByPlaceholder('Jane Doe').fill('Alex');
        await page.locator('input[placeholder="Email"]:not([id])').pressSequentially('aocirov098@gmail.com');
        await page.locator('[class="custom-checkbox"]').first().click();
        await page.locator('[class*="form-inline"] button').click();
    };
    async usingTheGrid({page}){
        await page.locator('#inputEmail1').fill('aocirov@gmail.com');
        await page.locator('#inputPassword2').fill('test123');
        await page.getByText('Option 2').click();
        await page.locator("div[class*='form-group'] button[status='primary']").click();
    }
    async basicForm({page}){
        await page.locator('')
    }
}

export const formLayoutsPage = new formLayouts();
