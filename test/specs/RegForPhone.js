
const BetMainPage = require('../Com.Bet/bet.main.page');

const assert = require('assert');

describe('Bet', () => {
    it('Registration for Phone', async () => {


        const phoneForReg  = await (+79901234362 - 1);
        await console.log(phoneForReg)
        // await assert.deepStrictEqual(await phoneForReg,+79901234367,'test fished');
        // await console.log(+79901234369 - 1)

        await BetMainPage.open();

        const RegPopup = await $("#open_registration");
        await RegPopup.click();

        const PhoneRegButton = await $("#popup_reg_typePhone");
        await PhoneRegButton.click();

        const RegPhoneLine = await $("#popup_reg_phone_inputPhone");
        await RegPhoneLine.setValue(phoneForReg);


        // const password = await $("#reg_password");
        // await password.setValue("qwertyu741");

        const RegPhoneButton = await $("#popup_reg_phone_buttonRegistration");
        await RegPhoneButton.click();

        // const casa = await $("#close_popup_wait");
        // await casa.click();
        await (await BetMainPage.CloseCashboxButton).click();

        await (await BetMainPage.profile).click();

        await console.log('BetMainPage.linePhone----------------------------------------------------------------------');
        await console.log(await BetMainPage.linePhone);
        await console.log('phoneForReg--------------------------------------------------------------------------------');
        await console.log(phoneForReg);
        await assert.deepStrictEqual(await (await BetMainPage.linePhone).getValue(),phoneForReg,'test fished');
        ///const lineLog = await $('#item-profile_email');///
        ///await assert.deepStrictEqual(await lineLog.getValue(),email,'test fished');
    });
});
