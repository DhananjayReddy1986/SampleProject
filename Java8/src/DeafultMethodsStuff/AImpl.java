package DeafultMethodsStuff;

public class AImpl  {

	public void sum(A a) {
		System.out.println(a.add(10, 20));
	}
	public static void main(String[] args) {
		AImpl obj = new AImpl();
		
		A a1 = (a,b)-> a+b;
		obj.sum(a1);
		
	}

}
