var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var CandidateQuestionsPage=require('../pages/CandidateQuestionsPage');
var candidateQuestionsPage=new CandidateQuestionsPage();
var assert = chai.assert;

When('I Click On CANDIDATE QUESTIONS Section', function () {
    return candidateQuestionsPage.clickOnCandidateQuestions().then(function(){
        console.log("Clicked on CandidateQuestions success")
    }).catch(function(){
        console.log("Not clicked on CandidateQuestions"); 
    })
});

When('I could see CANDIDATE QUESTIONS page displayed {string}', function (header) {
    return candidateQuestionsPage.getPageHeader().then(function(pageHeader){
        console.log(pageHeader);
        assert.equal(header,pageHeader);
    });
  });

When('I Will Search for Candidate by Name or Email in CANDIDATE QUESTIONS Section as {string}', function (text) {
    return candidateQuestionsPage.enterNameToSearch(text).then(function(){
        console.log("Text Entered");
  }).catch(function(){
    console.log("Text Not Entered"); 
  })
  });

Then('I Validate the {string} in CANDIDATE QUESTIONS section', function(tablerows){
    return candidateQuestionsPage.validateTableRows().then(function(rows){
        console.log(rows);
        assert.equal(tablerows,rows);
    })    
});

