@Roles
Feature: Roles Management Tab

Scenario: As a AdminUser Check Roles Management Tab

Given I Login As AdminUser
When I MouseHovered on SETTINGS Tab
And I Click on Roles Management Section under SETTINGS Tab
Then I could see Roles Management page displayed "Roles Management"
When I Search for Candidate by Name or Email in Roles Management Section as "Chaitanya Thalluri"
And I Validate the "<validateTableRows>" in Roles Management section
When I Click on EDIT Symbol
Then I could see Edit Internal User page displayed "Edit Internal User"
When I Click on Select Roles dropdown
And I Select Role as HR
And I Clicked on Submit button
Then I could see "<Roles>" selected from Dropdown
When I Search for Candidate by Name or Email in Roles Management Section as "Chaitanya Thalluri"
And I Click on DELETE Icon
And I Accept or Dismiss Delete PopUp
Then I Validate the "<validateTableRows>" in Roles Management section
When I select no of users displayed per page as "10"
Then Verify the count of records display per page as "10" 
When I select no of users displayed per page as "20"
Then Verify the count of records display per page as "20"
When I Click on NEXT Button in page "1"
Then I Navigated to "2" next page
When I Click on Previous Button in page "2"
Then I Navigated to "1" previous page

