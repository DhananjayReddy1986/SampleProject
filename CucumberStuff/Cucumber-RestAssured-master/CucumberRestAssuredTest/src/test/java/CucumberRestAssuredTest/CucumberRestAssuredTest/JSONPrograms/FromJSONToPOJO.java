package CucumberRestAssuredTest.CucumberRestAssuredTest.JSONPrograms;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

public class FromJSONToPOJO {
    public static void main(String[] args) {
        //JSON input
        String json = "{\"id\":1,\"name\":\"Lokesh Gupta\",\"age\":34,\"location\":\"India\"}";

        ObjectMapper mapper=new ObjectMapper();
        try {
            Employee emp=mapper.readValue(json,Employee.class);
            System.out.println(emp);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
