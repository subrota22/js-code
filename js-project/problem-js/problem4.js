//book page calculation
function paperRequirements(book1 , book2 , book3){
var bookRequire = 2 ;
var bookRequire2 = 1 ;
var bookRequire3 = 2 ;

var firstBook = book1 * bookRequire  ;
var secondBook = book2 * bookRequire2  ; 
var thirdBook =   book3  * bookRequire3;

console.log("First book page require: " ,  firstBook , 
"Second book page require: " ,  secondBook ,
  "Third book page require: " ,  thirdBook );
  
  var totalBookpge = firstBook + secondBook + thirdBook ;
return totalBookpge ;

}

var book1 = 100 ;
var book2 = 200 ;
var book3= 300 ;

let callPaper = paperRequirements(book1 , book2 , book3 ) ;
console.log( "Total page require : " ,callPaper);

//best friend array

function bestFriend(friendArray) {
var friendDataStored = friendArray[0] ;
for(var i=0 ; i<friendArray.length; i++) {
   if(friendArray[i].length > friendDataStored.length) {
    friendDataStored = friendArray[i] ;
   }
}
 return friendDataStored ;
}

var friendArray = ["sajid" , "mamun" , "kamal" , "jubayer bin rashed" , "chinku"] ;

var callFriendFunc = bestFriend(friendArray) ;
console.log("Max length : " , callFriendFunc);

//break at the negativ value 

function onlyPositive (numbers) {
var numbersStore  = [] ;
for(var i=0 ; i<numbers.length ; i++)  {
    var element = numbers[i] ;
   if(element < 0 ) {
   break ;
   }
   numbersStore.push(element) ;
}
return numbersStore ;
}

var numbers = [45,87,96,11,63, -56 ,71,28] ;

var callPositiveFunc = onlyPositive (numbers) ;
console.log("the positive numbers : " , callPositiveFunc);

//feet to inch
function feetToInch (feet) {
   var inch = feet * 12 ;
   return inch ;
}

var feet = 5.6 ;
var callFeetToInch = feetToInch( feet) ;
console.log("Inchi:" ,callFeetToInch.toFixed(2));

;
//Centimeter To Meter
function centimeterToMeter (centiMetar) {
   var meatar = centiMetar * 0.01 ;
   return meatar ;
}
var centiMetar = 255 ;
var callCentimeter = centimeterToMeter(centiMetar) ;
console.log( "Metar" , callCentimeter.toFixed(2) );

//array push
function myArray (numbers) {
var storeNumbers = [] ;
for(var i=0 ; i<numbers.length ; i++) {
   var elementOfNumbers = numbers[i] ;
   if(elementOfNumbers < 0 ) {
      break ;
   }
  storeNumbers.push(elementOfNumbers) ;
 console.log(elementOfNumbers);
}
return storeNumbers ;
}

var myArray2 = [20,45,21,24,55,-78,24,32,50] ;

var callMyArray = myArray(myArray2) ;

console.log("Only positive number will be return " , callMyArray) ;

//-------------- find friend -------------//

function myFriendFunc(myFriend) {
var friendData = myFriend [0] ;
for (var i=0 ; i<myFriend.length; i++) {
   var elementOfFriend = myFriend[i] ;
   if(elementOfFriend.length > friendData.length) {
      friendData = elementOfFriend ;
   }
}
return friendData ;
}
var myFriend = ['rasel' , 'johan roy' , 'nikita rani' , 'puspa roy' , 'coytali bannerji'] ;

var callFriend = myFriendFunc(myFriend) ;

console.log("My friend data -> " ,callFriend);
