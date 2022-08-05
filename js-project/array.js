/**
 * 
 *const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')) ;
const numbers = ['12' , '20' , '40'] ;
console.log(numbers.indexOf('40')); 
var nums = [10,5,6] ;

console.log( nums.indexOf( 0) , nums.indexOf(10) ) ; 
//if(cokePrice < 15 ____?____ isHot == true);
var cokePrice  ;
if(cokePrice<15 || cokePrice >15 ){
    console.log("isHot");
} else{
    console.log("cool");
}
 
 * 
 * **/
//replace array move and set array value 
var fruits = ["Apple" , "Banana" ,"Orange"] ;
console.log(fruits.indexOf("Banana"));
fruits[1] = "Mango" ;
fruits.pop() ;
 fruits.push("Watermelon") ;
console.log(fruits);

//latter grade 
var myScore = 85 ;
var TomScore = 66 ;
var JaneScore = 95 ;
var PetarScore = 56 ;
var JohnScore = 40 ;


if(80<=JaneScore){
    console.log("A");
}
else if(60<=JaneScore){
    console.log("B") ;
}
else if(50<=JaneScore){
    console.log("C") ;
}
else if(40<=JaneScore){
    console.log("D") ;
}
else if(39<=JaneScore){
    console.log("F") ;
}
else{
    console.log("Your number to short to pass");
}
//max number find
var numberOne = 10 ;
var numberTwo = 79 ;
var numberThree = 5 ;

if(numberOne>numberTwo){
    if(numberOne>numberThree){
        console.log("Number one is max number");
    }else{
        console.log("Number three is the max number");
    }
} else if(numberTwo>numberThree){
    if(numberTwo>numberOne) {
        console.log("Number two is max number");
    }else{
        console.log("Number one is Max number");
    }
} else if(numberThree> numberOne) {
     if(numberThree>numberTwo) {
        console.log("Number three is the max number");
     }else{
        console.log("Number two is the max number");
     }
}else{
    console.log("We dont find the number");
}
//end
//Or find by large number by this method 
console.log(Math.max(13 , 79 , 45));

//isosceles  find out
var isosceles1 = 9 ;
var isosceles2 = 8 ;
var isosceles3 = 9 ;
if(isosceles1==isosceles2 || isosceles1==isosceles3) {
    console.log("This is isosceles");
}else{
    console.log("This is not isosceles");
}
if(isosceles2==isosceles3 || isosceles2==isosceles1) {
    console.log("This is isosceles");
}else{
    console.log("This is not isosceles");
}
if(isosceles3==isosceles2 || isosceles3==isosceles1) {
    console.log("This is isosceles");
}else{
    console.log("This is not isosceles");
}
//a=bh/2
var areaOfIsosceles = isosceles1*isosceles2 / 2 ;
console.log("Area of Isoscelec " + areaOfIsosceles);



