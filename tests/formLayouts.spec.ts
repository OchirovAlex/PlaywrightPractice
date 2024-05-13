import {test} from '@playwright/test'
import {formLayoutsPage} from "../page/formLayouts"

test.describe('FORM LAYOUTS', ()=>{
    test.beforeEach(async({page})=>{
        await formLayoutsPage.visit({page});
    })
    test('inline form',async({page})=>{
        await formLayoutsPage.inlineForm({page})
    })
    test('using the grid',async ({page})=>{
        await formLayoutsPage.usingTheGrid({page});
    })
    // test('basic form', async({page})=>{
    //     await
    // })
})