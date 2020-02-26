@Reports
Feature: Reports Section

Scenario: As a AdminUser Check Reports Section

Given I Login As AdminUser
And I MouseHover on ANALYTICS Tab
And I Click on Report tab under ANALYTICS Section
And I Click on Configuration button
And I Enter Values in Offer Status Weight
And I Enter Values in Offer Status UpperLimit
And I Enter Values in IU Weight
And I Enter Values in IU UpperLimit
And I Enter Values in User Logins Weight
And I Enter Values in User Logins UpperLimit
And I Enter Values in User Queries Weight
And I Enter Values in User Queries UpperLimit
And I Enter Values in User Referrals Weight
And I Enter Values in User Referrals UpperLimit
And I Click on Submit Button
And I Click on Cancel Button
