// Converting JavaScript object to JSON

var myObj = {name: "John", age: 31, city: "New York"};
var myJson = JSON.stringify(myObj);
console.log(myJson)

// Converting JSON to JavaScript object

var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var javaScriptObj = JSON.parse(myJson)
console.log(javaScriptObj)

// Storing Data

// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
Window.localStorage 
localStorage.setItem("testJSON", myJSON);
console.log(testJSON)

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj)