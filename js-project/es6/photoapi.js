
const url = "https://jsonplaceholder.typicode.com/photos" ;
fetch(url)
.then(response => response.json()) 
.then(data => getData(data)) ;

function getData (datas) {
    const parentDiv = document.getElementById("galleryDiv") ;
    for(let data of datas) {
        console.log(data);
        const newDiv = document.createElement("div") ;
        parentDiv.appendChild(newDiv) ;
        newDiv.innerHTML = 
        `
    Url : ${data.url} <br>
   <img src="${data.thumbnailUrl}"/>
        `

    }
}
const stringify = JSON.stringify(url) ;
console.log(stringify);

