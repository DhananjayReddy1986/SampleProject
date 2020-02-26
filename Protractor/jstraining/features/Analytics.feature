@Analytics
Feature: Analytics Section

Scenario: As a AdminUser Check Analytics Section

Given I Login As AdminUser
And I MouseHover on ANALYTICS Tab
And I Click on Analytics tab under ANALYTICS Section
And I Verify Sessions vs Users Details Graph
And I Verify Bounce Rate Graph
And I Verify  Exit Details Graph
And I Verify PageViews Rate Graph
And I Verify  AverageTime On Page Graph
