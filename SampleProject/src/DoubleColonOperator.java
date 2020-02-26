import java.util.function.BiFunction;

// Types of method references : Java 8 allows 4 types of references
@FunctionalInterface
interface Funct1<T, R, Z> {
	public int sub(int a, int b);
}

class Subtraction {

	public int subtract(int a, int b) {
		/* System.out.println(a-b); */
		return (a - b);
	}

}

public class DoubleColonOperator {
	public static void main(String[] args) {

		Subtraction s = new Subtraction();
		Funct1<Integer, Integer, Integer> func = (a, b) -> s.subtract(a, b);
		System.out.println(func.sub(20, 10));

		// Reference to instance method from instance - Refer to an instance method
		// using a reference to the supplied object - System.out::println equivalent to
		// System.out.println(x)

		Funct1<Integer, Integer, Integer> func1 = s::subtract;
		System.out.println(func1.sub(30, 10));
	}
}

/*
 * class Sum{ public static int sum(int a, int b) { return (a+b); } }
 * 
 * public class DoubleColonOperator { public static void main(String[] args) {
 * 
 * BiFunction<Integer,Integer,Integer> bifunc = (a,b) -> Sum.sum(a, b);
 * System.out.println(bifunc.apply(10, 20));
 * 
 * // Reference to static method - Used to refer static methods from a class -
 * Math::max equivalent to Math.max(x,y)
 * 
 * BiFunction<Integer,Integer,Integer> bifunc1 = Sum::sum;
 * System.out.println(bifunc1.apply(10, 20)); }
 * 
 * }
 */
