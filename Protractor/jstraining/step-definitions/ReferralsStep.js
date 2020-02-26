var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var ReferralsPage=require('../pages/ReferralsPage');
var referralsPage=new ReferralsPage();
var assert = chai.assert;

When ('I Click on Referrals Section', function(){
    return referralsPage.clickOnReferrals().then(function(){
        console.log("Click on Referrals success")
    }).catch(function(){
        console.log("Not clicked on Referrals"); 
    })
});

When('I could see Referrals page displayed {string}', function (header) {
    return referralsPage.getPageHeader().then(function(pageHeader){
        console.log(pageHeader);
        assert.equal(header,pageHeader);
    });
  });

When('I Will Search for Candidate by Name or Email in REFERRALS Section as {string}', function (text) {
    return referralsPage.enterNameToSearch(text).then(function(){
        console.log("Text Entered");
  }).catch(function(){
    console.log("Text Not Entered"); 
  })
  });

Then('I Validate the {string} in Referrals section', function(tablerows){
    return referralsPage.validateTableRows().then(function(rows){
        let str = String(rows);
        console.log(str.replace('\n',' ')); 
        assert.equal(tablerows,str); 
    })    
});
