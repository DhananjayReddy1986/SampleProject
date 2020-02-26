package CucumberRestAssuredTest.CucumberRestAssuredTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;



/**
 * Unit test for simple App.
 */

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",glue="glue",plugin={"json:target/cucumber.json","rerun:target/rerun.txt"})
//@CucumberOptions(features="@target/rerun.txt",glue="glue",plugin={"json:target/cucumber.json"})
public class CucumberRunnerTest {
}
