import {Page, expect} from '@playwright/test'

export class Droppable{
    readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async open(){
        await this.page.goto('https://demoqa.com/droppable');
    }
    get dragMe(){
        return '#draggable';
    }
    get dropHere(){
        return '#simpleDropContainer>#droppable'
    }
    // dropEl(elNumber){
    //     this.page.locator('#droppable').nth(elNumber)
    // }
    public async simple(){
        await this.page.locator(this.dragMe).dragTo(this.page.locator(this.dropHere));
        expect(await this.page.locator(this.dropHere).textContent()).toContain('Dropped!');
    }
}