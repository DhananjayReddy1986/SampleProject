class ReferralsPage {

    constructor() {
        this.referral = element(by.css('.menu-items li:nth-child(4) a'));
        this.Joining_Search = element(by.xpath("//input[@placeholder='Search by Name or Email']"));
        this.pageHeader = element(by.css('.page-header'));
        this.clickOpenFilter = element(by.css('.filter-button'));
        this.tableRows = element.all(by.css('.table.table-hover.table-condense.table-responsive.table-tooltip tbody tr'));
    }
    
    clickOnReferrals(){
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        return this.referral.click();
    }

    getPageHeader(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.pageHeader.getText();
    }
    
    enterNameToSearch(candidateName){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.Joining_Search.sendKeys(candidateName);
    }

    validateTableRows(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
         return this.tableRows.getText();
        }
        
    

    /* clickOnOpenFilters(){
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        return this.clickOpenFilter.click();
    } */
}
module.exports =ReferralsPage;