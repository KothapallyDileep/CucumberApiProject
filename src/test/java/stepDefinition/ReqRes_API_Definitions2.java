package stepDefinition;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utils.URL;
import static org.hamcrest.Matchers.equalTo;
import java.io.IOException;

import org.testng.Assert;

import utils.EnvironmentSetup;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class ReqRes_API_Definitions2 {

	private Scenario scenario;
	private static Response response;
	String URI;
	
	@Before
	public void before(Scenario scenarioVal) throws IOException {
		this.scenario = scenarioVal;
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.getUser);
	}

	@Given("I send a Valid request to the URL to get valid user details {int}")
	public void sendRequest(int id) {
		
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request.get(URI+id);
		scenario.log("Response Received == " + response.asPrettyString());
	}

	@Then("the Valid response will return user status {int} and id {int} and email {string} and firstName {string} and lastName {string}")
	public void verifyStatus(int statusCode, int id, String email, String firstName, String lastName) {
		Assert.assertEquals(200, response.getStatusCode());
		response.then().assertThat().body("data.id", equalTo(id));
		response.then().assertThat().body("data.email", equalTo(email));
		response.then().assertThat().body("data.first_name", equalTo(firstName));
		response.then().assertThat().body("data.last_name", equalTo(lastName));
	}

}