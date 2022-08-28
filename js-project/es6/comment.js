
const url = "https://jsonplaceholder.typicode.com/comments" ;
fetch(url)
.then(response => response.json()) 
.then((data) => {
document.getElementById("searchValue").addEventListener("keyup" , function(event){
const inputValue = event.target.value ;
searchData(data , inputValue) ; 
})

}) 
.catch(console.error()) ;

function searchData (data, inputValue ){
    let serail = 0 ;
    const filterData = data.filter((displayData) => displayData.postId  == inputValue ) ; //search api with filter
    const getRow = document.getElementById("getRow") ;
    getRow.innerText = "" ;
    for(let getFilterData of filterData) {
        serail ++ ;
        const newRow = document.createElement("tr") ;
        newRow.style.color = "white" ;
        console.log(getFilterData.it);
        newRow.innerHTML = 
        `
        <td> ${serail} </td>
        <td> ${getFilterData?.postId} </td>
        <td> ${ getFilterData?.it ?  getFilterData?.it  : "5"  } </td>
        <td> ${getFilterData?.name} </td>
        <td> ${getFilterData?.email} </td>
        <td> ${getFilterData?.body} </td>
        `;
        getRow.appendChild(newRow) ;
    }
}

