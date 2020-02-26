//Getters
var person = {
    firstName : "Dhanu",
    lastName : "Reddy",
    language : "English",
    get lang(){
        return this.language;
    }
};
console.log(person.lang);
//Setters
var person = {
    firstName : "Dhanu",
    lastName : "Reddy",
    language : "",
    set lang(lang){
        this.language = lang;
    }
};
person.lang = "Telugu";      //Set an object property using a setter:
console.log(person.language)

// ==============================

// Difference between JavaScript function and Getter?

//Ex : 1
var person = {
    firstName: "John",
    lastName : "Doe",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName());

//Ex : 2
var person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName);

//Example 1 access fullName as a function: person.fullName().

// Example 2 access fullName as a property: person.fullName.

function Person(first, last, age, eye) {   // Object Constructor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English"     // Adding a property to a constructor function
    this.name = function() {return this.firstName + " " + this.lastName;};   // Adding a methd to a constructor function
  }
var person1 = new Person("Dhananjaya","Reddy",32,"White")   // Creating objects on sametype(Person)
var person2 = new Person("Dhananjaya1","Reddyy",33,"Black")

person1.nationality = "English" //Adding a property to an Object

person1.name = function () {     // Adding a method to an Object
    return this.firstName + " " + this.lastName;
  };

for(x in person1){
    console.log(x +" : "+person1[x])
}
for(x in person2){
    console.log(x +" : "+person2[x])
}



