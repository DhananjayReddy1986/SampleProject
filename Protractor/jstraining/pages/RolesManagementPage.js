class RolesManagementPage {
    constructor() {
        //this.Settings=element(by.css(".settings-submenu"));
        this.Settings=element(by.xpath("//li[@class='settings-submenu']/div/a"));//duplicate element
        //this.RolesManagement=element(by.cssContainingText('li.settings-submenu>div.dropdown-menu>a[href*=manageInternaluser]', 'Roles Management'));
        this.RolesManagement=element(by.linkText("Roles Management"));
        //this.RolesManagement=element(by.css("li.settings-submenu>div.dropdown-menu>a[href*='manageInternaluser']"));
        this.pageHeader = element(by.css('.page-header'));
        this.Joining_Search=element(by.xpath("//input[@placeholder='Search by Name or Email']"));//duplicate element
        this.EditButton=element(by.xpath("(//img[@alt='edit'])[1]"));
        this.SelectRole=element(by.xpath("//span[@class='dropdown-btn']"));
        this.RoleTA=element(by.xpath("//div[.='TA']"));
        this.RoleHR=element(by.xpath("//div[.='HR']"));
        this.CancelButton=element(by.buttonText('Cancel'));//duplicate element
        this.SubmitButton=element(by.buttonText('Submit'));//duplicate element
        this.DeleteButton=element(by.xpath("(//img[@alt='del'])[1]"));
        this.PreviousPage=element(by.xpath("//span[.='Previous page']"));
        this.NextPage=element(by.xpath("//a[contains(.,'Next page')]"));
        this.SelectRange=element(by.id('pages'));
        this.pageOptions = element.all(by.css("select#pages>option"));
        this.tableRows = element.all(by.css('.table.table-hover.table-condense.table-responsive.table-tooltip tbody tr'));
        this.rolesSelected = element.all(by.css('.selected-item'));
        this.pageNumber = element.all(by.css("ul.ng2-pagination>li.current>div>span:nth-child(2)"));
    }

    MouseHoverSettings(){
        //browser.sleep(5000);
        //browser.ignoreSyncronization = true;
        return browser.actions().mouseMove(this.Settings).perform(); 
    }

    clickOnRolesManagement(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        /* let EC = ExpectedConditions;
        let condition = EC.elementToBeClickable(this.RolesManagement);
        browser.wait(condition,5000);  */
        /* return element.all(by.css('.dropdown-menu a')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                console.log(text);
              return text === 'Roles Management';
            });
          }).first().click(); */
          
        return this.RolesManagement.click();
    }

    getPageHeader(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.pageHeader.getText();
    }
    
    enterNameToSearch(candidateName){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.Joining_Search.sendKeys(candidateName);
    }

    clickOnEditButton(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return  this.EditButton.click();
    }

    clickOnSelectRoleDropDown(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.SelectRole.click();
    }

    selectTARole(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.RoleTA.click();
    }

    selectHRRole(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.RoleHR.click();
    }

    clickOnCancelButton(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.CancelButton.click();
    }

    clickOnSubmitButton(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.SubmitButton.click();
    }

    clickOnDeleteButtonIcon(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.DeleteButton.click();
    }

    moveToAlert(){
        return this.switchTo().alert();
    }

    acceptAlert(){
        this.moveToAlert();
        return this.switchTo().alert().accept();
    }

    dismissAlert(){
        this.moveToAlert();
        return this.switchTo().alert().dismiss();
    }

    clickOnSelectRange(value){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        if(this.SelectRange.click()){
            return this.selectDropdownByValue(this.pageOptions,value);
        }
    
    }

    clickOnPreviousPage(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.PreviousPage.click();
    }

    clickOnNextPage(value){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.NextPage.click();
    }

    validateTableRows(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.tableRows.getText();
    }

    recordsCount(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.tableRows.count();
    }

    validateRolesSelected(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.rolesSelected.getText();
    }

    getPageNumber(){
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        return this.pageNumber.getText();
    }

    selectDropdownByValue(optionLocator,value)
    {
        
      /*  this.offerStatusOptions.then((items)=>{
            for(let i=0;i<items.length;i++)
            {
                items[i].getAttribute('value').then((value)=>{
                    if(value==statusValue){
                        items[i].click();
                    }
                })
            }
        })*/
        optionLocator.each((option,index)=>{

            option[index].getAttribute("value").then((optionValue)=>{
                if(optionValue==value){
                        return option[index].click();
                }
            })
        })
    } 
}

module.exports = RolesManagementPage;
