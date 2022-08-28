
const url = "https://jsonplaceholder.typicode.com/albums" ;
fetch(url) 
.then(response => response.json())
.then(data => stringifyData(data) ) 
.catch(console.error())

function stringifyData(datas) {
    const array = [];
    // >>-------->>
    for(let data of datas) {
    const stringifyInfo = data;
    array.push(stringifyInfo) ;
    }
//<<-----<<
    let serial = 0 ;
    array.find((info) => {
    const setRow = document.getElementById("rowInfo") ;
    const newRow = document.createElement("tr") ;
    newRow.classList.add("backColor") ;
    setRow.appendChild(newRow)
    serial++;
    newRow.innerHTML = 
  `
    <td>    ${serial}  </td>
    <td>    ${info.userId}  </td>
    <td>    ${info.id}  </td>
    <td>    ${info.title}  </td>
     `;
    }) 
//---------------------->>
}

