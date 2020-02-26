package glue;

import static org.hamcrest.Matchers.is;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import glue.Common.ResponseManager;
import glue.Common.RestAssuredUtility;
import io.cucumber.datatable.DataTable;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.response.Response;

public class PostOperations {
	
	RestAssuredUtility restAssuredUtility=new RestAssuredUtility();
	ResponseSpecBuilder builder = new ResponseSpecBuilder();
	
	@When("^Place an order for pet \"(.*)\" and \"(.*)\"$")
	public Response getPetInventories(String entity,String serviceName) {
		System.out.println(Thread.currentThread().getId()+" Current Thread ID");
		return restAssuredUtility.simplePost(entity,serviceName);
	}
	
	@Then("Validate order <placed> for purchasing the pet")
	public void validateOrderPlaced(DataTable t) {
		System.out.println(Thread.currentThread().getId()+" Current Thread ID");
		ResponseManager.getResponse().
		                then().
		                body("id", is(7),"quantity",is(11));
	}
	
	@When("^Add new pet information \"(.*)\" and \"(.*)\"$")
	public Response AddNewPetInformation(String entity,String serviceName) {
		System.out.println(Thread.currentThread().getId()+" Current Thread ID");
		return restAssuredUtility.simplePost(entity,serviceName);
	}
	
	@Then("Validate new pet in the store")
	public void validateValidateNewPet() {
		System.out.println(Thread.currentThread().getId()+" Current Thread ID");
		ResponseManager.getResponse().
		                then().
		                body("id.id", is(123),"category.name",is("DOGDOG"),"name",is("doggie"),"tags.is",is(321));
	}
	
	

}
