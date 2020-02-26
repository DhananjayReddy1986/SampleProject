var person = {
    firstName : "Dhananjaya",
    lastName : "Reddy"
}
person.age = 30;  // Adding New Property
delete person.firstName;  // Delete property
for(x in person){
    console.log(x)
    console.log(person[x])
}