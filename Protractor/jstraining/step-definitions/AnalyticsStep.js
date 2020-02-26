var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var AnalyticsPage=require('../pages/AnalyticsPage');
var analyticsPage=new AnalyticsPage();

When ('I MouseHover on ANALYTICS Tab' , function(){

    return analyticsPage.MouseHoverAnalytics();

});

When ('I Click on Analytics tab under ANALYTICS Section' , function(){

return analyticsPage.clickOnAnalyticsSub();

}); 

When ('I Verify Sessions vs Users Details Graph' , function(){

    return analyticsPage.highlightSessionUserDetails()

});
When ('I Verify Bounce Rate Graph' , function(){

    return analyticsPage.highlightBounceRate()

});
When ('I Verify  Exit Details Graph' , function(){

    return analyticsPage.highlightExitDetails()

});
When ('I Verify PageViews Rate Graph' , function(){

    return analyticsPage.highlightPageViewsRate()

});
When ('I Verify  AverageTime On Page Graph', function(){

    return analyticsPage.highlightAverageTimeOnPage()

});