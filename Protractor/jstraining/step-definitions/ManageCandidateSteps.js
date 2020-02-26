var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var ManageCandidatesPage=require('../pages/ManageCandidatesPage');
var loginPage = new Loginpage();
var manageCandidatesPage= new ManageCandidatesPage();

When('I Click on CWhenIDATES Tab', function () {
           
});
 
When('I Click on  Create CWhenidate', function () {
         
});

When('I Will Enter CWhenidate name as {string}', function (string) {
          
});
 
When('I Select Offer Status', function () {
          
});

When('I Search fo HR Business person name', function () {
           
});

When('I Will enter Comments', function () {
           
});

When('I Seach for Delivery Owner', function () {
           
});
  
When('I Click on Submit button', function () {
           
});

When('I Will Enter the CWhenidate name to Search as {string}', function (string) {
           
});
     
When('I Click on Open Filters button', function(){

});

When('I Will Select Created Date', function(){

});

When('I Will Select Date Of Joining', function(){

});

When('I Will Select Status', function(){

});

When('I Click on Apply Filter', function(){
    
});
When('I Validate the data for Created CWhenidate', function(){
  
});
