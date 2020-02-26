function First(a = 10){
    this.a = a;
    console.log(a)
}
function Second(a,b){
    First.call(this.a);
    this.b = b;
    console.log(a+b)
    s11()
    function s11(){
        console.log("s11 method");
    }
}
Second.prototype = Object.create(First.prototype);

Second.prototype.m1 = function add(){
    console.log("Second function method");
}

First.prototype.m2 = function f1(){
    console.log("First function method2")
}
First.prototype.m3 = function f1(){
    console.log("First function method3")
}

//var s = new Second();

 
//var child = Object.create(Second.prototype);
//child.m2();
//child.m1();
var s = new Second(10,20);
s.m1();

s.m2();
//s.m3();
//s1.m1();
//Second(10,20);