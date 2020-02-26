var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../Pages/LoginPage.js');
var loginPage = new Loginpage();

Given('User launches {string}',{timeout: 60 * 1000}, (url) => {
    return loginPage.getUrl(url);
});

When('User enters username as {string}', function (username) {
   return  loginPage.enterUsername(username);
});

When('User enters Password as {string}', function (password) {
    return loginPage.enterPassword(password);
});

Then('User clicks submit button', function () {
    return loginPage.clickOnSubmit();
});

Then('result should be {string}', function (result) {
    return   loginPage.gettitle().then(function(pageTitle) {console.log(pageTitle);
        expect(pageTitle).equal(result);
    }); 
});
Then('clear the cache',function(){
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
});
