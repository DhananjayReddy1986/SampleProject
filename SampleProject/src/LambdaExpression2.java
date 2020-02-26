interface F3{
	//public void sum(int a,int b);
	
	public void squareit(int x);
	
	//public int squareit(int x);
}

public class LambdaExpression2 {

	public static void main(String[] args) {
		
 /*		F3 f1 = (a,b) -> System.out.println("Sum of a and b:" + (a+b));
		f1.sum(5, 6);
		f1.sum(100, 200); */
		
		F3 f1 = x -> System.out.println(x * x);
		f1.squareit(6);
		
		/*F3 f1 = x -> x * x;
		System.out.println(f1.squareit(5));
		System.out.println(f1.squareit(10));*/
		

	}

}
