import {test as it} from '@playwright/test'
import {DragAndDrop} from '../../page_object/DragAndDrop'

it.describe('DRAG AND DROP', ()=>{
    it('drag and drop',async ({page})=>{
        let dragAndDrop = new DragAndDrop(page);
        await page.goto(`https://www.lambdatest.com/selenium-playground/drag-and-drop-demo`);
        await dragAndDrop.dragAndDropEl('Draggable 2');
        await dragAndDrop.dragAndDropToTarget();
        await dragAndDrop.dragAndDropElV2('Draggable 1');
    })
})