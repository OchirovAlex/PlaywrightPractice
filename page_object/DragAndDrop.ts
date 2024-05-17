import {Page, expect} from '@playwright/test'

export class DragAndDrop{
    readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }

    get dragEl(){
        return '[draggable="true"]'
    }
    get dropHereEl(){
        return '#mydropzone'
    }
    get dropList(){
        return '#droppedlist'
    }
    get dragToTarget(){
        return '#draggable'
    }
    get dropTarget(){
        return '#droppable'
    }


    public async dragAndDropEl(text:string){
        await this.page.locator(this.dragEl,{hasText: text}).dragTo(this.page.locator(this.dropHereEl));
        expect(await this.page.locator(this.dropList).textContent()).toContain(text);
    }
    public async dragAndDropToTarget(){
        await this.page.locator(this.dragToTarget).dragTo(this.page.locator(this.dropTarget));
        expect(await this.page.locator(this.dropTarget).textContent()).toContain('Dropped!');
    }
    public async dragAndDropElV2(text:string){
        await this.page.locator(this.dragEl,{hasText: text}).hover();
        await this.page.mouse.down();
        await this.page.locator(this.dropHereEl).hover()
        await this.page.mouse.up();

        expect(await this.page.locator(this.dropList).textContent()).toContain(text);
    }
}