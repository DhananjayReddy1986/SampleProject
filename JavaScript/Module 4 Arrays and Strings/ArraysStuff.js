var cars = ["Audi", "Benz", "BMW"]; // JavaScript arrays are used to store multiple values in a single variable.

var carss = new Array("Audi", "Benz", "BMW"); // Using the JavaScript Keyword new

console.log(carss[0]); // Access the Elements of an Array

carss[0] = "Ford";

console.log(carss)

carss.push("Baleno")

console.log(carss)
carss[100]= "Maruti"

console.log(carss.length)

const bikes = ["TVS","PULSAR","SCOOTY"]

for(let i = 0; i<bikes.length;i++){      // By index incrementally
    console.log(bikes[i]);
}

for(let key in bikes){ // By keys(indexes)
    console.log(key)
}

for(let k of bikes){   // By values
    console.log(k)
}


[10,20,30,50].forEach(logArrayElements)   // iterates over the elements of an array... Performs the specified action for each element in an array.

//@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

function logArrayElements(element,index,array){
    console.log("a["+index+"]" +":"+ element)
    console.log(array)
}

var numbers = [10,20,30,50];  // iterates over the elements of an Array and creates new
var roots = numbers.map(function(x){
    return x*2;
});
console.log(roots)

var numberss = [10,20,30,50];  // iterates over the elements of an Array and creates filtered
var filters = numberss.filter(function(x){
    return x>10;
});
console.log(filters)


var arr = [1,3,2,5,4]
var sortacc = arr.sort((a,b) => {
    return b-a ;
})
console.log(sortacc)
