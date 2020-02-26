//Function Declaration 
function showMessage(){
    let message = "Dhananjaya";
    console.log(message)
}
showMessage();

function localVariables(){
    let message = "Local"
    console.log(message)
}
localVariables();

let message = "Global"
console.log(message)

function p(n){
    if (n>=90)
    return 5;
    if (n>=80)
    return 4;
    if (n>=70)
    return 3
    else{
        return 1
    }
}
let result = p(100);
console.log(result);


function fibonacci(n){
    if(n<=2)
    return n;
    else{
        return fibonacci(n-2) + fibonacci(n-1)
    }
}

let fibonaciValue = fibonacci(6);
console.log(fibonaciValue);