


class ProfilePage {

async phone_mask(phoneForReg){
    await console.log('phone_mask');
    let mask_phone = '+' + await (await phoneForReg.toString()).slice(0, 7) + '****';
    await console.log(mask_phone);
    return mask_phone;
    };
};

module.exports = new ProfilePage();
