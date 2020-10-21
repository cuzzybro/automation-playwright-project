import PageBase from "../PageBase";


export default class Facebook extends PageBase {

    launch = async () => {
        await this.page.goto("https://facebook.com")
        await this.page.waitForLoadState("networkidle")
    }
    
}