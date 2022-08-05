//-----------1.function problem-----------//
function foo() {
    console.log("foo"); 
    bar() ;
}
foo() ;
function bar() {
    console.log("bar");
}

//-----------2.function problem get averege number -----------//

function make_avg(num1 , num2 , num3) {
var sum = num1 + num2 + num3 ;
var average = sum / 3 ;
return average ;
}

var number1 = 55 ;
var number2 = 45 ;
var number3 = 40 ;

var showAverage = make_avg(number1 , number2 , number3 ) ;

console.log("Print the average : " , showAverage);

//array average by the function

function averageNumber(arrayNumbersGet , arrayLengthGet) {
var makeAverage = arrayNumbersGet / arrayLengthGet;
return makeAverage ;
}
var setAnAraay = [45,78,65,48,75,32,15,45,65,45,30,48,70,84,86,88,77,73,25,35,65] ;
addAllNumbers= 0 ;
for(arrayNumbers=0 ; arrayNumbers<setAnAraay.length ; arrayNumbers++) {
 addAllNumbers+= setAnAraay[arrayNumbers] ;
}
var arrayLengthSet = setAnAraay.length ;
var getAverageHere = averageNumber(addAllNumbers , arrayLengthSet)

console.log("The average number of array => " , getAverageHere);

//odd and event function

function odd_even (numberOfOddAndEven) {
if(numberOfOddAndEven%2==0) {
console.log(numberOfOddAndEven , " : is an even number . ");
}else{
    console.log(numberOfOddAndEven , " : is an odd number ");
}
return numberOfOddAndEven ;
}
var enterNumber = 30 ;
var oddAndEven = odd_even(enterNumber) ;


//signal checking 

var signal ="red";

switch(signal) {
case "red" :
console.log("You are in the danger stop right now .");
break;
case "yellow" :
console.log("You must  have to stop .");
break;
case "green" :
console.log("You should cross the road . ");
break;

default : 
console.log("You can cross the road any time ");

}
//singnal check by if  , else , else if  
var signal2 = "yellow" ;

if(signal2=="red") {
    console.log(" You are in the danger stop right now ."); 
} else if(signal2=="yellow") {
    console.log("You must  have to stop .");
}else if(signal2=="green") {
  console.log(" You should cross the road . ");
} else{
    console.log("You can cross the road any time ");   
}

//----------------- function of array to defined the average number ---------------------//

function getTheAverageNumber(arrayElement1 , arrayElement2 , arrayElement3 , arrayElement4, arrayElement5 , arrayElement6 ,  arrayLength3) {
var addAllNumberOfArray = arrayElement1 + arrayElement2 + arrayElement3 + arrayElement4 + arrayElement5 + arrayElement6;
var getArrayAverage = addAllNumberOfArray / arrayLength3 ;
return getArrayAverage ;
}
var arraySet = [12,25,35,45,65 , 80];

var arrayElement1 = arraySet[0] ;
var arrayElement2 = arraySet[1] ;
var arrayElement3 = arraySet[2] ;
var arrayElement4 = arraySet[3] ;
var arrayElement5 = arraySet[4] ;
var arrayElement6 = arraySet[5] ;
var arrayLength3 = arraySet.length ;
var showAverageNumberOfArray = getTheAverageNumber(arrayElement1 , arrayElement2 , arrayElement3 , arrayElement4, arrayElement5 , arrayElement6 , arrayLength3 ) ;

console.log("The second array average number : " , showAverageNumberOfArray);

//----------------------------
//END problem solution 
//----------------------------