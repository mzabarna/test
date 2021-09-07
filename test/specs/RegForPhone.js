const assert = require('assert');
const BetMainPage = require('../Com.Bet/bet.main.page');
const ProfilePage = require('../pageobjects/ProfilePage');
//const Page = new phone_mask();



describe('Bet', () => {
    it('Registration for Phone', async () => {


        let phoneForReg  = (+79901234347);
        console.log(phoneForReg);
        // await console.log(phoneForReg);


            // await assert.deepStrictEqual(await phoneForReg,+79901234367,'test fished');
        // await console.log(+79901234369 - 1)

        await BetMainPage.open();

        const DialogWindPhone = await $("#open_registration");
        await DialogWindPhone.click();

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

        // await assert.deepStrictEqual(await (await BetMainPage.linePhone).getValue(), ProfilePage.phone_mask,"test fish")
       await assert.deepStrictEqual(await (await BetMainPage.linePhone).getValue(),await ProfilePage.phone_mask(phoneForReg));
        // await assert.deepStrictEqual( "1111111","11111",'test fished');

        ///const lineLog = await $('#item-profile_email');///
        ///await assert.deepStrictEqual(await lineLog.getValue(),email,'test fished');
    });
});
