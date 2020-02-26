@Test
Feature: Login
    In order to perform successful login
    As a user
    I want to enter correct username and password

    Scenario Outline: verify login into application
        Given User launches "http://juliemr.github.io/protractor-demo/"
        When User enters first number as "<first>"
        And User enters second number as "<second>"
        Then User clicks go button
        Then result should be "3"
        Then abc should be "<username>" and "<password>"

        

    Examples:
    | second |first|
    | 5      |2|
    Examples:
    | first |second|
    | 6     |2|
    Examples:
    | username | password |
    | abc      | xyz      |
    