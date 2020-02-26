class JoiningFormalitiesPage {

    constructor() {
        this.JoiningFormalities=element(by.linkText('JOINING FORMALITIES'));
        this.Joining_Search=element(by.xpath("//input[@placeholder='Search by Name or Email']"));
        this.OpenFilters=element(by.xpath("//p[@class='filter-button']"));//duplicate element
        this.Status=element(by.id('role')).element(by.css("option[value='ACCEPTED']"));//duplicate element
        this.ApplyFilter=element(by.className('btn btn-primary apply'));//duplicate element
        this.ResetFilter=element(by.className('btn btn-primary reset'));//duplicate element
        this.HideFilters=element(by.className('filter-button'));//duplicate element
    }
    
    clickOnJoiningFormalities(){
        return this.JoiningFormalities.click();
    }
    
    searchForName(candidateName){
       return  this.Joining_Search.sendKeys(candidateName);
    }

    clickOnOpenFilters(){
        return this.OpenFilters.click();
    }

    clickOnHideFilters(){
       return  this.HideFilters.click();
    }
    
    selectStatus(){
        this.Status.click();
    }

    clickOnApplyfilter(){
        return this.ApplyFilter.click();
    }

    clickOnResetFilter(){
        this.ResetFilter.click();
    }

   
}
module.exports = JoiningFormalitiesPage;
