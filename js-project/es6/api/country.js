
const getCountry=  () => {
const url = `https://restcountries.com/v3.1/all` ;
fetch(url)
.then(response => response.json()) 
.then(data => displayCountris(data))
.catch(error => console.log(error)) ;

}

const displayCountris = (data) =>{
const allCountryDisplayDiv = document.getElementById("allCountry")
data.forEach(country => {
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
  <a href="#comeHere">
    <button onclick="getCountryDetails('${country.cca2}')" class="btn btn-outline-primary m-5 w-50"> Country details </button>
 </a>
    </div>
</div>

` ;
allCountryDisplayDiv.appendChild(countryDiv) ;
//onclick if get number ok but if get string then  => onclick="getCountryDetails('${country.cca2}')" <=
});


}
const getCountryDetails= (countryCode) => {
const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
fetch(url) 
.then(response => response.json())
.then(data =>getDynamicCountryInfo(data)) 
.catch(error => console.log(error)) ;
} 

const getDynamicCountryInfo = (data) => {
const singaleCountryInfo = document.getElementById("singaleCountryInfo") ;
singaleCountryInfo.innerHTML = "" ;
data.forEach(countryInfo => {
  const singaleCountryInfoDiv = document.createElement("div") ;
  singaleCountryInfoDiv.innerHTML = 
  `
<br>

<div class="cardDivStyle2" id="comeHere">
<img src="${countryInfo.flags.png}" class="singaleImage"/>
<h5 class="card-title">Country name : ${countryInfo.name.common}</h5>
<p class="card-text">Official name : ${countryInfo.name.official}</p> 
<p class="card-text">Country capital : ${countryInfo.capital }</p> 
<a href="${countryInfo.maps.googleMaps }" class="text-center fs-4 fw-bold text-decoration-none text-white" target="_blank">
 Country map  click here
 </a> 
</div>
  `;
  singaleCountryInfo.appendChild(singaleCountryInfoDiv) ;
  console.log(countryInfo.maps.googleMaps);
});
}
getCountry() ;