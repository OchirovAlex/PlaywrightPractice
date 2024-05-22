import {test as it,} from '@playwright/test'
import { Droppable } from '../../page_object/demoQA/Droppable'

it.describe('DROPPABLE', () => {
    it('simple', async ({page}) => {
        let droppable = new Droppable(page);
        await droppable.open();
        await droppable.simple();
    })
})
