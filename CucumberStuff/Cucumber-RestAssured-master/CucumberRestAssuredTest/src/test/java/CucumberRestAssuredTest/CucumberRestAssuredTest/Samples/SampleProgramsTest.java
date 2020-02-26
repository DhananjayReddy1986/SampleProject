package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SampleProgramsTest {
	
	static {
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	}
	
	public static void main(String[] args) {
        List<String> list=new ArrayList();
        list.add("s");
        list.add("r");
        list.add("i");
        list.add("n");
        list.add("u");
        list.add(list.indexOf("n"),"Bhanu");
        System.out.println(list.toString());

        // throws UnsupportedOperationException
        List li1=Collections.unmodifiableList(list);
        li1.add(li1.indexOf("n"),"Bujji");
        System.out.println(list.toString());
        // throws UnsupportedOperationException
        List l1=Arrays.asList("srinu".split(""));
        l1.add(l1.indexOf("u"),"B");


		//System.out.println(Arrays.stream("Jogi".split("")).collect(Collectors.toList()));


		//countNumberOfWords("My Name is Srinivasulu Jogi");

		/*for (int k=1;k<=100;k++)
			isPrimeNumber(k);*/

	    /*List<String> list1= Arrays.asList("Rohan","Niti","Vinny");
	    List<String> list2=Arrays.asList("Rudhra","Nithsh","Veeskhitha");
	    List<String> list3=Arrays.asList("Srinu","Bhanu","Bujji");
	    List<List<String>> listOfLists=Arrays.asList(list1,list2,list3);

        flatMapExampleListOfLists(listOfLists);
		// Writing a file using Files
		try {
			Files.write(Paths.get("C:\\Users\\Srinivasulu_Jogi\\Desktop\\Jogi.txt"),flatMapExampleListOfLists(listOfLists));
		} catch (IOException e) {
			e.printStackTrace();
		}*/
		/*SampleProgramsTest sampleProgramsTest=new SampleProgramsTest();
		List<String> content=sampleProgramsTest.readFile("D:\\Jogi\\Personal\\PerformanceCycleNotes.txt");
		System.out.println("Content Information: "+content.toString());*/

	}
	
	public List<String> readFile(String path) {		
		
		try {
			return Files.readAllLines((Paths.get(path)));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public static List<String> flatMapExampleListOfLists(List<List<String>> list){
	    return list.stream()
                .flatMap(s->s.stream())
                .sorted()
                .skip(1)
                .limit(6)
                .collect(Collectors.toList());
    }


	public static void isPrimeNumber(int number) {
		int count=0;
		for (int i=1;i<=number;i++){
			if(number%i==0)
				count++;
		}
		if(count>2){
			System.out.println("Not prime: "+number);
		}else{
			System.out.println("Prime Number: "+number);
		}
	}

	public static void countNumberOfWords(String str){
		System.out.println(str.trim().split(" ").length);
	}

}
