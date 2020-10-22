import { BrowserContext, Page } from "playwright"

export default class PageBase {

    context: BrowserContext
    page: Page

    constructor (context: BrowserContext, page:Page) {
        this.context = context
        this.page = page
    }

    randomAlphaString(length: Number): String {
        let result = ''
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (let i=0; i<length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result
    }

    randomAlphaNumericString(length: Number): String {
        let result = ''
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
        for (let i=0; i<length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result
    }

    randomNumber(length: Number): String {
        let result = ''
        let chars = '0123456789'
        for (let i=0; i<length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result
    }


    
}