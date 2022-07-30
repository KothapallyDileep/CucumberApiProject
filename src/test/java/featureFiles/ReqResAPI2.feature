@Smoke
Feature: ReqRes Api

  Scenario Outline: Send a Valid Request to get the user details
    Given I send a Valid request to the URL to get valid user details <id>
    Then the Valid response will return user status 200 and id <id> and email "<email>" and firstName "<first_name>" and lastName "<last_name>"
		
		Examples: 
      | id | email | first_name | last_name |
      |  2 | janet.weaver@reqres.in | Janet   | Weaver |
