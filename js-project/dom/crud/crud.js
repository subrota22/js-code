var count = 0;
document.querySelector("#submit").addEventListener("click" , function() {
 //------------------ insert ---------------------//
   const name = document.querySelector("#name").value ;
   const email = document.querySelector("#email").value ;
   const proffestion = document.querySelector("#proffestion").value ;
   const gender = document.querySelector("#gender").value ;
   count ++ ;
//set data 
const setData = document.querySelector("#setData") ;
const tr = document.createElement("tr") ;
const cellc = document.createElement("td") ;
const cell = document.createElement("td") ;
const cell2 = document.createElement("td") ;
const cell3= document.createElement("td") ;
const cell4 = document.createElement("td") ;
const cell5 = document.createElement("td") ;
const cell6 = document.createElement("td") ;
cellc.innerHTML = count;
cell.innerHTML =name;
cell2.innerHTML = email;
cell3.innerHTML = proffestion ;
cell4.innerHTML = gender ;
cell5.innerHTML ="<i class='fas fa-edit text-info'></i>" ;
cell6.innerHTML ="<i class='fas fa-trash text-danger'></i> " ;
tr.appendChild(cellc) ;
tr.appendChild(cell) ;
tr.appendChild(cell2) ;
tr.appendChild(cell3) ;
tr.appendChild(cell4) ;
tr.appendChild(cell5) ;
tr.appendChild(cell6) ;
setData.appendChild(tr) ;

//---------------- delete --------------------//
cell6.addEventListener("click" , function() {
    cell6.parentNode.replaceChildren() ;
})
//---------------- edit --------------------//

cell5.addEventListener("click" , function() {
   cell5.parentNode.style.background ="lime" ;
})
//-------------->
document.querySelector(".clear").addEventListener("click" , function() {
    const setData = document.querySelector("#setData") ;
    setData.replaceChildren() ;
})
 })
