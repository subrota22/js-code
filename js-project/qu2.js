
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

// const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// console.log(stuInfo.name);

// fetch('https://jsonplaceholder.typicode.com/todo/1') 
// .then(response => response.json() )
// .then(json => console.log(json))


// const person = [
//     {
//       name: "rahim",
//       age: 22,
//       friends: ["rahim,karim,jabbar"],
//     },
//     {
//       name: "rahim2",
//       age: 22,
//       friends: ["rahim,karim,jabbar"],
//     },
//     {
//     name: "rahim3",
//     age: 22,
//     friends: ["rahim,karim,jabbar"],
//   },
//   ];
//   console.log(person.slice(1 , 2));


//   const dreamGirl =
  
//   [
//     {
//       sokina: {
//         name: "bbu",
//         height: "5.4",
//         family: [{ father: "rock", mother: "shila", sister: "chinki" }],
//         age: undefined,
//         contactInfo: [
//           {
//             facebook: {
//               link: "https://www.facebook.com/",
//               followers: "12545",
//               status: "single",
//               friendsList: [{ name: "rofik" }, undefined],
//             },
//           },
//           { instagram: "https://www.instagram.com/" },
//         ],
//       },
//     },
//   ];
//   console.log(dreamGirl[0].sokina.contactInfo[1].instagram );

//   const phones = [
//     { name: "sonyapu", price: 500 },
//     { name: "apple", price: 700 },
//     { name: "sony", price: 700 },
//   ]; 
//  const phPrice = phones.filter(phone => {
//         if(   phone.price!=500  ) {

//             console.log(phone.name);
//         }
// } )
// const name =[
//     {
//         studetn:{
//             nameOfStudent:{
//                 first:21 ,
//                 second:58 ,
//                 third:45 ,
//                 age:{
//                     first:21 ,
//                     second:58 ,
//                     third:45 ,
//                     schoolName:{
//                         first:21 ,
//                         second:58 ,
//                         third:45 , 
//                     }
//                 }
//             }
//         } 
//     }
// ]

// console.log(phPrice);

// const nayoks = {name: "hero", age:"28", isMarried: false};
// console.log(Object.entries(nayoks) );
// for(let nayok in nayoks) {
//     console.log(nayok);
// }
// const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);
// //
// const obj1= {module: 35, video:2}; 
// const obj2= {module: 35, video:2};
// console.log(obj1 === obj2); //cause store data different computer memory location

// const getGirlFriend= (name = "chokina")=>"name";
//  console.log(getGirlFriend()); 

//----------------- calculate the oil price start ----------------------//
function oilPrice(diselRequire , petrolRequire , octaneRequire) {
    if(typeof diselRequire ==="number" && typeof petrolRequire ==="number" && typeof octaneRequire === "number") {
    //--------------- Oil price -------------//
    const diselPrice = 114 ;
    const petrolPrice = 130 ;
    const octanePrice =135 ;
    //--------------- Oil price end -------------//
    const diselTotalPrice = diselRequire * diselPrice ;
    const petrolTotalPrice = petrolRequire * petrolPrice ;
    const octaneTotalPrice = octaneRequire * octanePrice ;
    const totalPriceOfOil = diselTotalPrice + petrolTotalPrice + octaneTotalPrice ;
    return totalPriceOfOil ;
    } else{
    console.log("Please input valid numbers of oil ");
    }
    }
    //variable to use parameter of function
    let diselRequire = 30 ;
    let petrolRequire = 20 ;
    let octaneRequire = 10;
    //call the oilPrice function
    const callOilPriceFunction = oilPrice(diselRequire , petrolRequire , octaneRequire) ;
    console.log(callOilPriceFunction);
    //----------------- calculate the oil price end --------------//