package glue.Common;

import io.restassured.response.Response;

public class ResponseManager {
	
	private static ThreadLocal<Response> response=new ThreadLocal<Response>();
	
	public static Response getResponse() {
		return response.get();
	}
	
	public static void setResponse(Response respon) {
		response.set(respon);
	}

}
