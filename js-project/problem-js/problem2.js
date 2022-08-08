//celsius to fahrenheit 
var celsius = 35 ;
var fahrenheit = celsius * 9/5 + 32 ;
console.log("celsius to fahrenheit : " , fahrenheit);
//fahrenheit to celsius 
var fahrenheitTemprature = 54 ;
var celsiusTemprature = fahrenheitTemprature - 32 * 5 / 9;
console.log("fahrenheit to celsius  temprature " , celsiusTemprature.toFixed(4));
//fahrenheit to kelvin
var fahrenheitTemprature2 = 100 ;
var kelvin = 5/9 * (100 + 459.67) ; //k=459.67
console.log("fahrenheit to kelvin" , kelvin.toFixed(4));
//simple interest  
//  SI formula // A = P (1+rt) - P

/*-----------
The principal value for the car is $48,000, the rate of 
interest is 10% and the time period given is 4 years.
------------*/

var principalBalance = 48000 ;
var annualInterestRate = 10/100; //10%
var time = 4 ;
var simpleInterest = principalBalance * (1+(annualInterestRate*time)) - principalBalance ; 
console.log("Simple interest : " ,  "$",simpleInterest.toFixed(4) );

//compound interest 

/*---------------------
The principal amount 'P' is $4000. The rate of interest 'r' is 10% per annum. Conversion period = Half-year, 
Rate of interest per half-year  = 10/2% = 5%. The time period 't' is 2 years. 
The compounding frequency 'n' is 2. 
CI = P Math.pow(  (1+r/n) , nt ) - P 
------------------------*/

var principalValue = 4000 ;
var time2 = 2 ; //t
var period = 2 ;//n
var rateFrequency = (10/2) / 100  ; //------- r/n ----- 10% / 2 = 5% = 5/100 -----------//
var compoundInterest =  principalValue *   Math.pow( (1+rateFrequency) , 2*2) - principalValue; 

console.log("compound interest is : " , "$",compoundInterest.toFixed(4));

//percentage math
/*-------------
Foog cent price $25 discount offer 10% now say me the discount offer .
---------------*/
var foogPrice = 25 ;
var foogDiscount = foogPrice / 100 * 10 ; // ------- 25/100  => 0.25 => 0.25 * 10 --------- //
var discountOffer = foogPrice - foogDiscount ;
console.log("Foog discount offer :" , "$",discountOffer);

//matrix 

function matrix(matrixArray) {
for(var i=0 ; i < matrixArray.length ; i++) {
    var elementOfMatrix = matrixArray[i] ;
   console.log(elementOfMatrix);
}
}

var matrixArray = [40,30,28,70] ;

let matrixShow = matrix(matrixArray) ;

console.log(matrixShow);
//-------------------- matrix -------------------//
// [40 58]   [40 52] 
// [52 87]   [58 87]
var a = 40 ;
var b=58 ;
var c=52 ;
var d =87 ;
var firstRow = a +  c ;
var secondRow = b + d ;
console.log(firstRow , secondRow);
//max in arry 
function maxInArray(maxInArray2) {
var largest = [0] ;
for(var i=0 ; i<maxInArray2.length; i++){
    var element = maxInArray2[i] ;
    if(element > largest) {
        largest = element ;
    }
}
return largest ;
}
var  maxInArray2 = [12,45,78,45,30] ;
var heighest = maxInArray(maxInArray2)

console.log(heighest);;


//minumun number // my way 

function MinNumber(MinNumberArray){
 
 var minNumberOfAraay = Math.min(...MinNumberArray) ;

 return minNumberOfAraay ;

}
var MinNumberArray = [10,15,78,46,54,51,25,95];

var callMinNumber = MinNumber(MinNumberArray) ;
console.log(callMinNumber);

//---------- Best logic to find min and max from an array ----------------//

function findMinNumber (myArrayNumber) {
var elementLength = myArrayNumber.length ;
minimumNumber = myArrayNumber[elementLength-1] ;//ignore undifined => -1
while(elementLength--) {
    var element = myArrayNumber[elementLength] ; //element of array// 0 1 2 3 4 5 6  7.....n
    if(element < minimumNumber){
        minimumNumber = element ;
    }
}
return minimumNumber ;
};

var findMin = [21,45,70,12,42] ;

var callMinNumberFromFun = findMinNumber( findMin) ;
console.log("Min number from function : " , callMinNumberFromFun );
//--------------------- End from here ----------------------//
//charecter  by decreement 

function reverseString(text) {
    var reverse = "" ;
    for(i=text.length-1; i >= 0 ; i--) {
        var element = text[i] ;
        reverse += element ;
        console.log(element  , reverse) 
    }
    return reverse ;
}

var myInfo = "She is my girlfriend" ;
var showReverse = reverseString(myInfo) ;
console.log(showReverse);
//word reverse 

function wordReverse (word) {
var myWord = word.split(" ") ; //spilit means make array 
var result = [] ;
for(var i=myWord.length -1 ; i>=0 ; i-- ) {
    var element = myWord[i] ;
     result.push(element) ;    
}
console.log(result.join(" <--- "));
console.log(result);
}

var word = "I am a bad boy" ;

var callWordReverse = wordReverse(word) ;
//join
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(" --> "));
// expected output: "Fire,Air,Water"

console.log(elements.join('.'));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
