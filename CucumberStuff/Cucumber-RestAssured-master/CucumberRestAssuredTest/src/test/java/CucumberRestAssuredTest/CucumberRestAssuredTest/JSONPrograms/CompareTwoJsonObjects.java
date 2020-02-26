package CucumberRestAssuredTest.CucumberRestAssuredTest.JSONPrograms;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Comparator;


public class CompareTwoJsonObjects {
    private static  boolean x;
    public static void main(String[] args) {

        JSONObject json1 = new JSONObject();
        String s1="{\"employee\":{\"id\":\"1212\",\"fullName\":\"John Miles\",\"age\":34,\"contact\":{\"email\": \"john@xyz.com\",\"phone\": \"9999999999\"}}}";
        String s2="{\"employee\":{\"id\":\"1212\",\"age\":34,\"fullName\":\"John Miles\",\"contact\":{\"email\": \"john@xyz.com\",\"phone\": \"9999999999\"}}}";
        String s3="{\"name\": \"John\",\"score\": 5}";
        String s4="{\"name\": \"John\",\"score\": 5.0}";
        JSONObject js1=new JSONObject(s1);
        JSONObject js2=new JSONObject(s2);
        JSONObject js3=new JSONObject(s3);
        JSONObject js4=new JSONObject(s4);
        System.out.println(js1.similar(js2));
        System.out.println("Values 5.0 and 5: "+js3.similar(js4));
        json1.put("id","1212");
        json1.put("fullName","Srinivasulu Jogi");
        json1.put("age","35");

        JSONArray ja=new JSONArray();
        JSONObject jo=new JSONObject();
        jo.put("email","john@xyz.com");
        jo.put("phone","9999999999");
        ja.put(jo);
        json1.put("contact",ja);

        JSONObject json2 = new JSONObject();
        json2.put("id","1212");
        json2.put("fullName","Srinivasulu Jogi");
        json2.put("age","35");
        json2.put("contact",ja);

        JSONObject jArray = new JSONObject(s1);



        // Compare using JSONObject
        System.out.println("Using JSONObject: "+json1.similar(json2));

        ObjectMapper mapper=new ObjectMapper();

        try {
           /* System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(json1.toString())));
            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(json2.toString())));
*/
            /*System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(s1)));
            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(s2)));
            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(s3)));
            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(s4)));
*/
            Assert.assertEquals(mapper.readTree(s1),mapper.readTree(s2));
            //Assert.assertNotEquals(mapper.readTree(s3),mapper.readTree(s4));

            // Compare Two JSON Objects with a Custom Comparator

            JsonNode node1=mapper.readTree(s3);
            JsonNode node2=mapper.readTree(s4);
            JsonNode node3=mapper.readTree(s1);
            JsonNode node4=mapper.readTree(s2);


            System.out.println("As Double: "+node1.equals(Comparator.comparing(el->el.asDouble()),node2));
            System.out.println("As Text: "+node1.equals(Comparator.comparing(el->el.asText()),node2));

            System.out.println(node3.findValue("contact"));

            System.out.println(json1.get("fullName").toString());
            System.out.println(json1.get("age").toString());
            //System.out.println(json1.getJSONArray("contact"));

            System.out.println("Using JSON Object: "+jArray.getJSONObject("employee").getJSONObject("contact").get("email").toString());
            System.out.println("X default\nvalue: "+x);
            
            // Compare two json files
            Employee emp1=mapper.readValue(new FileInputStream(Paths.get("src/test/resources/Jogi.json").toFile()), Employee.class);
            /*mapper.disable(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES);*/
            mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
            Employee emp2=mapper.readValue(new FileInputStream(Paths.get("src/test/resources/Jogi1.json").toFile()), Employee.class);
            
            
            
            JsonNode jsonNode1=mapper.readTree(new FileInputStream(Paths.get("src/test/resources/Jogi.json").toFile()));
            JsonNode jsonNode2=mapper.readTree(new FileInputStream(Paths.get("src/test/resources/Jogi1.json").toFile()));
            System.out.println("Name!!!! "+jsonNode1.toString());
            System.out.println("Name!!!! "+jsonNode2.toString());
            System.out.println("Name!!!! "+emp1.toString());
            System.out.println("Name!!!! "+emp2.toString());
            
            Assert.assertEquals(jsonNode1, jsonNode2);
            
           


        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println();



    }
}
