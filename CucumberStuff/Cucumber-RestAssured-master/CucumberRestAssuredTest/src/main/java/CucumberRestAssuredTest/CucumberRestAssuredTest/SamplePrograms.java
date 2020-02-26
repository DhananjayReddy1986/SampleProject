package CucumberRestAssuredTest.CucumberRestAssuredTest;

import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * Hello world!
 *
 */
public class SamplePrograms
{
    public static void main( String[] args )
    {
        // repeating Character count only
        String str="srinivasulujogi";
        System.out.println(Arrays.stream(str.split(""))
                .collect(Collectors.groupingBy(c->c, Collectors.counting()))
                .entrySet().stream()
                .filter(entry->entry.getValue().intValue()>1)
                .collect(Collectors.toList()));
        //.forEach((x,y)->System.out.println("Character: "+x+" Count: "+y));


        // sum
        Integer[] arr={3,7,8,1,10,11};

        //(Arrays.stream(arr).collect(Collectors.summingInt(Integer::intValue)));
        // Average
       // System.out.print(Arrays.stream(arr).collect(Collectors.averagingInt(Integer::intValue)));

        //System.out.println( "Hello World!" );
    }
}
