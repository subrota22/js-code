
var inch = 84 ;
var feet = 84/12 ; //inch/feet 
console.log(feet);

var miles = 2 ;
var km =  2 * 1.60934 ;
console.log(km);

var number = 98 ;

if(number%2==1) {
    console.log("False"); //odd
} else{
    console.log("True");  //even
}
var hour = 5 ;
var second = 5 * 60 ;
console.log("5 hours to second : " , second);


var year = 2012;

if (year%4==0) {
    console.log("This is Leap Year" , year );
} else {
    console.log("This is not leap year" , year );
}

// function issue 
function findOddSum(array){
return array ;
}
var  array = [5 , 7,8,10,45,30 , 25 ,85 , 50 ,  20 ] ;
var addNumber = 0 ;
for(i=0; i<array.length ; i++)
{
  if(array[i] %2 == 1 ) {
     addNumber += array[i] ;
  }
}

var oddNum = findOddSum(addNumber) ;

console.log(oddNum);
//------------------------- add number function      ------------------
function numberOfResult() {
    var result = 0 ;
    for(j=1 ; j<= 10 ; j++ ) {
        result += j ;
    }
    return result ;
}

var numberGet = numberOfResult() ;

console.log(numberGet);

function getSumOfArray (numbers) {
  var addNumber = 0 ;
for(let i=0 ; i < numbers.length ; i++) {
  const index =  i; 
  const element = numbers[index] ;
  if(element%2==1) {
    console.log("This is odd number : "  , element) ;
    addNumber += element ;
  } 
  // console.log(index , element);
}
console.log("Total of odd numbers : " , addNumber);
}
const myNumbers = [12,65,45,78,32,40,91];
getSumOfArray(myNumbers) ;

function getOddAndEven (numbersOfArray) {
  var addAllNumberOfArray = 0 ;
for(var j=0 ; j < numbersOfArray.length ; j++ ) {
  var elementOfArray = numbersOfArray[j] ;
  if(elementOfArray%2==1) {
    console.log("This is first odd number : " , elementOfArray) ;
    addAllNumberOfArray += elementOfArray ;
  }
} 
return addAllNumberOfArray ;
}

var numbersOfArray = [45,21,40,28,75,65,32,39,18,20 ] ;

let sumOfOddNumbers = getOddAndEven(numbersOfArray) ;

console.log("Sum of the first add numbers : " , sumOfOddNumbers)

// push an array by function

function pushArrayNumber (arrayPushNumbers) {
  var addPushNumbers = [] ;
  var sumOfArray = 0 ;
  for(pushIndex=0 ; pushIndex < arrayPushNumbers.length ; pushIndex++) {
    var elementOfpushNumbers = arrayPushNumbers[pushIndex] ;
    if(elementOfpushNumbers % 2 !== 0) {
    addPushNumbers.push(elementOfpushNumbers) ;
    sumOfArray += elementOfpushNumbers ;
    }  
  }
 console.log(addPushNumbers) ;
return sumOfArray ;
}

var arrayPushNumbers = [20,45,87,28,49,97,96,93,95,12,21,53] ;

var sumOfPushNumbers = pushArrayNumber(arrayPushNumbers) ;

console.log("Last odd number sum : " ,sumOfPushNumbers);


//two function one work 

function myFirstFunction(myNumbersOfArray) {
  resultOfAdd = 0 ;
 for(var i=0 ; i< myNumbersOfArray.length ; i++ ) {
  var element = myNumbersOfArray[i] ;
  if(element%2==0) {
    resultOfAdd += element ;
  }
 }

return resultOfAdd ;
}

function mySecondFunction(myNumbersOfArray) {
  var storeArrayData = [] ;
  for(i=0 ; i< myNumbersOfArray.length ; i++) {
    var element = myNumbersOfArray[i] ;
    if(element%2==0) {
      storeArrayData.push(element) ;
    }
  } 
  return storeArrayData ;
}
var myNumbersOfArray = [20,40,60,80,21,13,57,53] ;

var myFunctionOne = myFirstFunction(myNumbersOfArray) ;
var showArrayData = mySecondFunction(myNumbersOfArray) ;

console.log(showArrayData);
console.log("Total of even number : " , myFunctionOne) ;

var day = 2 ;
var hour2=2 ;
var minute2 = 10 ;
var second2 = 2*2*10*60 ;
console.log("Day , Hour and Minuter into second : " , second2);

