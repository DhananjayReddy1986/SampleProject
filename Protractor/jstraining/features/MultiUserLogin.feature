@Login
Feature: Login

Scenario Outline: Login as Admin User

        Given User launches "https://test.epm-inob.projects.epam.com/"
        When User enters username as "<username>"
        When User enters Password as "<password>"
        Then User clicks submit button
        Then result should be "<title>"
        Then clear the cache
    Examples:
    | username | password | title|
    | admin@admin.com  | Epam123$  | Manage Candidate|
    | recruiter@mailinator.com | Epam123$  | Manage Candidate|
    | hr@mailinator.com | Epam123$  |Reports|
