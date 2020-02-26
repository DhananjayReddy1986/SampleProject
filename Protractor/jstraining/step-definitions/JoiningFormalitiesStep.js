var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var JoiningformalitiesPage=require('../pages/Joiningformaliities');
var joiningFormalities=new JoiningformalitiesPage();

When ('I Click On JOINING FORMALITIES Tab', function(){

});

When('I Will Select Status', function(){

});

Then('I Validate the data', function(){

}); 
