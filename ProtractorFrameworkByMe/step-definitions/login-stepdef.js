var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
//var hooks = require('./hooks/ScreenShot')
var LoginPage = require('../pages/LoginPage')
const login = new LoginPage();


Given('User launches {string}', (site) => {
    console.log("--------------------------- " +site)
    //browser.sleep(5000);
    browser.manage().window().maximize();
    return browser.get(site);
});

When('User enters first number as {string}', function (number1) {
    return login.enterUserName(number1);
    /* setTimeout(()=>{
        return login.enterUserName(number1);
    },0) */
    
    //return element(by.model("first")).sendKeys(number1);
});/* .then(function(name){
    console.log("user name resolved.")
}); */

When('User enters second number as {string}', function (number2) {
    return login.enterpassWord(number2);
    //return element(by.model("second")).sendKeys(number2);
});

Then('User clicks go button', function () {
    return element(by.id('gobutton')).click();
});

Then('result should be {string}', function (result) {
    return expect(element(by.css('h2[class=ng-binding]')).getText()).to.eventually.equal("3");
});