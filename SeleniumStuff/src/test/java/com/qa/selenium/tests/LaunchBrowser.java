package com.qa.selenium.tests;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LaunchBrowser {
	public WebDriver driver;

	public ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter("./Reports/extent.html");;
	public ExtentReports extent = new ExtentReports();
	//extent.attachReporter(htmlReporter);
	public ExtentTest logger;

	//@Test

	/*
	 * public void test1() { System.out.println("Test 1"); htmlReporter = new
	 * ExtentHtmlReporter("./Reports/extent.html"); extent = new ExtentReports();
	 * extent.attachReporter(htmlReporter); logger = extent.createTest("Login Test",
	 * "Verify login with valid credentials"); logger.log(Status.INFO, "hi..");
	 * extent.flush(); }
	 */

	@Test
	public void BrowserLaunch() {
		//htmlReporter = new ExtentHtmlReporter("./Reports/extent.html");
		//extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		logger = extent.createTest("Login Test1", "Verify login with valid credentials1");
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		logger.log(Status.INFO, "hi..");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://www.store.demoqa.com");
		logger.log(Status.INFO, "hi..");
		driver.quit();
		extent.flush();

	}

	@Test
	public void BrowserLaunch1() {
		//htmlReporter = new ExtentHtmlReporter("./Reports/extent.html");
		//extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		logger = extent.createTest("Login Test2", "Verify login with valid credentials2");
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		logger.log(Status.INFO, "hi..");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://www.store.demoqa.com");
		logger.log(Status.INFO, "hi..");
		driver.quit();
		extent.flush();

	}

	@Test
	public void BrowserLaunch2() {
		//htmlReporter = new ExtentHtmlReporter("./Reports/extent.html");
		//extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		logger = extent.createTest("Login Test3", "Verify login with valid credentials2");
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		logger.log(Status.INFO, "hi..");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://www.store.demoqa.com");
		logger.log(Status.WARNING, "hi..");
		driver.quit();
		extent.flush();

	}

}
