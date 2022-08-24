// // var i = 0;
// // for (i=0; i<5; i++){};
// // console.log(i);

// // var marks = [ 13, 15, 14, 20, 18];
// // for(var i=0; i<marks.length; i++){
// //     if(marks[i] >= 15){ //15 gettar less than >= gettar than 13 or 14
// //     continue;
// //     }
// //     console.log(marks[i]);
// // };

// // for(var m=0 ; m<10; m++){
// //     console.log("boos");
// // }
// // var name = "false" ;
// // console.log(typeof name);

// // var i = 5;
// // for (; i < 5; i++) {
// //   console.log(i);
// // }

// // var i = 5;
// // for (i < 5; i++) {
// //   console.log(i);
// // }

// // var me = {age:31 , hari: 'brown'} ;
// // console.log(me);

// // var movie = {name: "Din- The Day"};
// // movie.name = "Hawa" ;
// // console.log(movie);

// // var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
// // var nums2 = nums.indexOf(6) ;
// // console.log(nums2);

// // var smartphone = { brand: "iPhone", model: "13" };
// // console.log(smartphone.brand);

// // function  add(num1, num2){ }

// // function movie(){
// //     return "Din-The day";
// //     return "Poran";
// //     return "Hawa";
// //   }
// //   console.log(movie());

// // function inchToFeet(inch){ 
// //   var feet = inch/12; 
// //     return feet; 
// // }
// // var feet= inchToFeet(72) ;

// // console.log(feet);
// // var sum = 1 ;
// // for(var i=1 ; i<=6 ; i++ ) {
// //   console.log(i);
// //   sum = sum * i ;
// // }
// // for(let i = 0; i<=10; i++){ 
// // console.log(i);
// // }
// // for( let i = 10; i >= 1 ; i--){ 
// // console.log(i);
// // }



// function factorial(n){
//   let answer = 1;
//   if (n == 0 || n == 1){
//     return answer;
//   }else{
//     for(var i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }  
// }
// let n = 6;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// var random = Math.round( Math.random() * 10)  ;
// console.log(random);
// var total = 0 ;
// //---total += 20 ;
// console.log(total);
// //
// var a = 5; var b = 8; var c = 4; var d = 6; var highest =Math.max(a, b, c, d);
// console.log(highest) ;

// console.log( Math.floor( 13.67) );

// const number = -78; 
// const answer = Math.abs(number); 
// console.log(answer);
// const a = 20 ;
// a+= 50 ;
// console.log(a) ; error

// var a=2; var b=3;
//  if(a < b){
//   console.log("Hello");
// } ;
// console.log(Math.floor(12.96 ) );

// function add(a, b){ 
//   return a + b;
// };

// let addNum = add(20,25) ;
// console.log(addNum);
// var  i=20 ;
// if(i!=5) {
// console.log("Ok ");
// }
// for(let i=0 ; i<=5 ; i++) {}

// var x= 10 ;
// var y=20 ;
// console.log(Math.min(x , y));


// let sum=0; 
// for( let i = 0; i<=3;i++){ 
//   console.log(i);
// sum = sum + i; 
// }
// console.log(sum);

// const myString = "hello bayby" ;
// var lent = myString.length ;
// console.log(lent);


// var student = { name : "Yo Mama", age : 17 };

// var std =delete student.age  ;
// console.log(student );

// var lastArray = [12,45,78,20,35] ;
// var lengthOfArray = lastArray.length ;
// lastArray[lengthOfArray-1] =  5 ;

// console.log(lastArray);


// const nayoks=["Bangla Bhai", "English Bhai","Korean Bhai " , "Turkish Bhai "]  ;
// for(const nayok of nayoks ) {
//   console.log(nayok);
// }

// let count = 0;console.log(parseInt("count" + 1));

// console.log(
//   Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9));


// function generatePin(){ 
//   return Math.floor(Math.random()*90000) + 10000; 
// }

// console.log(generatePin());

// console.log(!isNaN("10X"));

// const product = 5; const price = "7"; 
// const subTotal = product * price; 
// const tax = subTotal/10; 
// const total = subTotal + tax; 
// console.log(total);

// const category="pen"; 
// const performer = category+"-teller";

// console.log(performer);

// const numbers = [45, 12, 36, 84]
// numbers.unshift(25) ;
// console.log(numbers);

// function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));

const y = x => x*x; const z = y(5); 