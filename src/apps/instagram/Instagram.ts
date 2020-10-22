import PageBase from "../PageBase";
import LoginPage from "./ui/LoginPage";


export default class Instagram extends PageBase {

    loginPage: LoginPage = new LoginPage(this.context, this.page)
    
    launch = async () =>  {
        await this.page.goto("https://instagram.com")
        await this.page.waitForLoadState("networkidle")
    }
    
}