@NewTest
Feature: Transactions

    # Scenario: launch the application
    #     When customer launches "http://www.way2automation.com/angularjs-protractor/banking/#/login"
    #     Then Home page should be displayed

    Scenario: Login into applcation as Harry Potter user
        When user launches "https://test.epm-inob.projects.epam.com/login"
        And user logins with admin access
        Then user loggedin as admin