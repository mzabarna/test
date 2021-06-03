///const BetMainPage = require('..//');

class BetMainPage {


    get profile () { return $("/html/body/header/div[2]/div/ul/li[8]/div/div/button") }
    get lineLog () { return $('#item-profile_email') }
    open () {
        browser.maximizeWindow()
        browser.url("https://bet5.pin-up.tech/")

    }
            //return browser.url(`https://the-internet.herokuapp.com/${path}`)


}

module.exports = new BetMainPage ();
