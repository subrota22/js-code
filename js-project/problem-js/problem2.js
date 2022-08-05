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


