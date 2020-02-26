package CucumberRestAssuredTest.CucumberRestAssuredTest.JSONPrograms;

import java.io.File;
import java.nio.file.Paths;

import com.fasterxml.jackson.databind.ObjectMapper;


public class FromJavaPojoToJSON {

    public static void main(String[] args) {
         Employee emp=new Employee(10,"Srinivasulu Jogi",35,"Singaraya Konda");
         Employee emp1=new Employee(10,"Srinivasulu Jogi",35,"Singaraya Konda");
         
        
        try {
            ObjectMapper mapper=new ObjectMapper();
                String json = mapper.writeValueAsString(emp);
                mapper.writerWithDefaultPrettyPrinter().writeValue(Paths.get("src/test/resources/Jogi.json").toFile(), emp);
                //mapper.writerWithDefaultPrettyPrinter().writeValue(Paths.get("src/test/resources/Jogi.json").toFile(), emp1);
                //Use pretty print for printing the output
                String beautifulJson = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(emp);
            System.out.println(beautifulJson);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
