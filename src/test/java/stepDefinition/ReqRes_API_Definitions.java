package stepDefinition;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import java.io.IOException;
import org.testng.Assert;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import model.UserInfo;
import utils.EnvironmentSetup;
import utils.RestAssuredRequestFilter;
import utils.TestUtils;
import utils.URL;

public class ReqRes_API_Definitions {

	private Scenario scenario;
	private static Response response;
	//private static Response responseNotFound;
	String URI;
	
	@Before
	public void before(Scenario scenarioVal) throws IOException {
		this.scenario = scenarioVal;
		
	}
	
	@Given("I send a request to the URL to save valid user details")
	public void sendPostRequest() throws JsonProcessingException {
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.postUsers);
		String jsonInString = getUserJsonString("morpheus", "leader");
		response = given().
        		relaxedHTTPSValidation().
        		contentType(ContentType.JSON).
                body(jsonInString).			
        when().
        		post(URI);
		scenario.log("Response Received == " +response.asPrettyString());
	}
	
	@Then("the response will return user status {int}")
	public void verifyPostStatus(int statusCode) {
		TestUtils.verifyStatusCode(response, statusCode);
	}
	
	@Given("I send a request to the URL to update user details")
	public void sendPutRequest() throws JsonProcessingException {
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.updateUsers);
		String jsonInString = getUserJsonString("Morpheus", "UK Leader");
		response = given().
        		relaxedHTTPSValidation().
        		contentType(ContentType.JSON).
                body(jsonInString).			
        when().
        		put(URI);
		scenario.log("Response Received == " +response.asPrettyString());
	}
	
	@Then("the response will return update user status {int}")
	public void verifyPutStatus(int statusCode) {
		TestUtils.verifyStatusCode(response, statusCode);
	}
	
	@Given("I send a request to the URL to get users list details with page {string}")
	public void sendListUsersRequest(String page) {
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.getUsers);
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = given().queryParam("page", page).get(URI);
		scenario.log("Response Received == " + response.asPrettyString());
	}

	@Then("the response will return update user status {int} with {int} records")
	public void verifyListUsersStatus(int statusCode, int pageCount) {
		TestUtils.verifyStatusCode(response, statusCode);
		response.then().assertThat().body("per_page", equalTo(pageCount));
	}

	@Given("I send a request to the URL to get valid user details {int}")
	public void sendRequest(int id) {
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.getUser);
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request.get(URI+id);
		scenario.log("Response Received == " +response.asPrettyString());
	}

	@Then("the response will return user status {int} and id {int} and email {string} and firstName {string} and lastName {string}")
	public void verifyStatus(int statusCode, int id, String email, String firstName, String lastName) {
		Assert.assertEquals(200, response.getStatusCode());
		response.then().assertThat().body("data.id", equalTo(id));
		response.then().assertThat().body("data.email", equalTo(email));
		response.then().assertThat().body("data.first_name", equalTo(firstName));
		response.then().assertThat().body("data.last_name", equalTo(lastName));
	}
	
	@Given("I send a request to the URL to get user not found response")
	public void sendDataNotFoundRequest() {
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.getUser);
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request.get(URI+23);
		scenario.log("Response Received == " + response.asPrettyString());
	}

	@Then("the response will return user not found status {int}")
	public void verifyNotFoundStatus(int statusCode) {
		TestUtils.verifyStatusCode(response, statusCode);
	}

	@Given("I send a request to the URL to delete user details {int}")
	public void sendDeleteRequest(int id) {
		URI = URL.getEndPoint(EnvironmentSetup.BaseURL,EnvironmentSetup.deleteUser);
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request.delete(URI+id);
		scenario.log("Response Received == " + response.asPrettyString());
	}

	@Then("the response will return delete user status {int}")
	public void verifyDeleteStatus(int statusCode) {
		TestUtils.verifyStatusCode(response, statusCode);
	}
	
	// Returns User JSON String
	private String getUserJsonString(String name, String job) throws JsonProcessingException {
		UserInfo si = new UserInfo();
		si.setName(name);
		si.setJob(job);
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = mapper.writeValueAsString(si);
		return jsonInString;
	}
	
	
}