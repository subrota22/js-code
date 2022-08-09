// 1. practice  
var string = "Hello my friend" ;
var number = 2020258 ;
var boolean = true ;
console.log(string , number , boolean);

// 2. practice 
let myNumber = 255 ;
myNumber += 500 ;
const yourNumber = 25  ;
console.log(myNumber , yourNumber);
//3. practice 
var num1 = 200 ;
var num2 =25;
var add = num1 + num2 ;
var sub = num1 - num2 ;
var multi = num1 * num2 ;
var divi = num1 / num2 ;
var remi = num1 % num2 ;
console.log(add , sub , multi , divi , remi);

// 4. practice 
var comparireNumber1 = 26 ;
var comparireNumber2 = 54 ;
var comparireNumber3 = 200 ;
var stringCompaire = "number" ;

if(comparireNumber1 < comparireNumber2 ) {
    console.log("True1");
} else{
    console.log("False1");
}

 if(comparireNumber1 <= comparireNumber2 ) {
     console.log("True2");
}   else{
    console.log("False");
}

if(comparireNumber1 >=  comparireNumber2) {
    console.log("True3");
}  else {

    console.log("False2");
}

  if ( comparireNumber1 > comparireNumber2 ) {
    console.log("True8");
} 
else{
    console.log("False3");
}
 if (comparireNumber1 === comparireNumber2) {
    console.log("True7");
} else{
    console.log("False4"); 
}
if(comparireNumber1!== comparireNumber2){
    console.log("True6");
}else{
    console.log("False6");
}

if(comparireNumber1===stringCompaire) {
    console.log("True4");
}else{
    console.log("False5");
}

if(comparireNumber1 && comparireNumber2 == comparireNumber3) {
    console.log("True5");
}else{
    console.log("False6");
}

if(comparireNumber1 || comparireNumber2 > comparireNumber3) {
    console.log("True6 ");
}else{
    console.log("False7");
}
//-------------- check logic 6. practice -----------//
var show = num1 >= num2 ;
var show1= num1 == num2 ;
var show2= num1 <= num2 ;
var show3 = num1 !== num2 ;
var show4= num1 > num2 ;
var show5= num1 < num2 ;  
console.log("----------------->" , show  , show1 , show2 , show3 , show4  , show5 ,  " <---------------------") ;
//5 . practice 

var compaireLogic = 589 ;
var compaireLogic2 = 258 ;
var compaireLogic3 = 600 ;
if(compaireLogic < compaireLogic3 && compaireLogic2 < compaireLogic3) {
    console.log("True logic");
}  else{
    console.log("False");
}

if(compaireLogic < compaireLogic3 || compaireLogic2 < compaireLogic3 ) {
    console.log("True logic");
}  else{
    console.log("False");
}
//. 7 practice problem
var numberOfWhile = 7 ;
while(numberOfWhile<=19) {
    if(numberOfWhile%2!==0) {
    console.log("Odd number" , numberOfWhile);
    }
    numberOfWhile++ ;
}

// .8 practice problem
var array = [12,45,17,80,78,94,56,20] ;
console.log("-------> Sorting of array : " , array.sort()  , "<------- ");
var lengthOfArray = array.length ;
array[3] = 75 ;
array.splice(0,1, 38 , 66) ; //set position to change from the element like -> 0 - 2 , 1-5, 3-5 , 2-8 etc 
console.log("--------> Array : " , array , "Length of array" ,  lengthOfArray);

// .9 practice problem

for(number of array) { //first asign the name to use second asign the  value 
    console.log("----> " , number);
}

// .10 practice problem

var array2 = [10,50,45,28,70,80,91,98,95,94,85,84,87,83] ;

for(var i=0 ; i<array2.length ; i++) {
    var elementOfArrayNumbers = array2[i] ;
    if(elementOfArrayNumbers > 80) {
        console.log("Gatter than 80 --> " , elementOfArrayNumbers);
    } 
}

// .11 practice problem
function myFunction (multiNumber , multiNumber2 , multiNumber3) {
var totalOfMultiplacation = multiNumber * multiNumber2 * multiNumber3 ;
return totalOfMultiplacation ;
}
var multiNumber = 52 ;
var multiNumber2 = 68 ;
var multiNumber3 = 38 ;

let callMyFunction = myFunction(multiNumber , multiNumber2 , multiNumber3) ;

console.log("Total of multiplacation : " , callMyFunction);

// .12 practice problem
var myObject =  {brand : "Lava" , color: "golden" , ram: "2GB"} ;

myObject.color = "black" ;
console.log("Object changes : " , myObject); 

//--------------------- End the short problem solution ---------------//

var dstring = "Ore mon valo nai tur karone diba nishi jagi bose re.. " ;
var getDString = dstring.substring(0, 58) ;
console.log("Get string form string variable by substring : " , getDString);

