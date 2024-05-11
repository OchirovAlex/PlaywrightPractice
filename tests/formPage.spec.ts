import {test} from '@playwright/test'

test.describe('FORM PAGE', () => {
    test.beforeAll(()=>{
        console.log('beforeAll')
    })
    test.beforeEach(()=>{
        console.log('beforeEach')
    })
    test.afterEach(()=>{
        console.log('afterEach')
    })
    test.afterAll(()=>{
        console.log('afterAll')
    })
    test('Test1', ()=>{
        console.log('test1')
    })
    test('Test2',()=>{
        console.log('Test2')
    })
})


test.describe.only('FORM PAGE TYPE', ()=>{
    test('Fill all fields',async ({page})=>{
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
        await page.locator('#name').fill('John Doe');
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]')
        .pressSequentially('johnDoe@gmail.com',{delay:100});
        await page.locator('[placeholder="Password"]')
        .pressSequentially('1231231231');
        await page.locator('[placeholder="Company"]')
        .pressSequentially('KompotERP');
        await page.selectOption('select[name="country"]',{label: 'United States'});
        await page.locator('label:has-text("City*") ~ input#inputCity').fill('Seattle');
        await page.getByPlaceholder('Address 1').fill('Seattle');
        await page.getByRole('textbox', {name: "Address 2"}).fill('704 Tobie Ct');
        await page.getByRole('textbox', {name: "Zip Code"}).fill('98012');
        
    })
})

