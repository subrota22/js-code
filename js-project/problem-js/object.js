//find price from object 

function phonesBrand (phones) {
var chepest = phones[0] ;
for(var i=0 ; i<phones.length ; i++) {
    var product = phones[i] ;
    if(product.price <   chepest.price) {
        chepest = product ;
    }
}
return chepest ;
}

var phones  = [
  
{brand : "Ipone" , color : "Black" , ram : "20GB" , rom : "120GB" , warenty : "5 Yers" , price : 80000 } ,
{brand : "Oppo" , color : "Black" , ram : "6GB" , rom : "32GB" , warenty : "2 Yers" , price : 10000 } ,
{brand : "Lava" , color : "Black" , ram : "4GB" , rom : "32GB" , warenty : "2 Yers" , price : 8000}  ,
{brand : "Imami" , color : "Blue" , ram : "1GB" , rom : "32GB" , warenty : "1 Yers" , price : 6000}  ,
{brand : "Shaomi" , color : "Black" , ram : "6GB" , rom : "64GB" , warenty : "2 Yers" , price : 20000 } ,
{brand : "Samsung" , color : "Blue" , ram : "10GB" , rom : "64GB" , warenty : "2 Yers" , price : 12000 } ,
{brand : "Walton" , color : "Black" , ram : "10GB" , rom : "64GB" , warenty : "2 Yers" , price : 15000 } ,
{brand : "Symphony" , color : "Brown" , ram : "10GB" , rom : "32GB" , warenty : "2 Yers" , price : 25000 } ,
{brand : "Laxus" , color : "Black" , ram : "4GB" , rom : "32GB" , warenty : "2 Yers" , price :8500}  ,
{brand : "Tinmo" , color : "Black" , ram : "4GB" , rom : "32GB" , warenty : "2 Yers" , price : 12000 } ,
{brand : "Itech" , color : "Gold" , ram : "14GB" , rom : "32GB" , warenty : "2 Yers" , price : 25000} , 

] ;

let callBrand = phonesBrand (phones) ;

console.log(callBrand);

//wood calculation 

function woodCalculation ( chairQuantity  , tableQuantity , bedQuantity) {
   var  chairWood = 10 ;
   var tableWood = 20 ;
   var  bedWood = 30 ;
var chairTotalWood = chairQuantity * chairWood ;
var tableTotalWood = tableQuantity * tableWood ;
var bedTotalWood = bedQuantity  * bedWood ;

var sumOfWood = chairTotalWood + tableTotalWood + bedTotalWood ;

return sumOfWood ;
}
var callWood = woodCalculation( 4 , 2 , 3) ;

console.log(" Wood mesurement : " , callWood);

//ticket calculation
function ticketCalculation(ticketQuantity) {

var firstTicket = 100 ;
var secondTicket = 90 ;
var thirdTicket = 70 ;

if(ticketQuantity <= 100 ) {
    var ticketDiscount = firstTicket * ticketQuantity ;
    return ticketDiscount ;
} else if(ticketQuantity <= 200) {
    var ticketCalculation = 100 * firstTicket ;
    var restTicket = ticketQuantity - 100 ;
    var ticketDiscount2 = secondTicket * restTicket ;
    var totalMoney = ticketCalculation + ticketDiscount2 ;
    return totalMoney ;
} else {
  var firstPrice = 100 * firstTicket ;
  var secondPrice = 100 * secondTicket ;
  var restTicket2 = ticketQuantity  - 200 ;
  var thirdMoney = restTicket2 * thirdTicket ;
  var totalPrice = firstPrice + secondPrice + thirdMoney ;
  return totalPrice ;
}
}
var ticketQuantity = 220 ;
var callTicket  = ticketCalculation(ticketQuantity) ;
console.log("Ticket discount offer : " ,callTicket);

//more shopping 

var shopping = [
    { name : "tabe"  , price : 3500} ,
    {name : "show"  , price : 1200} ,
    { name :"lages", price : 1000} ,
    {name : "bed" , price : 3000} ,
] ;

function shoppingCalculation(shopping) {
var shoppingList = shopping [0] ;
for(var i=0 ;  i<shopping.length ; i++) {
    var getElement = shopping[i] ;
    if(getElement.price < shoppingList.price) {
    shoppingList = getElement ;
    }
}
return shoppingList ;
}
let getShopping = shoppingCalculation(shopping) ; 
console.log("Our more shopping : " , getShopping);

//-------------


var shopping2 = [
    { name : "tabe"   , qauntity:3 , price : 3500} ,
    {name : "show"   , qauntity:3 , price : 1200} ,
    { name :"lages" , qauntity:3 , price : 1000} ,
    {name : "bed"  , qauntity:3 , price : 3000} ,
] ;

function shoppingCalculation2(shopping) {
var shoppingTotal = 0;

for(var i=0 ;  i<shopping.length ; i++) {
    var getElement = shopping[i] ;
    shoppingTotal += getElement.price * getElement.qauntity ;
}

return shoppingTotal ;
}
let getShopping2 = shoppingCalculation2(shopping2) ; 
console.log("Our more shopping total money  : " , getShopping2);

//find price and compare the price form an object 

function findPrice(watchInfo) {
    var watchInfoStored = watchInfo [0] ;
  for(var i=0 ; i<watchInfo.length ; i++) {
    var watch = watchInfo[i] ;
    if(parseInt(watch.price) < parseInt(watchInfoStored.price)) {
        watchInfoStored = watch ;
    }
  }
    return watchInfoStored ;
}

var watchInfo = [
    {brand : "Patek Philippe" , price : "10000"  , color: "golden"} ,
    {brand : "Vacheron Constantin" , price :"20000"   , color: "golden"} ,
    {brand : " Audemars Piguet" , price : "10000"  , color: "golden"} ,
    {brand : "ROYAL OAK" , price : "20000"  , color: "golden"} ,
    {brand : "ROYAL OAK OFFSHORE" , price :"30000"  , color: "golden"} ,
    {brand : "JULES AUDEMARS" , price : "12000"  , color: "golden"} ,
    {brand : "MILLENARY" , price :"1000"  , color: "golden"} 
] ;

var callFindPrice = findPrice(watchInfo) ;

console.log(" I can buy this : " , callFindPrice);

//ticket calculation

function ticketFunc(qauntityOfTicket) {
    var firstPrice = 100 ;
    var secondPrice = 70 ;
    var thirdPrice = 50 ;
   //check condition
   if(qauntityOfTicket <= 100) {
    var totalAmount = firstPrice * qauntityOfTicket ;
    return totalAmount ;
   }
    else if(qauntityOfTicket <= 200 ){
    var firstHunderdPrice = 100 * firstPrice ;
    var lestTicket = qauntityOfTicket - 100 ;
    var secondHunderdPrice = lestTicket * secondPrice ;
    var totalPrice = firstHunderdPrice + secondHunderdPrice ;
    return totalPrice ;
   } 
   else {
    var firstHunderdPrice = 100 * firstPrice ;
    var secondHunderdPrice = 100 * secondPrice ;
    var lestTicket = qauntityOfTicket - 200 ;
    var lastTicketPrice = lestTicket * thirdPrice;
    var  totalPrice = firstHunderdPrice + secondHunderdPrice + lastTicketPrice ;
    return totalPrice ;
   }
}
var qauntityOfTicket = 240 ;
var callTicket = ticketFunc(qauntityOfTicket) ;

console.log(" You have to pay : " , callTicket); 




