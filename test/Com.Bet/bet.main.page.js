///const BetMainPage = require('..//');

class BetMainPage {


    // get profile () { return $("/html/body/header/div[2]/div/ul/li[8]/div/div/button") }
    get profile () { return $("body > header > div.header__row > div > ul > li:nth-child(8) > div > div > button") }
    get CloseCashboxButton () { return $('#close_popup_wait') }
    get linePhone () { return $('#item-profile_phone') }
    get lineLog () { return $('#item-profile_email') }
    open () {
        browser.maximizeWindow()

        browser.url("https://bet5.pin-up.dev/")

    }
            //return browser.url(`https://the-internet.herokuapp.com/${path}`)


}

module.exports = new BetMainPage ();
