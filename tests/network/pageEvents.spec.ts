import {test} from "@playwright/test"

test('pageError', async({page})=>{
    await page.route('**\/*.{png,jpg,jpeg,svg}', async (request)=>{
        if(request.request().resourceType() === 'image'){
            request.abort()
        }else{
            request.continue()
        }
    })
    page.on('pageerror', error=>{
        console.log(`error: ${error}`)
    })
    await page.pause()
    await page.goto('https://demoqa.com/')
    await page.pause()
    
    //await page.goto('data:text/html,<script>throw new Error("Test")</script>')

    
})