package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.Properties;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class DriverFactory extends Driver {
	
	private static Properties driverProperties;
	
	static {
		driverProperties=new Properties();
		try {
			driverProperties.load(DriverFactory.class.getClassLoader().getResourceAsStream("Configs/WebDriver.properties"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void createWebDriverInstance(String dr) {
		switch(dr) {
		case "iexplore":
			DriverManager.setDriver(new InternetExplorerDriver());
			break;
		case "chrome":
			DriverManager.setDriver(new ChromeDriver());
			break;
		case "firefox":
			System.setProperty("webdriver.gecko.driver", Paths.get(driverProperties.getProperty("GeckoDriverPath")).toString());
			DriverManager.setDriver(new FirefoxDriver());
			break;	
		default:
			DriverManager.setDriver(new InternetExplorerDriver());
			break;
		}
	}
	
}
