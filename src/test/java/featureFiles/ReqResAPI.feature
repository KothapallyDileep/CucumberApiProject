@Functional
Feature: ReqRes Api

	Scenario: Save User Details
    Given I send a request to the URL to save valid user details
    Then the response will return user status 201
    
  Scenario: Update User Details
    Given I send a request to the URL to update user details
    Then the response will return update user status 200
    
  Scenario: Retrive User Details List
    Given I send a request to the URL to get users list details with page "1"
    Then the response will return update user status 200 with 6 records 

  Scenario Outline: Retrive Single User Details
    Given I send a request to the URL to get valid user details <id>
    Then the response will return user status 200 and id <id> and email "<email>" and firstName "<first_name>" and lastName "<last_name>"

    Examples: 
      | id | email                    | first_name | last_name |
      |  2 | janet.weaver@reqres.in   | Janet      | Weaver    |
      | 11 | george.edwards@reqres.in | George     | Edwards   |
      | 12 | rachel.howell@reqres.in  | Rachel     | Howell    |

  Scenario: Retrive User Not Found Details
    Given I send a request to the URL to get user not found response
    Then the response will return user not found status 404
    
  Scenario: Delete User Details
    Given I send a request to the URL to delete user details 5
    Then the response will return delete user status 204
