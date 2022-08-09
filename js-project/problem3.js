
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


//ticket price = 500 if buy more then 120 than discount = 240 if by more than 250 than discount = 200 if buy more than 320 than 
//discount = 120 //---> this ticket for see star of programming and meet with them directly <-----


function ticketFunction (ticketBuy) {
    var firstTicketPrice= 500 ;
    var secondTicketPrice = 240 ; 
    var thirdTicketPrice = 200 ;
    var forthTicketPrice = 120 ;


    if(ticketBuy <= 120 ) {
        var totalPrice = ticketBuy * firstTicketPrice ;
        return totalPrice ;
    }
else if(ticketBuy >= 120) {
    var firstTicketDiscount = 120 * firstTicketPrice ;
    var lestTicket = ticketBuy - 120 ;
    var secondTicketDiscount = lestTicket * secondTicketPrice ;
    var totalPrice = firstTicketDiscount + secondTicketDiscount ;
    return totalPrice ;
}
 else if (ticketBuy >= 250 ) {
    var firstTicketDiscount = 120 * firstTicketPrice ;
    var secondTicketDiscount = 130 * secondTicketPrice ;
    var lestTicket = ticketBuy - 250 ;
    var thirdTicketDiscount = lestTicket * thirdTicketPrice ;
    var  totalPrice = firstTicketDiscount + secondTicketDiscount + thirdTicketDiscount ;
    return totalPrice ;

 }

 else if (ticketBuy >= 320 ) {
    var firstTicketDiscount = 120 * firstTicketPrice ;
    var secondTicketDiscount = 130 * secondTicketPrice ; //250  --> + 50 +  20 --> 320  = 70 * 3rd price //
    var thirdTicketDiscount = 70 * thirdTicketPrice ;
    var lestTicket = ticketBuy - 320 ;
    var forthTicketDiscount = lestTicket * forthTicketPrice ;
    var  totalPrice = firstTicketDiscount + secondTicketDiscount + thirdTicketDiscount + forthTicketDiscount ;
    return totalPrice ;

 } else {
    console.log("Please enter valid number");
 }
}

var ticketBuy = 58 ;
var callTicket = ticketFunction(ticketBuy) ;

console.log("Ticket discount offer :" , callTicket);
