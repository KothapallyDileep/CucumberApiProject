package stepDefinition;

import io.restassured.http.ContentType;
import io.restassured.response.ValidatableResponse;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class API_GETDefinitions {

	private ValidatableResponse validatableResponse;
	
	private Scenario scenario;
	private final String BASE_URL = "http://dummy.restapiexample.com/api/v1/employee/1";

	@Before
	public void before(Scenario scenarioVal) {
		this.scenario = scenarioVal;
	}

	@Given("I send a request to the URL to get user details")
	public void sendRequest() {
		validatableResponse = given().contentType(ContentType.JSON).when()
				.get(BASE_URL).then();
		scenario.log("Response Received == " + validatableResponse.extract().asPrettyString());
	}

	@Then("the response will return status {int} and id {int} and salary {int} and name {string} and age {int} and message {string}")
	public void verifyStatus(int statusCode, int id, int emp_Salary, String emp_name, int emp_age, String message) {
		validatableResponse.assertThat().statusCode(statusCode);
		validatableResponse.assertThat().body("data.id", equalTo(id));
		validatableResponse.assertThat().body("data.employee_salary", equalTo(emp_Salary));
		validatableResponse.assertThat().body("data.employee_name", equalTo(emp_name));
		validatableResponse.assertThat().body("data.employee_age", equalTo(emp_age));
		validatableResponse.assertThat().body("message", equalTo(message));
	}

}