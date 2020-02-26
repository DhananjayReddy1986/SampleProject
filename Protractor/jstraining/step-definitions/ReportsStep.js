var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var ReportsPage=require('../pages/ReportsPage');
var reportsPage=new ReportsPage();

When ('I Click on Report tab under ANALYTICS Section', function(){

});

When ('I Click on Configuration button', function(){

});

When ('I Enter Values in Offer Status Weight', function(){

});

When ('I Enter Values in Offer Status UpperLimit', function(){

});

When ('I Enter Values in IU Weight', function(){

});

When ('I Enter Values in IU UpperLimit', function(){

});

When ('I Enter Values in User Logins Weight', function(){

});

When ('I Enter Values in User Logins UpperLimit', function(){

});

When ('I Enter Values in User Queries Weight', function(){

});

When ('I Enter Values in User Queries UpperLimit', function(){

});

When ('I Enter Values in User Referrals Weight', function(){
  
});

When ('I Enter Values in User Referrals UpperLimit', function(){

});

When ('I Click on Submit Button', function(){

});

When ('I Click on Cancel Button', function(){

});
