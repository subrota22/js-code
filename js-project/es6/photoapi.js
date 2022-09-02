
const loadData = () => {
document.getElementById("loadingData").classList.remove("d-none") ;
const url = "https://jsonplaceholder.typicode.com/photos" ;
fetch(url)
.then(response => response.json()) 
.then(data => displayData (data)) ;
}
loadData() ;
function displayData (datas) {
    searcFunction(datas) ;
    const parentDiv = document.getElementById("galleryDiv") ;
    for(let data of datas) {
        const newDiv = document.createElement("div") ;
        newDiv.classList.add("cardDiv") ;
        parentDiv.appendChild(newDiv) ;
        newDiv.innerHTML = 
 `
  <p>   albumId : ${data.albumId} </p> 
  <p>  Id:${data.id}  <p>
  <p>  Title : ${data.title}  <p>
  <p> Url : <a href="${data.url}"> Photo Link </a>   <p>
   <img src="${data.thumbnailUrl}"/>  <p>
   <button id="moreDetails" data-bs-toggle="modal" data-bs-target="#albumModal" onclick="moreInfo('${data.id}' , '${data.title}' ,  '${data.url}' ,  '${data.thumbnailUrl}' )" > More details </button>
   <br> <br>
        `;
    }
    document.getElementById("loadingData").classList.add("d-none") ;
}


const moreInfo = (albumId , title ,  url ,thumbnailUrl) => {
const titleShow = document.getElementById("title") ;
titleShow.innerHTML = "Album id :" +  albumId ;
const albumBody = document.getElementById("albumBody") ;
albumBody.innerHTML = 
` 
<img src="${thumbnailUrl}"/> 
<p>  Title : ${title}  <p>
<p> Url : <a href="${url}" target="_blank"> Photo Link </a>   <p>
` ;

};

const searcFunction = (getData) => {
    const searchButton = document.getElementById("searchButton") ;
    searchButton.addEventListener("click" , function () {
       const OldDiv = document.getElementById("galleryDiv") ;
        OldDiv.innerHTML = "" ;
    const searchFeild = document.getElementById("searchFeild") ;    
    const searchFeildValue = searchFeild.value ;
    searchFeild.value = "" ;
    const searchInfo = getData.filter(data => data.albumId == searchFeildValue) ;
    const searchDisplay = document.getElementById("searchDisplay") ;
    searchDisplay.innerHTML = "" ;
     searchInfo.map (info =>{
     const displayDiv = document.createElement("div") ;
     displayDiv.classList.add("cardDiv") ;
     displayDiv.innerHTML = `
     <p>   albumId : ${info.albumId} </p> 
     <p>  Id:${info.id}  <p>
     <p>  Title : ${info.title}  <p>
     <p> Url : <a href="${info.url}"> Photo Link </a>   <p>
    <img src="${info.thumbnailUrl}"/>
    <button id="moreDetails" data-bs-toggle="modal" data-bs-target="#searchModal"  onclick="searchMoreInfo( '${info.albumId}' ,  '${info.id}' ,  '${info.url}' , '${info.title}'  , '${info.thumbnailUrl}' )" > More details </button>
    <br> <br>
     `;
     searchDisplay.appendChild(displayDiv) ;
     })
    }) 

};

const searchMoreInfo = (albumId , id , url , title , image ) => {
    const titleShow = document.getElementById("searcTitle") ;
    titleShow.innerHTML = `ID : ${id}`;
    const albumBody = document.getElementById("searchBody") ;
    albumBody.innerHTML = 
    ` 
    <p> Album id : ${albumId} </p>
    <p> imageTitle : ${title} </p>
    <img src="${image}"/>
    <p> Url : <a href="${url}"> Photo Link </a>   <p>
    ` ;
    
    };