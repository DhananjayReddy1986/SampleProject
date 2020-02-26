class ReportsPage {
    constructor() {
        this.Analytics=element(by.xpath("//li[@class='analytics-submenu'])"));//duplicate element
        this.Reports=element(by.linkText('Report'));
        this.Joining_Search=element(by.xpath("//input[@placeholder='Search by Name']"));
        this.ConfigurationButton=element(by.xpath("//button[@class='create-user']"));
        this.OfferStatusWeight=element(by.xpath("(//input[@class='ng-valid ng-dirty ng-touched'])[1]"));
        this.OfferStatusUpperLimit=element(by.xpath("(//input[@class='ng-valid ng-dirty ng-touched'])[2]"));
        this.UserWeight=element(by.xpath("(//input[@class='ng-valid ng-touched ng-dirty'])[1]"));
        this.UserUpperLimit=element(by.xpath("(//input[@class='ng-valid ng-dirty ng-touched'])[2]"));
        this.UserLoginsWeight=element(by.xpath("(//input[@class='ng-valid ng-touched ng-dirty'])[2]"));
        this.UserLoginsUpperLimit=element(by.xpath("(//input[@class='ng-pristine ng-valid ng-touched'])[1]"));
        this.UserQueriesWeight=element(by.xpath("(//input[@class='ng-pristine ng-valid ng-touched'])[2]"));
        this.UserQueriesUpperLimit=element(by.xpath("(//input[@class='ng-pristine ng-valid ng-touched'])[3]"));
        this.UserReferralsWeight=element(by.xpath("(//input[@class='ng-pristine ng-valid ng-touched'])[4]"));
        this.UserReferralsUpperLimit=element(by.xpath("(//input[@class='ng-pristine ng-valid ng-touched'])[5]"));
        this.CancelButton=element(by.buttonText('Cancel'));//duplicate element
        this.SubmitButton=element(by.buttonText('Submit'));//duplicate element
    }
    
    enterNameToSearch(candidateName){
        return this.Joining_Search.sendKeys(candidateName);
    }

    clickOnConfigurationButton(){
        this.ConfigurationButton.click();
    }

    enterValueInOfferStatusWeight(value){
        this.OfferStatusWeight.sendKeys(value);
    }

    enterValueInOfferStatusUpperLimit(value){
        this.OfferStatusUpperLimit.sendKeys(value);
    }

    enterValueInUserWeight(value){
        this.UserWeight.sendKeys(value);
    }

    enterValueInUserUpperLimit(value){
        this.UserUpperLimit.sendKeys(value);
    }

    enterValueInUserLoginsWeight(value){
        this.UserLoginsWeight.sendKeys(value);
    }

    enterValueInUserLoginsUpperLimit(value){
        this.UserLoginsUpperLimit.sendKeys(value);
    }

    enterValueInUserQueriesWeight(value){
        this.UserQueriesWeight.sendKeys(value);
    }

    enterValueInUserQueriesUpperLimit(value){
        this.UserQueriesUpperLimit.sendKeys(value);
    }

    enterValueInUserReferralsWeight(value){
        this.UserReferralsWeight.sendKeys(value);
    }

    enterValueInUserReferralsUpperLimit(value){
        this.UserReferralsUpperLimit.sendKeys(value);
    }

    clickOnCancelButton(){
        this.CancelButton.click();
    }

    clickOnSubmitButton(){
         return this.SubmitButton.click();
    }  
}
module.exports = ReportsPage;
