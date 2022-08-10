
function myFriend(array) {
var storeData = array [0] ; //i need to compaire data here and store also//
for(var i=0 ;i<array.length; i++) {
    var element = array[i] ;
    if(element.length  > storeData.length) {
        storeData = element ;
    }
}
return storeData ;
}


var array = ['nikita' , 'sonjoy'  , 'banny' ,'resmita kumari'] ;
var callMyFriend = myFriend(array) ;

console.log(callMyFriend);

function pushArray (pushNumbers) {
var storeNumbers = [] ; //i need to only push  here of array data 

for(var i=0; i<pushNumbers.length; i++) {
    var elementOfNumber = pushNumbers[i] ;
    if(elementOfNumber < 0 ) {
        break ;
    }
    storeNumbers.push(elementOfNumber) ;
}

return storeNumbers ; 

}

var arrayOfNumbers = [12,47,85,69, -12 , -84 , 15,78,69,42] ;

var callPushFunc = pushArray(arrayOfNumbers) ;
console.log(callPushFunc);


//ticket price = 500 if buy more then 120 than discount = 120 if by more than 250 than discount = 200 if buy more than 320 than 
//discount = 240 //   discount from total amount  //
//---> this ticket for see star of programming and meet with them directly <-----


function ticketFunction (ticketBuy) {
    var fixedPricOfTicket = 500 ;
    var firstOffer = 120 ; 
    var secondOffer = 200 ;
    var thirdOffer = 240;

if(ticketBuy <= 0 || ticketBuy > 500) {
    console.log("-------->Please enter 1 to 500 our service limitation from 500 ticket at a time<----------");
}
  else  if(ticketBuy <= 120 ) {
        var totalPrice = ticketBuy * fixedPricOfTicket  ;
        return totalPrice ;
    }
else if(ticketBuy >= 120) {
    var firstTicketDiscount = 120 * fixedPricOfTicket  ;
    var lestTicket = ticketBuy - 120 ;
    var secondTicketDiscount = lestTicket * fixedPricOfTicket-  firstOffer  ;
    var totalPrice = firstTicketDiscount + secondTicketDiscount ;
    return totalPrice ;
}
 else if (ticketBuy >= 250 ) {
    var firstTicketDiscount = 120 * fixedPricOfTicket  ;
    var secondTicketDiscount = 130 * (fixedPricOfTicket - firstOffer ) ;
    var lestTicket = ticketBuy - 250;
    var thirdTicketDiscount = lestTicket * ( fixedPricOfTicket - secondOffer) ;
    var  totalPrice = firstTicketDiscount + secondTicketDiscount + thirdTicketDiscount ;
    return totalPrice ;

 }

 else if (ticketBuy >= 320 ) {
    var firstTicketDiscount = 120 * fixedPricOfTicket  ;
    var secondTicketDiscount = 130 * fixedPricOfTicket - firstOffer  ; //250  --> + 50 +  20 --> 320  = 70 * 3rd price //
    var thirdTicketDiscount = 70 * fixedPricOfTicket - secondOffer  ;
    var lestTicket =  Math.abs(ticketBuy - 320) ;
    var forthTicketDiscount = lestTicket * fixedPricOfTicket - thirdOffer ;
    var  totalPrice = firstTicketDiscount + secondTicketDiscount + thirdTicketDiscount + forthTicketDiscount ;
    return totalPrice ;

 } ;
}

var ticketBuy = 350;
var callTicket = ticketFunction(ticketBuy) ;

console.log("Ticket discount offer :" , callTicket);

//decaler one function // take parameter of array //  return positvie number as array and sorting that array number //
//and print even number // than print sum of even numbers  before break statement of negetive number //
//last task is show the all  number  of array

function sumOfArray(array2) {
var checkNumber = array2[0] ;
var storeArrayData = [] ;
var totalEvenNumbers = 0 ;
for(var i=0 ; i<array2.length ; i++) {
var element = array2[i] ;
  if(element> checkNumber) {
        checkNumber = element ;
       }

    if(element < 0 ) {
        break ;
    }
 storeArrayData.push(element) ;

    if(element%2==0) {
    console.log("Even number : " , element);
      totalEvenNumbers += element ;
    }

}
console.log("Show the max number:" , checkNumber);
console.log("Sum of even numbers : " , totalEvenNumbers);
return storeArrayData ;
}

