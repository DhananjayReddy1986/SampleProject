var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginAdminPage = new Loginpage();

Given('I Login As AdminUser',{timeout: 60 * 1000}, () => {
    browser.ignoreSynchronization = true;
    loginAdminPage.getUrl("https://test.epm-inob.projects.epam.com/");

    loginAdminPage.enterUsername('admin@admin.com');

    loginAdminPage.enterPassword('Epam123$');

    return loginAdminPage.clickOnSubmit();
});
