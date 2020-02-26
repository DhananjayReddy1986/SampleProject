@Joining
Feature: Joining Formalities

Scenario: As a Admin User I Will Check the Joining Formalities Section

Given I Login As AdminUser
And I Click On JOINING FORMALITIES Tab
And I Click on Open Filters button
And I Will Select Status
And I Click on Apply Filter
Then I Validate the data 
