var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var ConfigurationPage=require('../pages/ConfigurationPage');
var configurationPage=new ConfigurationPage();

When ('I MouseHover on SETTINGS Tab' ,function(){
    return configurationPage.MouseHoverSettings().then(function(){
        console.log("Mouse Hovered on Settings")
    }).catch(function(){
        console.log("Not Mouse Hovered on Settings"); 
    })
});

When ('I Click on Configuration Section under SETTINGS Tab ', function(){

});

When ('I Click on CWhenIDATE Confirmation Email ON_OFF', function(){

});

When ('I Click on CWhenIDATE CWhenidate birthday wishes ON_OFF', function(){

}); 

When ('I Click on CWhenIDATE CWhenidate Query email ON_OFF', function(){

});

When ('I Click on CWhenIDATE External User Creation Email ON_OFF', function(){

});

When ('I Click on CWhenIDATE Notify CWhenidate Email ON_OFF', function(){

});

When ('I Click on CWhenIDATE Notify Doj Change Email ON_OFF', function(){

});

When ('I Click on CWhenIDATE Onboarding day notification ON_OFF',function(){

});

When ('I Click on CWhenIDATE Reminder notifications for offers issued ON_OFF',function(){

});

When ('I Click on EMPLOYEE Section',function(){

});

When ('I Click on Employee 30 day Survey ON_OFF',function(){

});

When ('I Click on Employee 90 day survey ON_OFF',function(){

});

When ('I Click on Employee Joining day Survey ON_OFF',function(){

});

When ('I Click on INTERNAL USER',function(){

});

When ('I Click on InternalUser Creation mail ON_OFF',function(){

});

When ('I Click on InternalUser  notify RagTag ON_OFF',function(){

});

When ('I Click on InternalUser RagTag mail to HR ON_OFF',function(){

});

When ('I Click on SYSTEM',function(){

});

When ('I Click on System Google Analytics DataLoad ON_OFF',function(){

});

When ('I Click on TEST ENVIRONMENT',function(){

});

When ('I Click on TestEnvironment SendEmail ON_OFF',function(){

});
