package test;

public class EmployeeUtil {
	
	public void printPersonDetails(IEmployee e, IPerson p) {
		
		System.out.println(e.getPersonDetails(p).getName());
		System.out.println(e.getPersonDetails(p).getCompany());
		//Here i want to print all name and company of Details object
		
	}
}



//anthe