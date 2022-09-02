//  >>---------->>--------->> first task <<-----------<<------------<< //
const studentDetails = {
    StudentInfo:{
        name:"subrota" ,
        isMale:true ,
        age : 21 ,
        ssc:4.06 ,
        hsc:4.08 ,
        interest:['programming' , 'problem solving' , 'math' , 'search for new knowladge'] ,
        qualification: function () { //we should use normal  function to access property value in object//
         return   `SSC : ${this.ssc}  HSC : ${this.hsc}`;
        }  ,
        bio:{
            nationality:"Bangladeshi" ,
            religion: "Hindu" ,
            state:"Rajshahi , Joypurhat" ,
            profile:"https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters:no_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg" ,
            website:"http://subrotachandra.lovestoblog.com/login.html" ,
            youTube:"https://www.youtube.com/channel/UC6EXps0XcZ8e5kEvtQzU-VQ" ,
            addressMap:"https://goo.gl/maps/H69Bc1kqcoLWcQSK7" ,
        }

    }
}
console.log(studentDetails);
console.log(studentDetails.StudentInfo.qualification());
//  >>---------->>--------->> first task end <<-----------<<------------<< //

//  >>---------->>--------->> second task start <<-----------<<------------<< //

const showObjectDetails = 
`
Interest : ${studentDetails.StudentInfo.interest[2]}
Profile: ${studentDetails.StudentInfo.bio.profile}
website: ${studentDetails.StudentInfo.bio.website} 
` ;

console.log(showObjectDetails);
//  >>---------->>--------->> second task end <<-----------<<------------<< //


//  >>---------->>--------->> third task start <<-----------<<------------<< //

const arrowFunction = () => {
    return 89 ;
}
console.log(arrowFunction() );

//  >>---------->>--------->> third task end <<-----------<<------------<< //

//  >>---------->>--------->> forth task start <<-----------<<------------<< //
const arrowFunction2 = (number) => {
    return number/17 ;
}
console.log(arrowFunction2(8000).toFixed(1) );
//  >>---------->>--------->> forth task end <<-----------<<------------<< //


//  >>---------->>--------->> forth task start <<-----------<<------------<< //
const arrowFunction3 = (number1 , number2) =>  {
    //number1 + number2 % 2 === 0 ? true : false
const add =  number1 + number2  ;
if(add %2 ===0) {
    return true ;
}else{
    return false ;
}
} ;
console.log(arrowFunction3( 5 , 7) );
//task awsome
const arrowFunction4 = (number1 , number2) =>  ( (number1 + number2) % 2 === 0 ? true : false) ;

console.log(arrowFunction4( 5 , 7) );
//  >>---------->>--------->> forth task end <<-----------<<------------<< //


//  >>---------->>--------->> fifth task start <<-----------<<------------<< //
const arrowFunction5= (arrayNumbers) =>  {
let sum = 0 ;
arrayNumbers.filter(number => {
 sum += number ;
})
const square = Math.pow(sum , 2) ;
return square ;
} ;
const array = [10,25,54,12,30,12,8] ;
console.log(arrowFunction5(array) );

//  >>---------->>--------->> fifth task end <<-----------<<------------<< //

//  >>---------->>--------->> sixth task start <<-----------<<------------<< //
const mapFunction = (numbers) => {
let storeNumbers = [ ] ;
numbers.map(numberGet => {
   const divideNumbers = numberGet / 7 ;
   storeNumbers.push(divideNumbers.toFixed(1)) ;
})
return storeNumbers ;
}

const arrayOfNumber  = [ 12 , 41 , 54, 20, 35, 65] ;
const showMap = mapFunction(arrayOfNumber) ;
console.log(showMap);

//  >>---------->>--------->> sixth task end <<-----------<<------------<< //


//  >>---------->>--------->> task number saven  <<-----------<<------------<< //
/**
 * different between => forEach , map , find , filter , reduce 
 * forEach => 
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements. 
// //return all  element
 * map => 
 Definition and Usage. map() creates a new array from calling a function for every array element. 
 map() calls a function once for each element in an array. 
 map() does not execute the function for empty elements. 
 map() does not change the original array.
 //return all search able element
 * find =>
The find() method returns the value of the first element that passes a test. 
The find() method executes a function for each array element. 
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
//return only search able element
 * filter =>
The filter() method creates a new array filled with elements that pass a test provided by a function. 
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.

//return all search able element
*reduce =>
The reduce() method executes a reducer function for array element. 
The reduce() method returns a single value: the function's accumulated result. 
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
//return element off array by two parameters with function
*/

let numbers = [1, 2, 3];
let sum = numbers.reduce( (previousValue, currentValue) => {
    return previousValue + currentValue;
});

console.log(sum);

//  >>---------->>--------->> task number eight  <<-----------<<------------<< //

let  {bio , ...allInfo } = studentDetails.StudentInfo ;
console.log(">>------>>" , allInfo);

//...allInfo => console.log will be only => allInfo 
const madamInfo = 
    {
        name: "samia" ,
        age : 35 , 
        salary:35000 ,
    }

const {name , ...madam } =  madamInfo ;
console.log(madam ,name  );

//destructuring 
const Teacher = {
    name  : "Mozzem " , 
    age : 60 , 
    pention:5000 ,
    classTake : {
        nineToTen : "Biology" ,
    }
} 
//class and name avoid to use 
const {pention  ,  classTake , ...restData  } = Teacher ;
console.log("----> REST DATA ----> " , restData , classTake.nineToTen);