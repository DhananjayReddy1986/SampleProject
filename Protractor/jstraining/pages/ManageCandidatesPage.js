class ManageCandidatePage {

    constructor() {
        
        this.Candidates=element(by.id("//a[text()='Candidates']"));
        this.AddCandidate=element(by.xpath("//button[@class='create-user']"));
        this.searchCreateCandidate=element(by.xpath("//*[@placeholder='Search by Staffing Desk ID / Email / Contact Number']"));
        this.AlternateContactNo=element(by.name('altContactNumber'));
        this.OfferStatus=element(by.id('offerStatus')).element(by.css("option[value='ACCEPTED']"));
        this.joiningDate=
        this.HRBusinessPerson=element(by.xpath("//input[@formcontrolname='hrName']"));
        this.Comments=element(by.xpath("//textarea[@name='comments']"));
        this.DeliveryOwner=element(by.xpath("//input[@formcontrolname='internalUserName']"));
        this.DeleteIcon= element(by.xpath("//img[@title='delete']"));
        this.AddDeliveryOwner= element(by.xpath("//*[text()='+ Add Delivery Owner']"));
        this.AttachFile=element(by.className('custom-file-upload sans-serif'));
        this.HideDocuments= element(by.className('custom-control-description'));
        this.CancelButton=element(by.buttonText('Cancel'));
        this.SubmitButton=element(by.buttonText('Submit'));
        this.SearchCandidate=element(by.xpath("//input[@placeholder='Search by Staffing ID or Name or Email']"));
        this.OpenFilters=element(by.xpath("//p[@class='filter-button']"));
        this.HideFilters=element(by.className('filter-button'));
        this.CreatedDateFrom=
        this.CreatedDateTo=
        this.DateOfJoiningFrom=
        this.DateOfJoiningTo=
        this.Status=element(by.id('role')).element(by.css("option[value='ACCEPTED']"));
        this.ApplyFilter=element(by.className('btn btn-primary apply'));
        this.ResetFilter=element(by.className('btn btn-primary reset'));
    }

    clickOnCandidates_Tab(){
       return this.Candidates.click();
    }

    clickOnAddCandidate(){
       return this.AddCandidate.click();
    }

    enterSearchCreateCandidate(candidateName){
        this.searchCreateCandidate.sendKeys(candidateName);
    }

    enterAlternateContactNo(alternateContactNo){
        this.AlternateContactNo.sendKeys(alternateContactNo);
    }

    selectOfferStatus(){
        this.OfferStatus.click();
    }

    enterHRBusinessPersonName(HRBPName){
        this.HRBusinessPerson.sendKeys(HRBPName);
    }

    enterComments(comments){
        this.Comments.sendKeys(comments);
    }

    enterDeliveryOwner(deliveryOwnerName){
        this.DeliveryOwner.sendKeys(deliveryOwnerName);
    }

    clickOnDeleteIcon(){
        this.DeleteIcon.click();
    }

    clickOnAddDeliveryOwner()
        {
            this.AddDeliveryOwner.click();
        }

    clickOnattachFile(){
        this.AttachFile.click();
    }    

    clickOnHideDocuments(){
        this.HideDocuments.click();
    }

    clickOnCancelButton(){
        this.CancelButton.click();
    }

    clickOnSubmitButton(){
         return this.SubmitButton.click();
    }

    enterSearchCandidate(candidateName){
        this.SearchCandidate.sendKeys(candidateName);
    }

    clickOnOpenFilters(){
        return this.OpenFilters.click();
    }

    clickOnHideFilters(){
       return  this.HideFilters.click();
    }

    selectCreatedDateFrom(){

    }

    selectCreatedDateTo(){
        
    }

    selectJoiningDatefrom(){
        
    }

    selectJoiningDateTo(){
        
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

module.exports = ManageCandidatePage;