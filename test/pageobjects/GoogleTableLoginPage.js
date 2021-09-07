//const Page = require('./page');

class GoogleTableLoginPage  {

        async open(){
            await console.log('open');
            await  browser.url("https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F18JYjBLZz95VX-I44GREtvhtYWj-zilDntZgIemqKLAY%2Fedit&followup=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F18JYjBLZz95VX-I44GREtvhtYWj-zilDntZgIemqKLAY%2Fedit&ltmpl=sheets&flowName=GlifWebSignIn&flowEntry=ServiceLogin#gid=681701350");
            await  browser.maximizeWindow();
        };


}


module.exports =  GoogleTableLoginPage;