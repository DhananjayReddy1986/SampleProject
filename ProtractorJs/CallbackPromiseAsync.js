//Callback : With out function Expression

/* function expression(a,b,callback){
    var sum = a+b;
    callback(sum);
}
function square(sum){
    console.log(sum*sum);
}
expression(5,5,square); */

// Callback : Assigning it to some variable i.e, With Function Expression stype and used Arrow Functions

/* let expression = (a,b,callback)=>{
    callback(a,b)
}

function add(a,b){
    console.log(a+b)
}

expression(5,6,add) */

// callback function itself is replaced with body and used Arrow function

/* let expression = (a,b,callback)=>{
    callback(a,b)
}

expression(5,6,(a,b)=>{
    console.log(a+b)
}) */

// Converting callback to promise

/* function expression(a,b){
return new Promise((resolve)=>{
    resolve(a+b)
})
}

expression(5,6).then(result=>{
    console.log(result)
}) */


//await and async 

/* async function expression(a,b){               // have to look into it
    return new Promise((resolve)=>{
        resolve(a+b)
    })
    }


let result = await expression(5,6)

console.log(result)   */