var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status, setDefaultTimeout } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);
var hooks = require('./hooks/ScreenShot');

const WelcomeLoginPage = require('../pages/WelcomeLoginPage');
const logger = require('../Log4jConfg')

const welcomeLoginPage = new WelcomeLoginPage();

When('user logins with admin access', function () {
    welcomeLoginPage.typeEmail('admin@admin.com');
    welcomeLoginPage.typePassword('Epam123$');
    welcomeLoginPage.clickLoginButton();
    return true;
});

When('user loggedin as admin', function () {
    return true;
});
