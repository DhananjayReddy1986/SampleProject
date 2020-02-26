const EC = protractor.ExpectedConditions;
class AnalyticsPage {

    constructor() {
        this.Analytics=element(by.xpath("//li[@class='analytics-submenu']"));
        this.Analytics_Sub=element(by.linkText('Analytics'));
        this.SessionVsUserDetails=element(by.xpath("(//*[@class='highcharts-title'])[1]"));
        this.BounceRate=element(by.xpath("(//*[@class='highcharts-title'])[2]"));
        this.ExitDetails=element(by.xpath("(//*[@class='highcharts-title'])[3]"));
        this.PageViewsRate=element(by.xpath("(//*[@class='highcharts-title'])[4]"));
        this.AverageTimeOnPage=element(by.xpath("(//*[@class='highcharts-title'])[5]"));
        this.SessionDetailsText=element(by.css("div[id='sessionchart'] div[class^='highcharts-container'] text[class='highcharts-title']>tspan"))
        this.bounceChart=element(by.css("div[id='bouncechart'] div[class^='highcharts-container'] text[class='highcharts-title']>tspan"))
        this.chartText=element.all(by.css("div[id='userschart'] div[class^='highcharts-container'] text[class='highcharts-title']>tspan"))
        this.dropDown=element(by.css("li.analytics-submenu.dropdown-toggle"));
    }

    MouseHoverAnalytics(){
        browser.ignoreSyncronization=true
        browser.wait(EC.elementToBeClickable(this.dropDown, 5000));   
        browser.sleep(10000) 
        browser.actions().mouseMove(this.dropDown).perform().then((msg)=>{
            console.log("hovered")
        }).catch(err=>{
            console.log(err)
        });
      // this.dropDown.click();
    }

    clickOnAnalyticsSub(){
        browser.wait(EC.elementToBeClickable(this.Analytics_Sub, 5000)); 
        return this.Analytics_Sub.click();
    }
    
    highlightSessionUserDetails(){
        browser.wait(EC.elementToBeClickable(this.SessionDetailsText, 5000));    
        return expect(this.SessionDetailsText.getText()).toEqual('Sessions vs Users Details');
    }
    highlightBounceRate(){
        browser.wait(EC.elementToBeClickable(this.bounceChart, 5000));
        return expect(this.bounceChart.getText()).toEqual('Bounce Rate');
    }
    highlightExitDetails(){
        browser.wait(EC.elementToBeClickable(this.chartText, 5000));
        //this.chartText.get(0)
        return expect(this.chartText.get(0).getText()).toEqual('Exit Details');
    }
    highlightPageViewsRate(){
        browser.wait(EC.elementToBeClickable(this.chartText, 5000));
        //this.chartText.get(0)
        return expect(this.chartText.get(1).getText()).toEqual('PageViews Rate');
    }
    highlightAverageTimeOnPage(){
        browser.wait(EC.elementToBeClickable(this.chartText, 5000));
        //this.chartText.get(0)
        return expect(this.chartText.get(2).getText()).toEqual('AverageTime On Page');
    }
}
module.exports = AnalyticsPage;
