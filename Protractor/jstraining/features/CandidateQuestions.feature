@Candidate
Feature: Candidate Questions

Scenario Outline: As a AdminUser Check Candidate Questions Tab

Given I Login As AdminUser
When I Click On CANDIDATE QUESTIONS Section
And I could see CANDIDATE QUESTIONS page displayed "Candidate Questions"
And I Will Search for Candidate by Name or Email in CANDIDATE QUESTIONS Section as "priyankabalmuri24@gmail.com"
Then I Validate the "<validateTableRows>" in CANDIDATE QUESTIONS section

Examples:
|validateTableRows|
|'Anil Verma\nAnil_verma@iomc.com\n987654321654\nlinkedin.com/Anil_verma\n2019-11-29\nReferral Resume.docx'|
