import {test} from "@playwright/test"

test('add blocker', async({page})=>{
    const addBlocker = [
    "https://stackpath.bootstrapcdn.com",
    "https://ad.plus",
    "chrome-extension://nenlahapcbofgnanklpelkaejcehkggg",
    "https://code.jquery.com",
    "https://pagead2.googlesyndication.com",
    "https://www.google.com",
    "https://www.googletagservices.com",
    "https://www.googletagmanager.com",
    "https://www.gstatic.com",
    "https://securepubads.g.doubleclick.net",
    "https://www.google-analytics.com",
    "https://cdn.jsdelivr.net",
    "https://cdn.prod.uidapi.com",
    "https://cdn-ima.33across.com",
    "https://invstatic101.creativecdn.com",    
    ];
    page.route('**\/*',(route)=>{
        const url = route.request().url()
        if(addBlocker.some(block=>url.startsWith(block))) route.abort()
        else route.continue();
    })
    page.on('requestfailed', add=>{
        console.log(`blocked add: ${add}`)
    })
    await page.pause()
    await page.goto('https://demoqa.com/')
    await page.pause()
    
    //await page.goto('data:text/html,<script>throw new Error("Test")</script>')

    
})