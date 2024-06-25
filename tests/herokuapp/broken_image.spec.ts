import {test, expect} from '@playwright/test'

test('Testing broken images', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/broken_images');

    await page.route('**/*', route=>{
        route.continue().catch(() => console.log('Error'))
    })
    const image = await page.evaluate(async () => {
        const brokenImages = Array.from(document.querySelectorAll('img'))
        const arrayOfImages = []

        for(const img of brokenImages){
            const response = await fetch(img.src).catch(()=>console.log('Error fetch'))
            if(img.naturalHeight === 0 || img.naturalWidth === 0){
                arrayOfImages.push(img.src);
            }
        }
        return arrayOfImages
        // throw new Error()
    })
    console.log(image.length)
    for(const src of image){
        console.log(src);
    }
})