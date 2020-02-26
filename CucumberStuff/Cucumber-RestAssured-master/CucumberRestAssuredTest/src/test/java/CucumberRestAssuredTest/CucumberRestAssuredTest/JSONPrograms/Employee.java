package CucumberRestAssuredTest.CucumberRestAssuredTest.JSONPrograms;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/*@JsonIgnoreProperties(ignoreUnknown = true)*/
public class Employee {
    private Integer id;
    private String name;
    private Integer age;
    private String location;

    Employee(){

    }

    public Employee(Integer id, String name, Integer age, String location) {
        super();
        setId(id);
        setName(name);
        setAge(age);
        setLocation(location);
    }

    public void setLocation(String location) {
        this.location=location;
    }

    public void setAge(Integer age) {
        this.age=age;
    }

    public void setName(String name) {
        this.name=name;
    }

    public void setId(Integer id) {
        this.id=id;
    }

    public String getLocation() {
        return location;
    }

    public Integer getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", age=" + age
                + ", location=" + location + "]";
    }
}
