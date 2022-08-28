
function searchFoodData(getFood) {
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getFood}` ;
fetch(url)
.then((response)=>response.json()) 
.then( (data)  =>{
 searchData(data)
}).catch(error => console.log(error) ) ;
}

function searchData(datas) {
const foodContainer = document.getElementById("food-container") ;
foodContainer.innerHTML = ""  ;
const getFoods = datas.meals ;
const getDatas = getFoods.filter(info => info) ;
for(let getData of getDatas) {
const getFoodId = getData.idMeal;
lookUpData(getFoodId);
const newFoodDiv = document.createElement("div") ;
newFoodDiv.classList.add("col") ;
newFoodDiv.innerHTML = 
`
<div class="card w-100">
<img src="${getData.strMealThumb}" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title"> ${getData.strIngredient1} </h5>
  <p class="card-text"> ${getData.strInstructions.slice(0,250)} </p>
</div>
<!-- Button trigger modal -->
<button class="btn btn-primary w-50 m-4"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"> More info </button>
</div>
`;
foodContainer.appendChild(newFoodDiv) ;
}
}

const input = document.getElementById("search");

input.addEventListener("click" , function() {
  const inputValue = document.getElementById("searchValue") ;
  const inputString = inputValue.value ;
  inputValue.value = "" ;
  searchFoodData(inputString) ;
})

function lookUpData(getFoodId) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getFoodId}` ;
  fetch(url)
.then((response)=>response.json()) 
.then( (data)  =>{
 getFoodInfo(data)
}).catch(error => console.log(error) ) ;
}


function getFoodInfo(getFoodId) {
  const modalInfo = document.getElementById("modalInfo") ;

for(let i=0; i<=getFoodId.length; i++) {
  const element = getFoodId[i] ;
  console.log(element);

const newModalDiv = document.createElement("div") ;
newModalDiv.innerHTML =
`
<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${element}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
`;
modalInfo.appendChild(newModalDiv) ;
}
}





