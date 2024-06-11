import {test} from "@playwright/test"

test('request failed', async({page})=>{
    await page.route('**\/*.{png,jpg,jpeg,svg}', async (request)=>{
        if(request.request().resourceType() === 'image'){
            request.abort()
        }else{
            request.continue()
        }
    })
    page.on('requestfailed', request=>{
        console.log(`error: ${request.url()}`)
    })
    await page.pause()
    await page.goto('https://demoqa.com/')
    await page.pause()
    

    
})