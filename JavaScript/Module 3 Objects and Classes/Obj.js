var employee = {
    name : "Dj",
    Sal : "10000"
}
for(i of Object.getOwnPropertyNames(employee))
{
    console.log(employee[i])
}
//------------------------------------------
var arr = ["A","B","C","100"];
for(x in arr)
{
    console.log(x)
}

function add(x,y){
    console.log(x+y);
}
add(10,20);

function add(x,y){
    console.log(x+y);
}
add(10,20);



var x = function add(x,y){
    console.log(x+y);
}
x(10,20);

var x = function add(x,y){
    console.log(x-y);
}
x(10,20);

var s = function()
{
    for(var i=0;i<arguments.length;i++)
    {
        console.log(arguments[i]);
    }
}

s(10,20,30,40,50);