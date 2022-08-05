setTimeout(() => {
var  cars = [{
    "Toyta" : "120AB" ,
    "Toyta2" : "120AB" ,
    "Toyta3" : "120AB" ,
    "Honda cars" : {
        "Honda" : "20CC" , 
        "Honda2" : "20CC" , 
        "Honda3" : "20CC" , 
        "Honda4" : "20CC" , 
        "Honda5" : "20CC" , 
        "Honda6" : "20CC" ,
    },
    "Toyta5" : "120AB" ,
    "Toyta6" : "120AB" ,
    "Toyta7" : "120AB" ,
    "Marcity": { 
        "Marcity1" : "52BBA" , 
        "Marcity2" : "52BBA" , 
        "Marcity3" : "52BBA" , 
        "Marcity4" : "52BBA" , 
        "Marcity5" : "52BBA" , 
        "Marcity6" : "52BBA" ,  
        "Marcity7" : "52BBA" 

    } ,
}]
console.log(cars);

}, 2000);

setTimeout(() => {

class student {
constructor(name2 , email , country) {
this.name2 = name2 ;
this.email = email ; 
this.country = country ;
}

} 

var studentInfo = new student("subrota" , "itinfo@gmail.com" , "Bangladesh") ;
var studentName2 = studentInfo.name2 ; 
var studentEmail = studentInfo.email ;
var studentCountry = studentInfo.country ;

console.log(studentName2 + "  " + studentEmail  + "  " + studentCountry);

}, 4000);


setTimeout(() => {
    function Teacher() {
        console.log("I am a teacher");
        }
        
        Teacher() ;
}, 6000);

//------------- object --------------- // 
var mobile = {
    brand : "Lava" ,
    ram : "1GB" , 
    rom : "32GB" ,
    warrenty : "1 Year" ,
    color: "Gold" ,
    display : "450 X 110 " 
}
mobile.ram = "4GB" ;
console.log(mobile);
//----------function
function myExGrilFriend(GF1  , GF2 , GF3 , GF4 ) {
var totalGf =  GF1 +  GF2 +  GF3 +  GF4 ;
return totalGf ;
}
var firstGfName  = "Krishna  " ;
var secondGfName = " Sorsoti  " ;
var thirdGfName = "  Shathi  " ;
var forthGfName  = " Jhori  " ;

var myGf = myExGrilFriend(firstGfName , secondGfName , thirdGfName  ,forthGfName) ;
console.log(myGf);
//--------------function2
function addNumbers ( num1 , num2 , num3 , num4 ) {
    var sum = num1 + num2 + num3 + num4 ;
    var average = sum / 4 ;
    return average ;
}
var numberOne = 57 ;
var numberTwo = 60 ;
var numberThree = 60 ;
var numberFour = 60 ;
var additation = addNumbers(numberOne , numberTwo , numberThree , numberFour );
console.log(additation);
//array -> slice  ,  includes  , substring 
var array = [12,45,78,42] ;
console.log(array);
console.log(array.slice( 0 , 2));

var name = "Krishna is now get into the fat " ;
var subString = name.substring(0,15) ;
console.log(subString);
var checkString = name.includes("Is") ;
console.log(checkString);

var product = {
    fairandlovely: 4 ,
    foogcent : 3 ,
    oil : "2kg" ,
    potato : "5kg" , 
    rice : "12kg" 
}

//-----------
//set than get 
//------------

//set values
product.foogcent = 5 ;
var setRice = "25kg" ;
product.rice = setRice ;
product['potato'] = "10kg" ;
product['fairandlovely'] = 12 ;
//get value and properties 
var getObjectKeys = Object.keys(product) ;
var getObjectValues = Object.values(product) ;
var oil = product['oil'] ;
var getFoogCent = "foogcent" ;
var getFoogCentHere = product[getFoogCent] ;
//maintain the serail when you are search for out put //
console.log(getObjectKeys);
console.log(getObjectValues);
console.log(oil);
console.log(getFoogCentHere);
console.log(product);

//object

var product2 = {
    fairandlovely: 4 ,
    foogcent : 3 ,
    oil : "2kg" ,
    potato : "5kg" , 
    rice : "12kg" 
}
var getProductKeys = Object.keys(product2) ;
var getProductValues = Object.values(product2) ;
for(i=0 ; i < getProductKeys.length ; i++ ) {
    var propertyName = getProductKeys[i] ;
    var propertyValues = getProductValues[i] ;
    console.log("Prouduct values " , propertyValues);
    console.log("Product name " , propertyName); 
}

for(propertyName in product2) {
    var ourValues = product2[propertyName] ;
    console.log("for loop in method " , ourValues);
}

console.log(Object.entries(product2));
