package glue;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;


public class CucumberFeatureExamples {
	static{
		PropertyConfigurator.configure("log4j.properties");
	}

	final static Logger logger= Logger.getLogger(CucumberFeatureExamples.class);

	@Given ("^I want to write a step with (.*)$")
	public void IWantToWriteAStepWith(String g) {
		logger.info(Thread.currentThread().getId()+"I want to write a step with "+g);
		System.out.println(Thread.currentThread().getId()+"Calling Given"+g);
	}
	
	@When("^I check for the (.*) in step$")
	public void ICheckForTheValueStep(String w) {
		logger.info(Thread.currentThread().getId());
		System.out.println(Thread.currentThread().getId()+"Calling When"+w);
	}
	
	@Then("I verify the (.*) in step$")
	public void IVerifyTheStatusInStep(String t) {
		logger.info(Thread.currentThread().getId());
		System.out.println(Thread.currentThread().getId()+"Calling Then"+t);
	}
	/*@And("^I receive an email:$")
	public void receiveAnEmail(String email) throws PendingException {
		System.out.println(email);
	}*/

	@When("^Check for the Data Table in step$")
	public void ICheckForTheValueStep(DataTable table) {
		logger.info(Thread.currentThread().getId());
		System.out.println(Thread.currentThread().getId()+"Calling When with Data Table : "+table.cell(0,0));
		System.out.println(Thread.currentThread().getId()+"Calling When with Data Table : "+table.cell(0,1));

	}

	@Then("Verify the Data Table in step")
	public void IVerifyTheStatusInStep(DataTable table) {
		logger.info(Thread.currentThread().getId());
		System.out.println(Thread.currentThread().getId()+"Calling Then with Data Table : "+table.asLists().get(0).get(0));
		System.out.println(Thread.currentThread().getId()+"Calling Then with DAta Table : "+table.asLists().get(0).get(0));
	}

	@Given ("^Want to write a step (.*)$")
	public void WantToWriteAStepWith(String g) {
		logger.info(Thread.currentThread().getId()+"I want to write a step with "+g);
		System.out.println("Calling Given"+g);
	}

	@When("^Check for the (.*) in the step$")
	public void checkForTheValueStep(String w) {
		logger.info(Thread.currentThread().getId());
		System.out.println("Calling When"+w);
	}

	@Then("Verify the (.*) in the step")
	public void verifyTheStatusInStep(String t) {
		logger.info(Thread.currentThread().getId());
		System.out.println("Calling Then"+t);
	}

	@Given ("^Precondition for every scenario$")
	public void PreconditionForEveryScenario() {
		logger.info(Thread.currentThread().getId());
		System.out.println("Calling Given");
	}

	@When ("^Action for every scenario$")
	public void ActionForEveryScenario() {
		logger.info(Thread.currentThread().getId());
		System.out.println("Calling Given");
	}




}