var array2 = [10 ,45 ,80,45,21,30,35,39,-50,82,-28,87,-20 , 20] ;

var callArrayOfSum = sumOfArray(array2) ;

console.log("The output of array : " ,callArrayOfSum.sort() );

console.log("All number of array : " , array2);

//show the max and minmum number with Math.max//

var array11 = [10,25,78,65,45] ;
var sorting = array11.sort() ;
for(var i=0 ; i<array11.length ; i++) {
    var element = array11[i] ;
   var max =  Math.max(element) ;
}
console.log( max );
//--------------- minimum number of array ------------------//
for(var i=array11.length ; i >= 0 ; i--) {
    var element = array11[i] ;
   var minNumber =  Math.min(element) ;
}
console.log( minNumber );

//show the minimum number and maximum number of an array 
let arrayOfMinAndMax = [78,12,45,24,45,68,200,32,27,19,6] ;
//min number of function
function minNumber2(arrayOfMinAndMax) {
    var storeMinNumber = arrayOfMinAndMax[0] ;
for(let i=0 ; i<arrayOfMinAndMax.length ; i++) {
    var elementOfNumber = arrayOfMinAndMax[i] ;
    if(elementOfNumber < storeMinNumber) {
        storeMinNumber = elementOfNumber ;
    }
}
 return storeMinNumber ;
}
let callMin = minNumber2(arrayOfMinAndMax) ;

console.log("Min number of array " , callMin);


//max number of function
function maxNumber2(arrayOfMinAndMax) {
    var storeMaxNumber = arrayOfMinAndMax[0] ;
  for(let i=0 ; i<arrayOfMinAndMax.length ; i++) {
    var elementOfNumber = arrayOfMinAndMax[i] ;
    if(elementOfNumber > storeMaxNumber) {
        storeMaxNumber = elementOfNumber ;
    }
}
 return storeMaxNumber ;
}
let callMax = maxNumber2(arrayOfMinAndMax) ;

console.log("Max number of array " , callMax);

//duplicated value off
var nameOfHabul = ['subrota' , 'subrota' , 'diposh' , 'diposh' , 'bidhan' , 'bidhan' , 'kartik' , 'gonesh' , 'subrota'] ;

function stopDuplicatedValue(nameOfHabul){
var pushArray = [];
for(let i=0 ; i<nameOfHabul.length; i++) {
    var elementOfHabul = nameOfHabul[i] ;

    if(pushArray.indexOf(elementOfHabul) === -1) { //indexOf(element) === -1 
        pushArray.push(elementOfHabul); 
    }
}
return pushArray ;
}

let callDuplicated = stopDuplicatedValue(nameOfHabul) ;

console.log("Stop the duplicated value" , callDuplicated);

//----------------- 2 ---------------//
var checkArrayName = [ 'bijoy' ,'bijoy' ,'bijoy' , 'niloy' , 'niloy' , 'niloy' , 'joya' ,'joya' ,'joya' , 'sreya' ] ;

function checkName (checkArrayName) {
var pushName = [] ;
for(let j=0 ; j<checkArrayName.length; j++) {
    var elementOfName = checkArrayName[j] ;
    if(pushName.indexOf(elementOfName) === -1) {
        pushName.push(elementOfName) ;
    }
}
return pushName ;
}

let checkNameFunc = checkName(checkArrayName) ;
console.log(checkNameFunc);

//----------- fabonacci ------------- // 

var fabonacci = [ 0, 1  ] ;

for(var i=2 ; i<=30; i++) { //start i=2 
    fabonacci[i] = fabonacci[i-1] + fabonacci[i-2] ; // i-2 -> i=2
}
console.log(fabonacci);

//object 

var product = 
{
    name: "phone" , price:22563 , color:"black" 
}
var keys = Object.keys(product) ;
var value = Object.values(product) ;
product.color ="silver" ;
console.log(keys  , value) ;
console.log(product);
