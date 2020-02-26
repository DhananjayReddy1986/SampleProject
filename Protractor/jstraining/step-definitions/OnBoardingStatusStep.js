var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var OnBoardingStatusPage=require('../pages/OnBoardingStatusPage');
var onBoardingstatus=new OnBoardingStatusPage();

When ('I Click On OOBOARDING STATUS Tab', function(){

});

When('I Will search cWhenidate with their email or id or name OOBOARDING STATUS section as {string}', function(){

});

Then ('I Validate the data in OnBoardingStatus Section' , function(){

});
