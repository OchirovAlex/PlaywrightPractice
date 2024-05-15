import {test} from '@playwright/test'
import {FormLayoutsPage} from "../page_object/FormLayoutsPage"

test.describe('FORM LAYOUTS', ()=>{
    test.beforeEach(async({page})=>{
        await FormLayoutsPage.visit({page});
    })
    test('inline form',async({page})=>{
        await FormLayoutsPage.inlineForm({page})
    })
    test('using the grid',async ({page})=>{
        await FormLayoutsPage.usingTheGrid({page});
    })
    // test('basic form', async({page})=>{
    //     await
    // })
})