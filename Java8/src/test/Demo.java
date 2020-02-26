package test;

public class Demo {

	public static void main(String[] args) {
		EmployeeUtil util=new EmployeeUtil();
		IPerson p = (Details a)->{
			//after some validation or logic execution, result will be returned   - ok cool
			
			return a;}; // idhi endhuku dheniki pani paata ledhaa
		//oka expression ki inko expression param laga pass chesam
		//realtime lo use chestaru  
		
		
		IEmployee e = (d1)->{Details d=new Details("A","B"); return p.setPersonDetails(d);};  
		util.printPersonDetails(e,p);
	}
}
