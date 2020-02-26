class OnBoardingstatusPage {

    constructor() {
        this.OnBoardingStatus=element(by.linkText('Onboarding Status'));
        this.SearchCandidate=element(by.xpath("//input[@placeholder='Search by Staffing ID or Name or Email']"));
        this.OpenFilters=element(by.xpath("//p[@class='filter-button']"));


    }
    
    clickOnBoardingStatus(){
        return this.OnBoardingStatus.click();
    }
   
}
module.exports = OnBoardingstatusPage;