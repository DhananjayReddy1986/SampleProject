@OnBoarding
Feature: OnBoarding Status

Scenario: As a AdminUser Check OnBoarding Status Tab

Given I Login As AdminUser
And I Click On OnBoardingStatus Tab
And I Will search candidate with their email or id or name ONOBOARDING STATUS section as "ANUPAMA PARAMESHWAR"
And I Click on Open Filters button
And I Will Select Created Date
And I Will Select Date Of Joining
And I Will Select Status
And I Click on Apply Filter
Then I Validate the data in OnBoardingStatus Section
