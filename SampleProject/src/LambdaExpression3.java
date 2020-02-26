interface F4{
	public int getLength(String s);
}

public class LambdaExpression3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		F4 f4 = s -> s.length();
        System.out.println(f4.getLength("Hello..."));
        System.out.println(f4.getLength("Hello... Dhananjaya"));
		
	}

}
