var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot');
var Loginpage=require('../pages/LoginPage');
var loginPage = new Loginpage();
var RolesManagementPage=require('../pages/RolesManagementPage');
var rolesManagementPage=new RolesManagementPage();

When ('I MouseHovered on SETTINGS Tab' ,function(){
    return rolesManagementPage.MouseHoverSettings().then(function(){
        console.log("Mouse Hovered on Settings")
    }).catch(function(){
        console.log("Not Mouse Hovered on Settings"); 
    })
});

When ('I Click on Roles Management Section under SETTINGS Tab', function(){
    return rolesManagementPage.clickOnRolesManagement().then(function(){
        console.log("Clicked on Roles Management")
    }).catch(function(){
        console.log("Not clicked on Roles Management"); 
    })
});

Then('I could see Roles Management page displayed {string}', function (header) {
    return rolesManagementPage.getPageHeader().then(function(pageHeader){
        console.log(pageHeader);
        assert.equal(header,pageHeader);
    });
  });

When('I Search for Candidate by Name or Email in Roles Management Section as {string}', function (text) {
    return rolesManagementPage.enterNameToSearch(text).then(function(){
        console.log("Text Entered");
  }).catch(function(){
        console.log("Text Not Entered"); 
  })
  });

When('I Validate the {string} in Roles Management section', function(tablerows){
    return rolesManagementPage.validateTableRows().then(function(rows){
        console.log(rows);
        assert.equal(tablerows,rows);
    }).catch(function(){
        console.log("Rows not displayed"); 
    })
});

When ('I Click on EDIT Symbol', function(){
    return rolesManagementPage.clickOnEditButton().then(function(){
        console.log("Clicked on Edit Symbol")
    }).catch(function(){
        console.log("Not clicked on Edit Symbol"); 
    })
});

Then('I could see Edit Internal User page displayed {string}', function (string) {
    return rolesManagementPage.getPageHeader().then(function(pageHeader){
        console.log(pageHeader);
        assert.equal(header,pageHeader);
    }).catch(function(){
        console.log("PageHeader not displayed");
    });
  });

When ('I Click on Select Roles dropdown', function(){
    return rolesManagementPage.clickOnSelectRoleDropDown().then(function(){
        console.log("Clicked on SelectRoles Dropdown")
    }).catch(function(){
        console.log("Not clicked on SelectRoles Dropdown"); 
    })
});

When ('I Select Role as HR', function(){
    return rolesManagementPage.selectTARole().then(function(){
        console.log("Role selected as HR")
    }).catch(function(){
        console.log("Role not selected"); 
    })
});

When ('I Clicked on Submit button', function(){
    return rolesManagementPage.clickOnSubmitButton().then(function(){
        console.log("Clicked on Submit")
    }).catch(function(){
        console.log("Not clicked on Submit"); 
    })
});

Then('I could see {string} selected from Dropdown', function (roles) {
    return rolesManagementPage.validateRolesSelected().then(function(rolesSelected){
        console.log(rolesSelected);
        assert.equal(roles,rolesSelected);
    })
});

When ('I Click on DELETE Icon', function(){
    return rolesManagementPage.clickOnDeleteButtonIcon().then(function(){
        console.log("Clicked on Delete")
    }).catch(function(){
        console.log("Not clicked on Delete"); 
    })
});

When ('I Accept or Dismiss Delete PopUp', function(){
    return rolesManagementPage.acceptAlert().then(function(){
        console.log("Clicked on OK button on Alert")
    }).catch(function(){
        console.log("Not clicked on OK button on Alert"); 
    })
});

When('I select no of users displayed per page as {string}', function (value) {
    return rolesManagementPage.clickOnSelectRange(value).then(function(records){
        console.log("Selected the no of users as sent");
        assert.equal(value,records);
    }).catch(function(){
        console.log("Not Selected the no of users as sent"); 
    })
});

Then('Verify the count of records display per page as {string}', function (value) {
    return rolesManagementPage.recordsCount(value).then(function(count){
        console.log("Count displayed");
        assert.equal(value,count);
    }).catch(function(){
        console.log("Count not dispalyed"); 
    })
});

When('I Click on NEXT Button in page {string}', function (value) {
    return rolesManagementPage.clickOnNextPage().then(function(){
        console.log("Clicked on Next");
    }).catch(function(){
        console.log("Not clicked on Next"); 
    })
}); 

Then('I Navigated to {string} next page', function (value) {
    return rolesManagementPage.getPageNumber().then(function(number){
        console.log("Navigated to Next page");
        var value = value+1;
        assert.equal(value,number);
    }).catch(function(){
        console.log("Not naviagted"); 
    })
  });

When ('I Click on Previous Button in page {string}', function (string){
    return rolesManagementPage.clickOnPreviousPage(value).then(function(){
        console.log("Clicked on Previous");
    }).catch(function(){
        console.log("Not clicked on Previous"); 
    })

});

Then('I Navigated to {string} previous page', function (value) {
    return rolesManagementPage.getPageNumber().then(function(number){
        console.log("Navigated to previous page");
        var value = value-1;
        assert.equal(value,number);
    }).catch(function(){
        console.log("Not naviagted"); 
    })
  });

