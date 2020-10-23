import Facebook from "../apps/facebook/Facebook"
import Instagram from "../apps/instagram/Instagram"

const playwright = require('playwright');

(async() => {


    const browser = await playwright.firefox.launch({headless:true})
    const context = await browser.newContext()
    
    const facebook = await context.newPage()
    let fb = new Facebook(context,facebook)
    await fb.launch()
    await fb.page.screenshot({path: `screenshots/facebook.png`})
    await facebook.close()

    const instagram = await context.newPage()
    let insta = new Instagram(context, instagram)
    await insta.launch()
    await insta.loginPage.register()
    await insta.page.screenshot({path: `screenshots/instagram.png`})
    await instagram.close()

    await browser.close()

})()