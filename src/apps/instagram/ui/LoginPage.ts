import PageBase from "../../PageBase";
import { LoginSelectors, RegisterSelectors } from "../selectors/InstagramSelectors"


export default class LoginPage extends PageBase {

    register = async () => {

        await this.page.waitForLoadState("domcontentloaded")
        await (await this.page.waitForSelector(LoginSelectors.signup_link, {timeout:200})).click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.type(RegisterSelectors.emailOrPhone_input, this.generateRandomEmail())
        await this.page.type(RegisterSelectors.fullName_input, this.randomAlphaString(8) + " " + this.randomAlphaString(12))
        await this.page.type(RegisterSelectors.password_input, "!$@" + this.randomAlphaString(5) + this.randomNumber(3))
        await this.page.type(RegisterSelectors.username_input, this.randomAlphaString(6) + "" + this.randomNumber(3))
        await this.page.click(RegisterSelectors.signup_button)

    }

    private generateRandomEmail() {
        return this.randomAlphaString(5) + "." + this.randomAlphaString(8) + "@gmail.com"
    }

}



