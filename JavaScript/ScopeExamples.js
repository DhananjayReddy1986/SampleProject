// Following variables defined in global scope
var num1 = 20
var num2 = 30
var name = "Dhanu"

{
    var number = 1000;
}

{
    let number1 = 10000;
}

//function is defined in the global scope
function sum(){
    console.log(num1+num2);
}

sum(); // 50

// Nested Function

function getScore(){
    var num1 = 2, num2 =3;

    function add(){
        return name + " Scored :" + (num1+num2);
    }
    return add();
}
console.log('num1 :' + num1)
console.log('num2 :' + num2)
console.log('number: ' + number)
console.log('number1: ' + number1)

var score = getScore();
console.log(score);
//console.log(getScore());