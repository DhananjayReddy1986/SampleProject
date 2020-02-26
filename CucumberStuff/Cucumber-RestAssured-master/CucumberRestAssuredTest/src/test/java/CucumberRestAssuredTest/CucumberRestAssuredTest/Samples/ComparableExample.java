package CucumberRestAssuredTest.CucumberRestAssuredTest.Samples;

import org.junit.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparableExample {

    public static void main(String[] args) {

        Student student1=new Student(4,"niti");
        Student student2=new Student(1,"rohan");
        Student student3=new Student(1,"vinny");
        Student student4=new Student(1,"jogi");
        List<Student> studentList= Arrays.asList(student1,student2,student3,student4);
        Collections.sort(studentList);
        System.out.println(studentList.toString());

        //createTemporaryFile();
        /*Employee employee1=new Employee(4l,"vasu");
        Employee employee2=new Employee(2l,"vasu");
        Employee employee3=new Employee(1l,"jogi");
        List<Employee> list=Arrays.asList(employee1,employee2,employee3);

        Collections.sort(list,Comparator.comparing(Employee::getId).thenComparing(Employee::getName));
        System.out.println(list.toString());*/

    }

    static class Employee {
        Employee(Long id,String name){
           this.id=id;
           this.name=name;
        }

        private Long id;
        private String name;


       /* @Override
        public int compareTo(Employee o)
        {
            return this.getId().compareTo( o.getId() );
        }*/

        public Long getId() {
            return id;
        }

        @Override
        public String toString() {
            return "Employee{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    '}';
        }

        public String getName() {
            return name;
        }
    }


    public static void createTemporaryFile() {
        try {
            Path tempFilePath =Files.createTempFile(Paths.get("D:/Jogi/Temp"),"MyTempFile",".temp");
            Files.write(tempFilePath,"Srinivasulu Jogi".getBytes());
            List<String>allLines=Files.readAllLines(tempFilePath);
            allLines.add("Niti Vinny Rudra");
            System.out.println("Created File: "+tempFilePath+" File Text: "+Files.readAllLines(tempFilePath));
            //Files.write(tempFilePath,"Niti Vinny Rudra".getBytes());
            Files.write(tempFilePath,allLines);
            Files.write(tempFilePath,"Rohan Veeskhitha".getBytes(), StandardOpenOption.APPEND);
            System.out.println("Created File: "+tempFilePath+" File Text: "+Files.readAllLines(tempFilePath));
            tempFilePath.toFile().deleteOnExit();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static class Student implements Comparable<Student>{
        int id;
        String name;
        Student(Integer id, String name){
            setId(id);
            setName(name);
        }
        public int getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setId(int id) {
            this.id = id;
        }

        @Override
        public int compareTo(Student o) {
            if (this.getId()>o.getId()){
                return 1;
            }else if(this.getId()==o.getId()){
                return this.getName().compareTo(o.getName());
                //return 0;
            }else{
                return -1;
            }
/*            return Comparator.comparing(Student::getId)
                    .thenComparing(Student::getName)
                     .compare(this,o);*/
         }

        @Override
        public String toString() {
            return "Student{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    '}';
        }
    }
}
