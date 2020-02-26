function sayHi(a,b){
    console.log(a+" "+b);
}

let timerId = setTimeout(sayHi,1000,100,200);
console.log(timerId);
setTimeout(()=>{clearTimeout(timerId);},200000);

function setIntervall(c,d){
    console.log("Hello");
    console.log(c+" "+d);
}

//let timerId = setInterval(() => console.log('tick'), 2000);
let timerId1 = setInterval(setIntervall, 10000,100,200);

//setTimeout(() => { clearInterval(timerId1); console.log('stop'); }, 5000);

clearInterval(timerId1);