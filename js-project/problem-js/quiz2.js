
// function compare(a, b) {
//     if (a == b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
//    const result = compare(15, "15");
//    console.log(result);

//    function compare2(a, b) {
//     if (a.toString() === b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
//    const result2 = compare2(25, 25);
//    console.log(result2);

//    console.log("123" + 123);

// let a= "hi" ;
// let b="there" ;
//  console.log(a+b)

//  for(let i=5 ; i<=100 ; i++) {
//     console.log(i);
//  }
//  console.log(0/0);

//  if(2<5) {
// var name = "hello"
//  }

// const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`;
// console.log(bondCode);

// const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
// const getData2 = data.result[0].userName.name ;
// console.log(getData2); 

// const p=[1,2,3];
// const q = p.map( n=> Math.pow(n, 3))  ;
// console.log(q);

// const food = "fish" ;
// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s='${food}'` ;
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))
// const url = `https://www.themealdb.com/api/json/v1/1/search.php?122` ;
// fetch(url)
//  .then(res=>res.json())
//  .then(data => console.log(data))
//  .catch(error => console.log(error)) ;

//  const array = { hobbies: ["dancing", "singing", "acting"] };
//  const stringify2 = JSON.stringify(array) ;
//  console.log(stringify2);

 const path = "https://www.images.com/cat.jpg"; 
 const getCat = document.getElementById("getCat") ;
const div= document.createElement('div');
div.innerHTML = `<img src="${path}" alt = "">`;
getCat.appendChild(div) ;