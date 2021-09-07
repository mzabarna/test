// const GoogleTableLoginPage = require('../pageobjects/GoogleTableLoginPage');
const Page =                require('../pageobjects/GoogleTableLoginPage');
const GoogleTableLoginPage = new Page();
const assert = require('assert');


describe('TestTask', () => {
    it('should login with valid credentials', async () => {

        await GoogleTableLoginPage.open();


        const EmailLine = await $("#identifierId");
        await EmailLine.setValue("m.zabarna@pin-up.team");

        const NextButtonMail = await $("#identifierNext > div > button > span");
        await NextButtonMail.click();

        const passwordlLine = await $("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
        await passwordlLine.setValue("MrJ2CSulveJWb6");

        const NextButtonPassword = await $("#passwordNext > div > button > span");
        await NextButtonPassword.click();

        const DockTitleLine = await $("#docs-title-widget > input")

        await assert.deepStrictEqual(await (await DockTitleLine).getValue(), await "Test Suite for regression test with PROD COM env 2021.08.10" );




        

        /*await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!'); */
    });
});
