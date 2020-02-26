function myTime(){
    var d = new Date();
    console.log(d.toLocaleTimeString());
}
var time = setInterval(myTime,5000);
