const myArrowFunction = (friendsName) =>{
    let dataStore = friendsName[0]; //take array with 0 index
    for(let i=0;i<friendsName.length;i++) {
        const element = friendsName[i] ;
        if( element.length > dataStore.length ) { //check length to get heighest number
            dataStore = element ; //just asign the value
            if( (dataStore.length%2===0 ) ) { //reminder with array name length 
                    console.log(dataStore.length , "Even name : " , element);
            }
        }
    }
    console.log("Heighest name => " , dataStore);
}

const friends = ['diposh chandra' , 'utfol' , 'shovo' , 'roni' , 'rasel' , 'rani' , 'bappi sarker' , 'subrota chandra sarker'] ;

myArrowFunction(friends) ; //arguments

//array declare 
const [num1 , num2 , num3 , num4 , num5 , num6 , num7 ] = [12,45,40,87,56,21,25] ;
console.log("Last array variable => " , num7);
const reciveArray = [12,45,40,87,56,21,25]  ;
const maxNumber = Math.max(...reciveArray) ;
console.log("Max number of array => " , maxNumber);
console.log(Array.isArray(reciveArray));
//object declare
let { name , age , height , favourite  } = {
  name:"subrota " , age : "21" , height:"5" , favourite:{
  first1 : "sex" , second1 : "programming"
  }  ,
  name:"subrota2" , age : "25" , height:"5" , 
} 

const singreName =name ;
console.log(singreName);

//arrow 
const arrowFunc = (num1 , num2 ) => console.log("Multiplay" , num1*num2);

arrowFunc(12,52) ;
//----------------> <------------------//
const phones =
[
    
{
    color:"silver" , ram : "4GB" , rom:"18GB" , brand:"Apple" , price:5000 , 
} ,
{
    color:"silver" , ram : "2GB" , rom:"18GB" , brand:"Vivo" ,price:1500 , 
} ,

{
    color:"silver" , ram : "14GB" , rom:"18GB" , brand:"Sumsung" ,price:350 , 
} ,
{
    color:"silver" , ram : "24GB" , rom:"18GB" , brand:"Walton" ,price:1300 , 
} ,
{
    color:"silver" , ram : "12GB" , rom:"18GB" , brand:"Galaxy" , price:10000 , 
} ,

]



let callfunction = recivePhone(phones) ;

console.log(callfunction );


function recivePhone(phones) {
    let storePhone = phones[0] ; //let can update 
    for(let phone of phones) {
       if(phone.price  > storePhone.price) {
        return phone;
       }
    }
    }
//-------------> max number 
    const arrowNumbers = (reciveArray) => {
     let storeNumbers = reciveArray[0] ;
     for(let reciveNumber of reciveArray) {
        if(reciveNumber > storeNumbers) {
            storeNumbers = reciveNumber ;
        }
     }
     return storeNumbers;
    }

const arrayOfNumbers = [45,78,45,64,58,50] ;
const seconeArray = arrayOfNumbers ;
const callArrowNumbers = arrowNumbers(seconeArray) ;
console.log("Max array numbers by arrow function => "  , callArrowNumbers);

//--------------> avarage of number ------------->

const numbersOfArray2  = [48,87,45,25,45,84,54,54,87,21] ;

const  reciveArrayNumber2 = (numbersOfArray2) => {

 for(let numbersOfArray of numbersOfArray2) {
    const lengthOfNumbers = numbersOfArray2.length ;
     const squareNumber = Math.pow(numbersOfArray , 2) ;
     const avg = squareNumber / lengthOfNumbers ;
     return avg ;
 }

}
let callfunction2 = reciveArrayNumber2(numbersOfArray2) ;

console.log(">----->----->----->>" , callfunction2);
//--> use of caret 
const threeSentance = 
`I am a web developer 
 I love to code 
 I love biryani` ;
 console.log(threeSentance);

//---------> use of by defualt nubers 
const reciveArrayNumber20 = (numberOne, numberTwo=80) => {
const addNumbers = numberOne + numberTwo ;
return addNumbers ;
}

const numberOne = 50 ;
const callArrayFun = reciveArrayNumber20(numberOne) ;
console.log("By default numers additation : >----->---->>" , callArrayFun);
