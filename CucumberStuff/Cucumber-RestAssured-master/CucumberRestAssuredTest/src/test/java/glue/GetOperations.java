package glue;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.util.concurrent.TimeUnit;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import glue.Common.ResponseManager;
import glue.Common.RestAssuredUtility;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class GetOperations {
	final static Logger logger= Logger.getLogger(GetOperations.class);
	static{
		PropertyConfigurator.configure("log4j.properties");
	}
	RestAssuredUtility restAssuredUtility=new RestAssuredUtility();
	
	/*@Before
	public void beforeMethod() {
		System.out.println("Calling before!!!!!!!");
	}*/
	
	
	@When("^Supplied store inventory (.*)$")
	public Response getPetInventories(String serviceName) {
		logger.info(Thread.currentThread().getId());
		return restAssuredUtility.simpleGet(serviceName);
	}
	
	@Then("Validate pet store inventories")
	public void validatePetPtoreInventories() {
		logger.info(Thread.currentThread().getId());
		ResponseManager.getResponse().
		                then().
		                body("Nonavailable", is(10));
	}
	
	@When("^Find purchase order by id (.*)$")
	public Response FindPurchaseOrderByPetid(String serviceName) {
		logger.info(Thread.currentThread().getId());
		return restAssuredUtility.simpleGet(serviceName);
	}
	
	@Then("Validate pet information")
	public void validatePetInformation(String str) {
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+str);
		logger.info(Thread.currentThread().getId());
		ResponseManager.getResponse().
		                then().
		                body("petId", is(1));
	}
	
	@After
	public void afterMethod() {
		System.out.println("Calling after!!!!!!!");
	}
}
