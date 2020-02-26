class CandidateQuestionsPage {
    constructor() {
        this.CandidateQuestions = element(by.css('.menu-items li:nth-child(5) a'));
        this.pageHeader = element(by.css('.page-header'));
        this.Joining_Search=element(by.xpath("//input[@placeholder='Search by Name or Email']"));
        this.tableRows = element.all(by.css('.table.table-hover.table-condense.table-responsive.table-tooltip tbody tr'));
    }
    
    clickOnCandidateQuestions(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.CandidateQuestions.click();
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
}
module.exports = CandidateQuestionsPage;
