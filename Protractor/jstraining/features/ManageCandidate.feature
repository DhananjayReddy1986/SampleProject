@Manage_Candidate
Feature: Manage Candidate

Scenario: As a AdminUser Manage Candidates

Given I Login As AdminUser
And I Click on CANDIDATES Tab
And I Click on  Create Candidate
And I Will Enter Candidate name as "ANUPAMA PARAMESWAR"
And I Select Offer Status
And I Search fo HR Business person name
And I Will enter Comments
And I Seach for Delivery Owner
And I Click on Submit button
And I Will search candidate with their email id or name in Manage Candidate section as "ANUPAMA PARAMESWAR"
And I Click on Open Filters button
And I Will Select Created Date
And I Will Select Date Of Joining
And I Will Select Status
And I Click on Apply Filter
Then I Validate the data for Created Candidate
