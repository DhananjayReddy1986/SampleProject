package impprograms;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

class Employee1
{
    private Integer id;
    private String name;
    private Integer age;
    private String location;
    
    
	
	  public Employee1() {
	  
	  }
	  
	  public Employee1(Integer id, String name, Integer age, String location) {
	  this(); this.id = id; this.name = name; this.age = age; this.location =
	  location; }
	 
    //Setters and Getters will be added here
 
    public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Integer getAge() {
		return age;
	}


	public void setAge(Integer age) {
		this.age = age;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	@Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", age=" + age
                + ", location=" + location + "]";
    }
}

public class JsonToJavaObjectUsingJackson {

	public static void main(String[] args) {
		String json = "{\"id\":1,\"name\":\"Lokesh Gupta\",\"age\":34,\"location\":\"India\"}";
        
		//String json = "{'id':1,'name':'Lokesh Gupta','age':34,'location':'India'}";

		//String s="{\"id\":1,\"name\":\"p\",\"age\":30,\"location\":\"hyd\"}";
		  String JSON_STRING="{\"name\":\"Sachin\",\"age\":56000}"; 
	    //String s="{\"name\":\"sonoo\",\"salary\":600000.0,\"age\":27}";  
				
        ObjectMapper mapper = new ObjectMapper();
        try
        {
        	Employee1 emp = mapper.readValue(json, Employee1.class);
             
            System.out.println(emp);
        	Employee1 e1=new Employee1(1,"p", 30, "hyd");
        	String ss=mapper.writeValueAsString(e1);
        	System.out.println(ss);
        	
        	
        //	ClassLoader.getSystemClassLoader().getResource(name);
        	
        	
        	
        }
        catch (JsonGenerationException e)
        {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
