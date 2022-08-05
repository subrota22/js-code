console.log("I wanna fuck are you ready");
var num = 0 ;
for(i=1 ; i<101; i++){
    console.log(i);
    var num = num + i ;
}
console.log( `Total additaion is ${num}`);

setTimeout(() => {
    console.log("set time out after 1 second");
}, 4000);

setInterval(() => {
    var hourSet = document.querySelector(".hour") ;
    var minuteSet = document.querySelector(".minute") ;
    var secondSet = document.querySelector(".second") ;
    var ampm = document.querySelector(".ampm") ;
    var hour =  new Date().getHours();
(hour>12)?hour=12:hour=12;
(hour>12) ? ampm="AM" : ampm="PM" ;
    var minute = new Date().getMinutes() ;
    var second = new Date().getSeconds() ;
    hourSet.innerHTML = hour ;
    minuteSet.innerHTML = minute ;
    secondSet.innerHTML = second ;
}, 1000);

setInterval(()=>{
    var localTimeSet = document.querySelector(".localTime") ; 
    var localTimeGet =  new Date().toLocaleTimeString() ;
     localTimeSet.innerHTML = localTimeGet ;
}, 1000)

var hour = document.querySelector(".hour") ;
hour.style.color = "red" ;