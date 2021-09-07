

const BetMainPage = require('../Com.Bet/bet.main.page');
const assert = require('assert');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await browser.url('https://testbet.pin-up.tech/ru-ru/');
        // await browser.url('https://bet5.pin-up.tech/');
        await BetMainPage.open();
        const InputEmailLine = await $("#header_auth_login");//TODO:ШО ТАКОЕ ЛОГИН?
        await InputEmailLine.setValue('marinaz@test.net')

        const InputPassLine = await $("#header_auth_password");//TODO: ШО ТАКОЕ ПАСВОРД?
        await InputPassLine.setValue('qwertyu741');


        const ButtLogin = await $("#login");//TODO:
        await ButtLogin.click();


        await (await BetMainPage.profile).click();


        await console.log(await BetMainPage.lineLog);
        await console.log(login);
        await assert.deepStrictEqual(await (await BetMainPage.lineLog).getValue(),"marinaz@test.net",'test fished');



        // await browser.url('https://testbet.pin-up.tech/ru-ru/');
        // await (await $("#header_auth_login")).setValue('marinaz@test.net');
        // await (await $("#header_auth_password")).setValue('qwertyu741');
        // await (await $("#login")).click();
        // await (await $("body > header > div.header__row > div > ul > li:nth-child(8) > div > div > button")).click();
        // await assert.deepStrictEqual(await (await $('#item-profile_email')).getValue(),'marinaz@test.net','test fished')




        // await LoginPage.open();
        //
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});