#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Scenario Outline and Examples

Background:
  Given Precondition for every scenario
  When Action for every scenario
  
  @tag7
  Scenario Outline: Scenario Outline multiple examples
      Given Want to write a step <name>
      When Check for the <value> in the step
      Then Verify the <status> in the step
			
       
      Examples:
            | name  | value | status  |
            | name1 |     1 | success1 |
            | name2 |     2 | Fail2    |
            | name5 |     3 | success3 |
            | name4 |     4 | success4 |

  @tag7
  Scenario Outline: Scenario Outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     1 | success1 |
      | name2 |     2 | Fail2    |
      | name5 |     3 | success3 |
      | name4 |     4 | success4 |
