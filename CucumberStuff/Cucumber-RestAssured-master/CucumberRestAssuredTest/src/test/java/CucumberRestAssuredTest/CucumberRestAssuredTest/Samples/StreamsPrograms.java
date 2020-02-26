package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;



import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class StreamsPrograms {




    public static void main(String[] args) {


		/*Integer[] array={1,1,2,3,3,4,5,5,6,7,5,7,10,11,10,1};
		findDuplicateElementsInAnArray(array);*/


		//listAllFiles("D:\\Jogi\\Cucumber-RestAssured\\CucumberRestAssuredTest\\");
		//System.out.println(factorial(5));
		/*System.out.println(WeekDays.SUNDAY.getDeclaringClass());
		System.out.println(WeekDays.SUNDAY.compareTo(WeekDays.FRI));
		System.out.println(WeekDays.SUNDAY.compareTo(WeekDays.WED));
		System.out.println(WeekDays.SUNDAY.compareTo(WeekDays.MONDAY));
		System.out.println(WeekDays.SUNDAY.compareTo(WeekDays.SUNDAY));
		System.out.println(WeekDays.SUNDAY.ordinal());
		System.out.println(WeekDays.MONDAY.name());
		System.out.println(WeekDays.SUNDAY.ordinal());*/
		//singleLinkedLikedExamples();
        //stringPermutation("abc");

		//matrixAddition(5,5);
    	/*Integer[] a={2, 35, 23, 6, 8,7,70};
		formLargestNumber(a);*/
		//fibonacciSeries(12);

		//Integer[] array={1,1,2,3,3,4,5,5,6,7,5,7,10,11,10,1};
		//removeDuplicateArrayElements(array);
		
    	/*Integer[] array={1,2,3,4,5,6,7};
		Arrays.stream(removeArrayElement(array,4)).forEach(System.out::println);*/

			//getCharactersFromNumber(123456);
		//printPolindromeRandomNumbersUsingPrintStream(100,1000);
		//printPolindromeRandomNumbers(10,100);
		//reverseNumberNonRecursive(12345);
		//reverseNumberRecursive(12345);
    	/*Integer[] a={1,3,5,1,5,4,2,2,1,5};
    	findDifferentElementsInAnArray(a);*/
		//System.out.println(factorialRecursive(5));
		System.out.println(isArmStrongNumber(370));
        //System.out.println(reverseStringWords("ijjub unirs igoj itin nahor ynniv"));
        //System.out.println(reverseStringWords("                      bujji            srinu  jogi    niti      rohan         vinny   "));


		//appendQuotesToString("Srinu");
		//System.out.println(sumOfNumbersInNumber(1234567890));

		//System.out.println(isAnagram("keep", "peek"));
		/*Integer i=12353216;
		System.out.println(isPolindrome(i.toString()));*/
		//System.out.println(getNumberOfWordsInString("                      bujji            srinu  jogi    niti      rohan         vinny   "));
		//System.out.println(repeatingCharactersCountUsingStreams("Srinivasulu Jogi"));
		//System.out.println(getCurrentSystemDateAndTime());
	}


	public static String getCurrentSystemDateAndTime() {
		return LocalDateTime
				.now()
				.format(DateTimeFormatter.ofPattern("MM/dd/yyy"))
				.toString();
	}


	public static String repeatingCharactersCountUsingStreams(String str) {
		return Arrays.stream(str.split(""))
				.filter(c->!c.contains(" "))
				.collect(Collectors.groupingBy(c -> c.toLowerCase(), Collectors.counting()))
				.entrySet().stream()
				.filter(entry->entry.getValue().intValue()>1)
				.collect(Collectors.toList()).toString();
	}

	public static int getNumberOfWordsInString(String str) {
		return Arrays.stream(str.split(" "))
				.filter(c->!c.isEmpty())
				.collect(Collectors.toList()).size();
	}


	public static boolean isPolindrome(String str) {
		String reversedString = "";
		for (int i = str.length() - 1; i >= 0; i--) {
			reversedString = reversedString + str.charAt(i);
		}
		if (str.equals(reversedString)) {
			System.out.println("Original: "+str+" : Reversed: "+reversedString);
			return true;
		} else {
			System.out.println("Original: "+str+" : Reversed: "+reversedString);
			return false;
		}
	}

	public static boolean isAnagram(String str1, String str2) {
		boolean flag=false;
		String s1=str1.toLowerCase();
		String s2=str2.toLowerCase();
				List s1Sorted=Arrays.stream(s1.split(""))
					.filter(c->!c.contains(" "))
					.sorted()
					.collect(Collectors.toList());


			List s2Sorted=Arrays.stream(s2.split(""))
					.filter(c->!c.contains(" "))
					.sorted()
					.collect(Collectors.toList());

			if (s1Sorted.size()==s2Sorted.size()&&s1Sorted.equals(s2Sorted)){
				System.out.println(s1Sorted+" : s1 Sorted: "+s2Sorted+" :s2 Sorted");
				flag=true;
			}else{
				System.out.println(s1Sorted+" : s1 Sorted: "+s2Sorted+" :s2 Sorted");
				flag=false;
			}
		return flag;
	}

    public static String reverseStringWords(String str) {
        return   Arrays.stream(str.split(" "))
                .filter(c -> !c.contains(" "))
                .filter(c -> !c.isEmpty())
                .map((s) -> new StringBuffer(s).reverse())
               .collect(Collectors.joining(" "));
    }

	public static int sumOfNumbersInNumber(int number) {
		Integer i=number;
		return Arrays.stream(i.toString().split("")).collect(Collectors.summingInt(Integer::parseInt));
	}

	public static void appendQuotesToString(String str) {
		System.out.println("\"str\"");
	}

	public static boolean isArmStrongNumber(int number){
        int num=number;
        ArrayList<Integer> al=new ArrayList();
        while(num!=0){
            al.add(num%10);
            num=num/10;
        }
        int finalNumber = al.stream()
                .map(e -> Math.pow(e, al.size()))
                .mapToInt(v->v.intValue())
                .sum();
        if(finalNumber==number){
            return true;
        }else{
            return false;
        }
    	/*Integer I=(Integer) number;
    	List li=Arrays.stream(I.toString().split(""))
				.map(Integer::parseInt)
				.collect(Collectors.toList())
		;
    	int sum=0;
    	for (int i=0;i<li.size();i++){
    		sum= (int) (sum + Math.pow((int)li.get(i),li.size()));
		}
    	if (sum==number){
			System.out.println(sum);
			return true;
		}else{
			System.out.println(sum);
    		return false;
		}*/
	}


	public static int factorialRecursive(int number) {
    	if (number==0||number==1) {
			return 1;
		}
    	return number* factorial(number-1);
	}

	public static int factorial(int number) {
    	int mul=1;
		for (int i=1;i<=number;i++){
			mul=mul*i;
		}
		return mul;
	}

	public static void findDuplicateElementsInAnArray(Integer[] arr) {
		Arrays.stream(arr)
				.collect(Collectors.groupingBy(e->e,Collectors.counting()))
				.entrySet().stream()
				.filter(v->v.getValue()>1)
                .map(e->e.getKey())
				.forEach(System.out::println);
	}

	public static void findDifferentElementsInAnArray(Integer[] arr) {
		System.out.println(Arrays.stream(arr)
				.distinct()
				.collect(Collectors.toList()));
	}


	// Method for reversing number using recursion
	public static void reverseNumberRecursive(int num){
		//System.out.println("num" + num);
		if(num == 0)
			return;
		System.out.print(num % 10);
		reverseNumberRecursive(num/10);
	}

	public static int reverseNumberNonRecursive(int num){
		int mod=0,reversedNumber=0;
		while(num!=0){
			mod=num%10;
			reversedNumber=(reversedNumber*10)+mod;
			num=num/10;
		}
	return reversedNumber;
	}

	public static void printPolindromeRandomNumbersUsingRandom(int min, int max) {
		int rand=0,reversedNumber;
		for(int i = min; i< max; i++) {
			rand= min +new Random().nextInt((max-min)+1);
			reversedNumber=reverseNumberNonRecursive(rand);
			if (rand==reversedNumber){
				System.out.println("Polindrome: "+rand);
			}
		}
	}

		public static void printPolindromeRandomNumbersUsingPrintStream(int min,int max) {
    	    //RangeClosed both min and max inclusive but in range min is inclusive and max is exclusive
			//IntStream thousandInt = IntStream.rangeClosed(min, max);
            IntStream.range(min, max)
                    .filter(s->reverseNumberNonRecursive(s)==s)
                    .forEach(System.out::println);
		}

	public static void getCharactersFromNumber(int number) {
        ArrayList<Integer> al=new ArrayList<>();
        while(number!=0){
            al.add(number%10);
            number=number/10;
        }
        al.stream().forEach(System.out::println);
    }


	public static Integer[] removeArrayElement(Integer[] arr,Integer element) {
    	for (int i=0;i<arr.length;i++){
    		if (arr[i]==element){
    			for (int j=i;j<arr.length-1;j++){
    				arr[j]=arr[j+1];
				}
    			break;
			}
		}
    	return Arrays.copyOf(arr,arr.length-1);
	}


	public static void removeDuplicateArrayElements(Integer[] array) {
    	HashSet<Integer> hSet=new HashSet<>();
    	for (int i=0;i<array.length;i++){
    		hSet.add(array[i]);
		}
    	Integer[] outputArray=new Integer[hSet.size()];
    	hSet.toArray(outputArray);
    	Arrays.stream(outputArray).forEach(System.out::println);
	}


	public static void fibonacciSeries(int number) {
    	int a=0,b=1,sum=0;
		System.out.print(a);
		System.out.print(b);
		for (int i=0;i<=number;i++){
			sum=a+b;
			a=b;
			b=sum;
			System.out.print(sum);
		}
	}


	public static void formLargestNumber(Integer[] array) {
    	List<Integer> arrList=Arrays.asList(array);
    	Collections.sort(arrList,(a,b)->{

    			String s1=a.toString()+b.toString();
    			String s2=b.toString()+a.toString();
				return s2.toString().compareTo(s1.toString());
				//below code fails if we have 70, 7 or 60, 6
			   // return b.toString().compareTo(a.toString());
				});
    	arrList.stream().forEach(System.out::print);
	}


	private static void rotateLeft(int[] numArr, int steps){
		// create temp array
		int[] temp = new int[numArr.length];
		// copy elements to the temp array
		for(int i = 0; i < steps; i++){
			temp[(numArr.length-steps)+ i] = numArr[i];
		}
		// copy rest of the elements from the original array
		int i = 0;
		for(int j = steps; j < numArr.length; j++, i++){
			temp[i] = numArr[j];
		}
		//copy from temp to original
		System.arraycopy(temp, 0, numArr, 0, numArr.length);

		System.out.println("Array after left rotation- " + Arrays.toString(numArr));
	}

	private static void rotateRight(int[] numArr, int steps){
		// create temp array
		int[] temp = new int[numArr.length];
		// copy elements to the temp array
		for(int i = 0; i < steps; i++){
			temp[i] = numArr[(numArr.length-steps)+ i];
		}
		// copy rest of the elements from the original array
		int i = steps;
		for(int j = 0; j < numArr.length - steps; j++, i++){
			temp[i] = numArr[j];
		}
		System.out.println("Array after right rotation- " + Arrays.toString(temp));
	}

	public static void matrixAddition(int rowM, int colM) {
    	String space=" ";
    	int[][] matrix1=new int[rowM][colM];
		int[][] matrix2=new int[rowM][colM];
		int[][] resultMatrix=new int[rowM][colM];
    	// Creating first matrix
		for (int i = 0; i< rowM; i++){
			for (int j = 0; j< colM; j++){
				matrix1[i][j]= rowM;
			}
		}

		// Creating second matrix
		for (int i = 0; i< rowM; i++){
			for (int j = 0; j< colM; j++){
				matrix2[i][j]= colM;
			}
		}

		System.out.println("First Matrix : " );
		for(int i = 0; i < rowM; i++){
			for(int j = 0; j < colM; j++){
				System.out.print(" " +matrix1[i][j]);
			}
			System.out.println();
		}

		System.out.println("Second Matrix : " );
		for(int i = 0; i < rowM; i++){
			for(int j = 0; j < colM; j++){
				System.out.print(" " +matrix2[i][j]);
			}
			System.out.println();
		}

		System.out.println("Result Matrix : " );
		for(int i = 0; i < rowM; i++){
			for(int j = 0; j < colM; j++){
				if (i==j){
					resultMatrix[i][j]=matrix1[i][j]+matrix2[i][j];
					System.out.print(" " +resultMatrix[i][j]);
				}

			}
			System.out.println();
		}
	}

	public static void stringPermutation(String str) {
		stringPermutation("", str);
	}

	public static void stringPermutation(String prefix, String str) {

    	int n=str.length();
        if (n==0){
			System.out.println(prefix);
		}else{
    		for (int i=0;i<str.length();i++){
    		    if (!prefix.isEmpty())
    		        System.out.println(prefix);
				stringPermutation(prefix + str.charAt(i), str.substring(0, i)
                        + str.substring(i+1, n));
			}
		}
	}


	public static void singleLinkedLikedExamples() {
    	LinkedList<String> linkedList=new LinkedList();
    	linkedList.addFirst("Add first");
		linkedList.addLast("Add Last");
		linkedList.addFirst("Add first");
		System.out.println(linkedList.element());
		System.out.println(linkedList.getFirst());
		System.out.println(linkedList.getLast());
		System.out.println(linkedList.indexOf("Add Last"));
		System.out.println(linkedList.lastIndexOf("Add first"));
		System.out.println(linkedList.offerFirst("OfferFirst: Adds element at front"));
        System.out.println(linkedList.toString());
		System.out.println(linkedList.offer("Offer: Offer adds element @ tail"));
        System.out.println(linkedList.toString());
		System.out.println("removes and returns the first element of this list !!!!!!!!!!!!"+linkedList.pop().toString());
		System.out.println("Retrieves, but does not remove, the last element of this list, or returns null if this list is empty. !!!!!!!!!!!!"+linkedList.peekLast());
        System.out.println(linkedList.toString());
	}

	enum WeekDays{
    	SUNDAY,MONDAY,TUESDAY,WED,THUR,FRI,SAT
	}

	enum WeekDays1{
		SUNDAY,MONDAY,TUESDAY,WED,THUR,FRI,SAT
	}


	public static  void listAllFiles(String folder) {
		try {
			Files.list(Paths.get(folder))
					.filter(f->f.toFile().isFile())
	 			    .forEach((s)->System.out.println(s.getFileName()));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

