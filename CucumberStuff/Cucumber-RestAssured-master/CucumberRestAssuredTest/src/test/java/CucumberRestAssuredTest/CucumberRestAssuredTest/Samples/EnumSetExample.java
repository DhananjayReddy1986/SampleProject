package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

import java.util.EnumSet;

public class EnumSetExample {
    enum WeekDays{
        Sun,Mon,Tues,Wed,Thur,Sat,fri
    }
    public static void main(String[] args) {
        EnumSet<WeekDays> ByAllOf =EnumSet.allOf(WeekDays.class);
        System.out.println("By all of: ");
        ByAllOf.stream().forEach(System.out::println);
        EnumSet<WeekDays> ByCopy =EnumSet.copyOf(ByAllOf);
        System.out.println("Copied set: ");
        ByCopy.stream()
                .forEach(System.out::println);
        System.out.println("By range: ");
        EnumSet<WeekDays> enumSetByRange =EnumSet.range(WeekDays.Tues,WeekDays.Thur);
        enumSetByRange.stream()
                .forEach(System.out::println);

        System.out.println("By of: ");
        EnumSet<WeekDays> enumSetByOf=EnumSet.of(WeekDays.fri,WeekDays.valueOf("Tues"));

        enumSetByOf.stream()
                .forEach(System.out::println);
        System.out.println("By complement of: ");
        EnumSet<WeekDays> enumSetByComplementOf=EnumSet.complementOf(enumSetByOf);

        enumSetByOf.stream()
                .forEach(System.out::println);

    }
}
