
var fabonacci = [0 , 1 , 2, 3 , 5] ;
for(var i=2 ; i<=25; i++) //start with = 2 
{
    fabonacci[i]= fabonacci[i-1] + fabonacci[i-2] ;//10 = 9-1 + 8-2  
}

console.log(fabonacci);

var fabonacci2= [0,1 , 2 , 3 , 5 , 8 ] ;
for(var i = 25 ; i>=2 ; --i ) {
    fabonacci2[i] = fabonacci[i-1] + fabonacci[i-2] ;
    // console.log(fabonacci2[i]);
}
console.log("Fabonacci " , fabonacci2);

//join , spilit 
var behave = ["I am not at all a good boy"] ;
var hiJoin = behave.join("") ; //join return array as a string 
var spilit2 = behave.splice(" ") ; // At position remove items: 
console.log( behave ,  hiJoin  , spilit2);
//username check 
var user= "subrota" ;
var user2 = "SuBroTa" ;
var userLowerCase = user.toUpperCase() ;
var user2LowerCase = user2.toUpperCase() ;//only string is allowed to up or low case
if(userLowerCase ==user2LowerCase) {
    console.log("Your username is right");
}else{
    console.log("Your wrong user");
}
//file check
var file = "algo.js" ;
var checkFile = file.endsWith(".js") ;
var checkFile2 = file.startsWith("algo"); 
console.log(checkFile , checkFile2) ;

var num1=1  , num2=2 , totalNum ;

for(var i=2 ; i<25 ; i++) {
    totalNum = num1 + num2 ;
    num1 = num2 ;
    num2 = totalNum ;

    console.log(num1) ;
}

var myNumber = 20 ;
var yourNumber = 54 ;

var ourFriend = myNumber ;
myNumber = yourNumber ;
yourNumber = ourFriend ;
console.log(myNumber , yourNumber);