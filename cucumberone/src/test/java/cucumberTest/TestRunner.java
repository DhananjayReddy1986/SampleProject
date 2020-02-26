package cucumberTest;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", glue = "StepDefinition",
		// dryRun = true,
		monochrome = true, tags = {}, strict = true, plugin = { "pretty", "html:target/site/cucumber-pretty",
				"json:target/cucumber/cucumber.json" })

public class TestRunner {

}