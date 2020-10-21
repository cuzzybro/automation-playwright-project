import PageBase from "../PageBase";


export default class Instagram extends PageBase {
    
    launch = async () =>  {
        await this.page.goto("https://instagram.com")
        await this.page.waitForLoadState("networkidle")
    }
    
}