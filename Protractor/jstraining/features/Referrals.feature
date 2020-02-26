@Referrals
Feature: Referrals Section

Scenario Outline: As a AdminUser Verify Referrals Section

Given I Login As AdminUser
When I Click on Referrals Section
And I could see Referrals page displayed "Referrals"
And I Will Search for Candidate by Name or Email in REFERRALS Section as "Anil Verma"
Then I Validate the "<validateTableRows>" in Referrals section

Examples:
|validateTableRows|
|'Anil Verma Anil_verma@iomc.com 987654321654 linkedin.com/Anil_verma 2019-11-29 Referral Resume.docx,Anil Verma Anil_verma@iomc.com 987654321654 linkedin.com/Anil_verma 2019-11-29 Referral Resume.docx'|