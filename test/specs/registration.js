
const BetMainPage = require('../Com.Bet/bet.main.page');
const timestamp = require('time-stamp')
const assert = require('assert');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {


        const email = await timestamp.utc('DDHHmm')+"@test.net";
        await console.log(email)


        await BetMainPage.open();

        const reg = await $("#open_registration");
        await reg.click();

        const regemail = await $("#reg_email");
        await regemail.setValue(email);

        const password = await $("#reg_password");
        await password.setValue("qwertyu741");

        const but = await $("#popup_reg_email_buttonRegistration");
        await but.click();

        const casa = await $("#close_popup_wait");
        await casa.click();

        await (await BetMainPage.profile).click();

        await BetMainPage.lineLog;
        await assert.deepStrictEqual(await (await BetMainPage.lineLog).getValue(),email,'test fished');
        ///const lineLog = await $('#item-profile_email');///
       ///await assert.deepStrictEqual(await lineLog.getValue(),email,'test fished');
    });
});
