package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

import org.openqa.selenium.WebDriver;

public class Driver implements ConfigurableBrowser {
	
	@Override
	public WebDriver configureBrowser(String str) {
		DriverFactory.createWebDriverInstance(str);
		return DriverManager.getDriver();
	}
}
