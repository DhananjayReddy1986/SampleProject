package impprograms;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

class Employee{
	private int empID;
	private String eName;
	private int salary;
	
	public Employee(int empID, String eName, int salary) {
		this.empID = empID;
		this.eName = eName;
		this.salary = salary;
	}

	public int getEmpID() {
		return empID;
	}

	public void setEmpID(int empID) {
		this.empID = empID;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "Employee [empID=" + empID + ", eName=" + eName + ", salary=" + salary + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}

public class ConvertJavaObjectToJsonObject {

	public static void main(String[] args) {
		Employee emp = new Employee(101,"Dhanu",10000);
		
		ObjectMapper objectmapper = new ObjectMapper();
		try {
			String json = objectmapper.writeValueAsString(emp);
			
			String beutifulJson = objectmapper.writerWithDefaultPrettyPrinter().writeValueAsString(emp);
            System.out.println(beutifulJson);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
