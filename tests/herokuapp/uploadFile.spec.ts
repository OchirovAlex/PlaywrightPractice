import {test, expect} from '@playwright/test'

test('upload file', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles('#file-upload', 'upload/2.png');
    await page.click('#file-submit');
    await expect(page.locator('#uploaded-files')).toContainText('2.png');
})

test.only('upload multiple files', async ({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[type="file"]', ['upload/1.png','upload/2.png','upload/3.png']);
    const name = await page.locator('p.name').allTextContents()
    console.log(name);
    expect(name).toEqual(['1.png', '2.png', '3.png' ]);
//    await expect(page.locator('p.name')).toContainText('2.png');
})