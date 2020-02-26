package com.qa.rest.tests;

import static io.restassured.RestAssured.given;
//import static io.restassured.matcher.RestAssuredMatchers.*;
//import static io.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.hasSize;

import org.testng.annotations.Test;

import io.restassured.response.Response;

public class GetCallBDD {

	@Test
	public void testNumberOfCircuitfor2017Season() {

		// given().
		// then().
		// when().
		// assertThat()
		/*
		 * given().when().get("http://ergast.com/api/f1/2017/circuits.json").then().
		 * assertThat() .body("MRData.CircuitTable.Circuits.circuitId",
		 * hasSize(20)).and().statusCode(200).and()
		 * .contentType("application/Json").and().header("Content-Length",
		 * equalTo("4551"));
		 */
		
		Response res = given().when().get("http://ergast.com/api/f1/2017/circuits.json");
		System.out.println(res.getBody().asString());

	}
	

	/*
	 * @Test public void jsonSchemaValidation() {
	 * 
	 * // given(). // then(). // when(). // assertThat() given() .when()
	 * .get("https://jsonplaceholder.typicode.com/users") .then()
	 * .assertThat().body(matchesJsonSchemaInClasspath("JsonSchemaValidation.json"))
	 * ;
	 * 
	 * }
	 */

}
