
const numbers2 = [45, 12, 36, 84]
numbers2.unshift(25) ;
console.log(numbers2);

function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));


const y = x => x*x; 

const z = y(5); 

console.log(z);

const nayok = () => console.log("Sakib khan");
nayok() ;

const division = (num1, num2 ) => console.log(num1 /num2);
division(120, 25)
const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2 = [...nayikas] ;
// [...nayikas , "porimoni" , "sabana"] ;
console.log(array2);

const numbers=[10,20,30,40 , 50 , 60  ,70];
const maxNumbers = [...numbers] ;
const setMaxNumbers = Math.max(...maxNumbers) ;
console.log(setMaxNumbers);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars);

