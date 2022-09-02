document.getElementById("loading").style.display ="none" ;
document.getElementById("errorMessage").style.display="none"; 
document.getElementById("emptyMessage").style.display="none"; 
const loadData = () => {
  document.getElementById("loading").style.display ="block" ;
const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php` ;
fetch(url)
.then(response => response.json())
.then(data =>displayData (data.sports)) 
.catch(error => {
    alert("You have an error" , error)
});

}

loadData() ;

//--------> display data

const displayData = (getData) => {
  document.getElementById("loading").style.display ="none" ;
const displayDataUser = document.getElementById("displayData") ;
getData.forEach(sport => {

  console.log(sport.strSportThumb);
let ErrorImage = `https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000`;
const displayDiv = document.createElement("div") ;
displayDiv.classList.add("col") ;
displayDiv.innerHTML = 

`
<div class="card">
  <img src="${sport.strSportThumb ? sport.strSportThumb :  ErrorImage }" class="card-img-top" alt="sport image"/>

  <div class="card-body card3">
    <h5 class="card-title">Sport format : ${sport.strFormat}</h5>
    <p class="card-text">Sport id : ${sport.idSport }</p>
    <img src="${sport.strSportIconGreen ? sport.strSportIconGreen : ErrorImage }" class="card-img-top2" alt="sport image"/>
  </div>
</div>

` ;

displayDataUser.appendChild(displayDiv) ;
})
}

//------------> search sport <-------------//

const searchData  = () => {
  document.getElementById("loading").style.display ="block" ;
    const searchFeild = document.getElementById("searchValue") ;
    const searchValue = searchFeild.value ;
    searchFeild.value ="" ;

    if(searchValue=="") {
      document.getElementById("emptyMessage").style.display="block";
    } else{       
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${searchValue}` ;
    fetch(url)
    .then(response => response.json())
    .then(data => searchDisplayData(data.event))
    .catch(error => {
      document.getElementById("errorMessage").style.display="block";
    });
}
} ;

const searchDisplayData = (sportDetials) => {
  document.getElementById("loading").style.display ="none" ;
  document.getElementById("emptyMessage").style.display="none"; 
  document.getElementById("errorMessage").style.display="none"; 
const displaySearchInfo = document.getElementById("displaySearchData");
displaySearchInfo.innerHTML = "" ;
sportDetials.forEach(sportInfo => {
    const displayDiv = document.createElement("div") ;
    displayDiv.classList.add("col") ;
 displayDiv.innerHTML = 

`
<div class="card">

  <div class="card-body bg-dark text-white card2 rounded shadow shadow-lg">
    <h5 class="card-title">Sport event : ${sportInfo.dateEvent}</h5>
    <p class="card-text">Sport file name : ${sportInfo.strFilename }</p>
    <p class="card-text">Sport winner : ${sportInfo.strAwayTeam ? sportInfo.strAwayTeam : "data abstained" }</p>
    <p class="card-text">Sport team : ${sportInfo.strEvent }</p>
    <p class="card-text">Sport lost : ${sportInfo.strHomeTeam ?sportInfo.strHomeTeam : "data abstained" }</p>
    <p class="card-text">Sport year : ${sportInfo.strSeason }</p>
  </div>
  
</div>

` ;

displaySearchInfo.appendChild(displayDiv) ;

} )
}


