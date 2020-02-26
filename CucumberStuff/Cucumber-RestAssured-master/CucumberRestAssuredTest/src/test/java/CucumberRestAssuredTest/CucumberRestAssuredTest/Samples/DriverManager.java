package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

import org.openqa.selenium.WebDriver;

public class DriverManager {
	
	private static ThreadLocal<WebDriver> localDriver=new ThreadLocal<WebDriver>();
	
	public static void setDriver(WebDriver driver) {
		localDriver.set(driver);
	}
	
	public static WebDriver getDriver() {
		return localDriver.get();
	}

}
