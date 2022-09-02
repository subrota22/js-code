document.getElementById("loading").display="none" ;
const getCountry=  () => {
  document.getElementById("loading").display="block" ;
const url = `https://restcountries.com/v3.1/all` ;
fetch(url)
.then(response => response.json()) 
.then(data => displayCountris(data))
.catch(error => console.log(error)) ;
}

const displayCountris = (data) =>{
document.getElementById("loading").style.display="none" ;
const sliceData  = data.slice(0,80);
const allCountryDisplayDiv = document.getElementById("allCountry")
sliceData.forEach(country => {
// console.log(country.name);
const  countryDiv  = document.createElement("div") ;
countryDiv.classList.add("col") ;
countryDiv.innerHTML = 
`
<div class="cardDivStyle">
<img src="${country.flags.svg}" class="card-img-top" alt="country info">
<div class="card-body">
  <h5 class="card-title">Country name : ${country.name.common}</h5>
  <p class="card-text">Official name : ${country.name.official}</p> 
  <p class="card-text">Country capital : ${country.capital }</p> 
  <button   class="btn btn-primary" onclick="getCountryDetails('${country.cca2}')"  data-bs-toggle="modal" data-bs-target="#exampleModal"> Country details </button>
    </div>
</div>

` ;
allCountryDisplayDiv.appendChild(countryDiv) ;
//onclick if get number ok but if get string then  -----=> onclick="getCountryDetails('${country.cca2}')" <=-----
});


}
const getCountryDetails= (countryCode) => {
  document.getElementById("loading").display="block" ;
const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
fetch(url) 
.then(response => response.json())
.then(data =>getDynamicCountryInfo(data))
.catch(error => console.log(error)) ; 
} 

const getDynamicCountryInfo = (data) => {
  document.getElementById("loading").display="none" ;
// console.log(data);
const singaleCountryInfo = document.getElementById("modal-body") ;
singaleCountryInfo.innerHTML = "" ;
data.forEach(countryInfo => {
  const singaleCountryInfoDiv = document.createElement("div") ;
  singaleCountryInfoDiv.innerHTML = 
  `
  <img src="${countryInfo.flags.svg}"  class="card-img-top2" alt="country info">
  <h2>Country name : ${countryInfo.name.common } </h2>
  <p> Capital : ${countryInfo.capital } </p>
  <p> Country code : ${countryInfo.cca2 } </p>
  <p>Official name : ${countryInfo.name.official } </p>
 <a href="${countryInfo.maps.googleMaps}" target="_blank"> Get country map </a>
  `;
  singaleCountryInfo.appendChild(singaleCountryInfoDiv) ;
  // console.log(countryInfo.maps.googleMaps);
});
}
getCountry() ;