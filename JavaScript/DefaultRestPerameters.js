function multiply(a,b=1){
    console.log(a*b);
    return a*b;
}

var mul = multiply(5);
console.log(mul);

var b;
console.log(b);   // undefined

//==================================

function multi(a,b){
    b = typeof b!=='undefined'?b:1;
    return a*b;
}
var result = multi(6);
console.log(result)

//==================================

function multiplyy(multiplier,...thisargs){
    return thisargs.map(x => multiplier*x);
}

var result = multiplyy(3,1,2,3,4);
console.log(result)