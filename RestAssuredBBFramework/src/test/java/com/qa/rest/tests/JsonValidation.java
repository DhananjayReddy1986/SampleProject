package com.qa.rest.tests;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.*;

public class JsonValidation {
	
	//Test Status Code
	
	@Test
	public void testStatusCode() {
		given()
		.when().get("https://jsonplaceholder.typicode.com/posts/1")
		.then().statusCode(200).log().all();
	}
	
	//Log Response
	
		@Test
		public void testLogResponse() {
			given()
			.when().get("https://jsonplaceholder.typicode.com/posts/1")
			.then().statusCode(200).log().all();
		}

}
