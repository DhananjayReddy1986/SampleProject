interface F11{
	public void m1();
}

/*class LExpression1 implements F1{
	public void m1() {
		System.out.println("Using Lambda Expression...");
	} 
	
}*/

public class LambdaExpression1 {

	public static void main(String[] args) {
	/*	F11 f11 = new LExpression1();
		f11.m1(); */
		F11 f2 = ()->System.out.println("Using Lambda Expression...");
		f2.m1();

	}

}
