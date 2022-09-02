let allData = [] ;

//get api
const loadData = async (search) => {
try {
spinnerLoading(true) ;
const url =  `https://openapi.programming-hero.com/api/phones?search=${search}` ;
const response = await fetch(url) ;
const data =await response.json() ;
allData = data.data ; //all data store
dataLimitationCheck(6);
productNotFoundMessageShow(data.data) ;
} catch (error) {
alert("You have an error");
}
}
//    >>---------------->>----------->> data limitaion check of api <<----------------<<-------------<<  //
const dataLimitationCheck = (limit) => {

if(limit) {
displayData(allData.slice(0 , limit)) ;
}
else{
    displayData(allData) ;
}
}
//    >>---------------->>----------->> data limitaion check of api end <<----------------<<-------------<<  //
//display data
const displayData = (getData) => {
const displayPhones = document.getElementById("displayPhonesData");
displayPhones.innerHTML = "" ;
//show all button div
const buttonDiv = document.getElementById("showAll") ;
if(getData.length === 6 ) {
    buttonDiv.classList.remove("d-none") ;
}else{
    buttonDiv.classList.add("d-none") ;  
}
//show all button div end
getData.filter(phone => {
const phoneDiv = document.createElement("div") ;
phoneDiv.classList.add("col") ;
phoneDiv.innerHTML = 
`
<div class="card">
  <img src="${phone.image}" class="card-img-top" alt="product image"/>
  <div class="card-body cardBackColor">
    <h5 class="card-title text-white">Brand:${phone.brand}</h5>
    <p class="card-text text-white">Phone name:${phone.phone_name}</p>
    <p class="card-text text-white">Slug:${phone.slug}</p>
    <button onclick="displayMorePhoeDetailsId('${phone.slug}')" class="btn btn-outline-primary w-50" data-bs-toggle="modal" data-bs-target="#phoeDetails"> More Details</button>
  </div>
</div>
` ;
displayPhones.appendChild(phoneDiv) ;
    }) 
spinnerLoading(false) ;
productNotFoundMessageShow(false) ;
}
//  >>------->>-------->> search product  <<----------<<-------<<
const searcInputValue = () => {      
const searchValue  = document.getElementById("searchValue") ;
searchValue.addEventListener("keyup" , function(event){
const searchString = (event.target.value) ;
loadData(searchString ) ;
})

}
searcInputValue() ;
//end
const spinnerLoading = (isLoading) =>{
 const spinner = document.getElementById("spinnerLoading") ;
 if(isLoading==true) {
    spinner.classList.remove("d-none") ;
 }else{
    spinner.classList.add("d-none")
 }
}

//product not found
const productNotFoundMessageShow = (checkProduct) =>{
const productEmpty = document.getElementById("notFoundProductMessage") ;
if(checkProduct.length==0) {
    productEmpty.classList.remove("d-none") ;
}else{
    productEmpty.classList.add("d-none") ;
}
}

//display dynamic data one by one by click on button

const displayMorePhoeDetailsId  = async (productId) => {
const url = `https://openapi.programming-hero.com/api/phone/${productId}` ;
const response = await fetch(url) ;
const data = await response.json() ;
displayMorePhoeDetails(data.data) ;

}
const displayMorePhoeDetails = (getPhoneInfo) => {
    const productTitleGet = document.getElementById("productTitle") ;
    productTitleGet.innerHTML = getPhoneInfo.brand ;
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = 
`
<img src="${getPhoneInfo.image}" class="card-img-top2" alt="product image"/>
 <p class="fs-5 fw-bold"> Display size : ${getPhoneInfo.mainFeatures. displaySize }  </p> 
 <p class="fs-5 fw-bold"> Storage : ${getPhoneInfo.mainFeatures. storage }  </p> 
 <p class="fs-5 fw-bold"> Memory : ${getPhoneInfo.mainFeatures.memory} </p> 
 <p class="fs-5 fw-bold"> Sensor : ${ getPhoneInfo.mainFeatures.sensors[0]} </p> 
 <p class="fs-5 fw-bold"> Chip set: ${ getPhoneInfo.mainFeatures.chipSet } </p> 

    ` ;
}

//show all button

const showAllButtonGet = document.getElementById("showAllButton") ;
showAllButtonGet.addEventListener("click" , function() {
    dataLimitationCheck() ; //empty that means show all data//
})

//search value 
document.getElementById("searchButton").addEventListener("click" , function() {
const inputValue = document.getElementById("searchValue") ;
const inputValueString = inputValue.value ;
const alertMessage = document.getElementById("emptyMessage") ;
if(inputValueString=="") {
alertMessage.classList.remove("d-none") ;
}else{
    alertMessage.classList.add("d-none") ;
}
})

