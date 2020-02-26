package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

public class EmployeeBuilberPattern {
	private int id;
	private String name;
	private String dept;
	
	private EmployeeBuilberPattern() {
		
	}
	
	public  EmployeeBuilberPattern(Builder b) {
		this.id=b.id;
		this.name=b.name;
		this.dept=b.dept;
	}
	
	@Override
	public String toString() {
		return "id: "+id+" name: "+name+" dept: "+dept;
	}
	
	static class Builder{
		
		private int id;
		private String name;
		private String dept;
		
		public Builder(int id) {
			this.id=id;
		}
		
		public Builder empName(String name) {
			this.name=name;
			return this;
		}
		
		public Builder empDept(String dept) {
			this.dept=dept;
			return this;
		}
		
		public EmployeeBuilberPattern build() {
			return new EmployeeBuilberPattern(this);
		}
		
	}

}
