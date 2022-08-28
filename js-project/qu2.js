
// // const numbers2 = [45, 12, 36, 84]
// // numbers2.unshift(25) ;
// // console.log(numbers2);

// // function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));


// // const y = x => x*x; 

// // const z = y(5); 

// // console.log(z);

// // const nayok = () => console.log("Sakib khan");
// // nayok() ;

// // const division = (num1, num2 ) => console.log(num1 /num2);
// // division(120, 25)
// // const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
// // const array2 = [...nayikas] ;
// // // [...nayikas , "porimoni" , "sabana"] ;
// // console.log(array2);

// // const numbers=[10,20,30,40 , 50 , 60  ,70];
// // const maxNumbers = [...numbers] ;
// // const setMaxNumbers = Math.max(...maxNumbers) ;
// // console.log(setMaxNumbers);

// // const cars=['toyota', 'honda','mercedes']; 
// // const newCars= [...cars , 'ferrari']; 
// // console.log(newCars);




// function min(nums) { 
//     return Math.min(nums) 
//     }
//     console.log(min( [1,3,2 ]))

// const cube=x=> x*x*x; // 2 X 2 x 2 = 8
// console.log(cube(2)) 

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};

// console.log(y);

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

// const fr = friends.find(friend => friend.length ==5) ;
// console.log(fr);

// const productget = {
//     name: 'Laptop', 
//     model:'Yoga 3',
//     price:49000, 
//     dusk: '512SSD'
//     }
// const {...prices} =  productget ;
// const { price } =  productget ;
// console.log("-->--->-->" , prices , price);

// class Person {
// constructor(name , email ) {
//     this.name = name ;
//     this.email = email ;
// }
// }
// const student = new Person("subrota" , "subrota@gmail.com") ;
// const namecatch  = student.name ;
// const emailcatch = student.email ;
// console.log(namecatch , emailcatch);


// fetch('https://jsonplaceholder.typicode.com/todo/1') 
// .then(response => response.json())
// .then(data => console.log(data))

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);

fetch('https://jsonplaceholder.typicode.com/todo/1') 
.then(response => response.json() )
.then(json => console.log(json))