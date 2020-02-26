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
@tag112
Feature: Get operations using Rest Assured

  @tag1
  Scenario: Simple get operation to get pet store inventories
  	When Supplied store inventory "/store/inventory"
    Then Validate pet store inventories
    
    @tag111
  Scenario: Simple get operation to get purchase order by id
  	When Find purchase order by id "store/order/10"
    Then Validate pet information
    """ 
    sdjnkjngkjngskjnkjsg
		sdgfkjnbkjgsbd
		sdkjbgs
		"""

