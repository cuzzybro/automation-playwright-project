import { BrowserContext, Page } from "playwright"

export default class PageBase {

    context: BrowserContext
    page: Page

    constructor (context: BrowserContext, page:Page) {
        this.context = context
        this.page = page
    }
    
}