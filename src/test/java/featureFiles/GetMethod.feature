@Smoke
Feature: Dummy Api for get method

  @GetUserDetails
  Scenario Outline: Send a valid Single Request to get user details
    Given I send a Single request to the URL to get user details
    Then the response will return Single status 200 and id <id> and salary <employee_salary> and name "<employee_name>" and age <employee_age> and message "<message>"

    Examples: 
      | id | employee_salary | employee_name | employee_age | message                                |
      |  1 |          320800 | Tiger Nixon   |           61 | Successfully! Record has been fetched. |
