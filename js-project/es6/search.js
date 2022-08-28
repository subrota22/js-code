document.getElementById("search").addEventListener("click" , function() {
const inputValue = document.getElementById("searchValue").value;
const url = "https://jsonplaceholder.typicode.com/albums" ;
fetch(url) 
.then(response => response.json())
.then((data) => {
searchData(data , inputValue) ;
} ) 
.catch(console.error())

function searchData(data , searchValue) {

const filterData = data.filter((d)=> d.userId == searchValue) ;
const getRow = document.getElementById("displayData") ;
getRow.innerHTML = "" ;
for(let getFileterData of filterData) {
    const newRow = document.createElement("tr") ;
    newRow.style.color = "white" ;
    newRow.innerHTML = 
    `
    <td> ${getFileterData.userId} </td>
    <td> ${getFileterData.id} </td>
    <td> ${getFileterData.title} </td>
    ` ;
    getRow.appendChild(newRow) ;

}

 }

})



// //----------->> 
// const products = [
//     {name:"bag" , price:15220} ,
//     {name:"phone" , price:15220} ,
//     {name:"table" , price:15220} ,
//     {name:"pc" , price:15220} 
// ]

// function searchObject  (products , search) {
// const storedata = [] ;
// for(const product of products) {
//     if(product.name.includes(search)) {
//         // console.log(product);
//         storedata.push(product) ;
//     }
// }
// console.log(storedata);
// }

// const callProuduct = searchObject(products , "bag")