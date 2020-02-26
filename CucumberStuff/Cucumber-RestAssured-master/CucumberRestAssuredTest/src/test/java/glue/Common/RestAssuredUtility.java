package glue.Common;

import static io.restassured.RestAssured.given;

import java.io.IOException;
import java.util.Properties;
import org.json.JSONObject;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class RestAssuredUtility {
	
	private static Properties propertiesRestAssured;
	
	
	static{
		try {
			propertiesRestAssured=new Properties();
			propertiesRestAssured.load(RestAssuredUtility.class.getClassLoader().getResourceAsStream("Configs/RestConfig.properties"));
			RestAssured.baseURI=propertiesRestAssured.getProperty("BaseUri");
			RestAssured.port=Integer.parseInt(propertiesRestAssured.getProperty("Port"));
			RestAssured.basePath=propertiesRestAssured.getProperty("BasePath");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public Response simpleGet(String serviceName) {
		Response res=given().
			       contentType(propertiesRestAssured.getProperty("RequestContentType")).
		   when().
		          get(serviceName);
		ResponseManager.setResponse(res);
		return res; 
	}
	
	public Response simplePost(String entity, String serviceName) {
		JSONObject params=new JSONObject(entity);
		
		Response res=given().
			       contentType(propertiesRestAssured.getProperty("RequestContentType")).
			       body(params.toString()).
		   when().
		          post(serviceName);
		ResponseManager.setResponse(res);
		return res; 
	}
	

}
