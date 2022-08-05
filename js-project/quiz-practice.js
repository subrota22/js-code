// var i = 0;
// for (i=0; i<5; i++){};
// console.log(i);

// var marks = [ 13, 15, 14, 20, 18];
// for(var i=0; i<marks.length; i++){
//     if(marks[i] >= 15){ //15 gettar less than >= gettar than 13 or 14
//     continue;
//     }
//     console.log(marks[i]);
// };

// for(var m=0 ; m<10; m++){
//     console.log("boos");
// }
// var name = "false" ;
// console.log(typeof name);

// var i = 5;
// for (; i < 5; i++) {
//   console.log(i);
// }

// var i = 5;
// for (i < 5; i++) {
//   console.log(i);
// }

// var me = {age:31 , hari: 'brown'} ;
// console.log(me);

// var movie = {name: "Din- The Day"};
// movie.name = "Hawa" ;
// console.log(movie);

// var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
// var nums2 = nums.indexOf(6) ;
// console.log(nums2);

// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone.brand);

// function  add(num1, num2){ }

// function movie(){
//     return "Din-The day";
//     return "Poran";
//     return "Hawa";
//   }
//   console.log(movie());

// function inchToFeet(inch){ 
//   var feet = inch/12; 
//     return feet; 
// }
// var feet= inchToFeet(72) ;

// console.log(feet);
// var sum = 1 ;
// for(var i=1 ; i<=6 ; i++ ) {
//   console.log(i);
//   sum = sum * i ;
// }
// for(let i = 0; i<=10; i++){ 
// console.log(i);
// }
// for( let i = 10; i >= 1 ; i--){ 
// console.log(i);
// }



function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
let n = 6;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);

