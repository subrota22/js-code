
const loadMeals = (search) => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}` ;
fetch(url)
.then(res => res.json())
.then(data => displayMeals (data.meals))
}

//-------------------> display data <-----------------//
const displayMeals = meals => {
const mealContainer = document.getElementById("meal-container") ;
mealContainer.innerText = "" ;
  meals.find(meal => {
//  console.log(meal);
   const mealDiv  = document.createElement("div") ;
   mealDiv.classList.add("col-12") ;
   mealDiv.classList.add("col-sm-12") ;
   mealDiv.classList.add("col-md-6") ;
   mealDiv.classList.add("col-lg-4") ;
   mealDiv.classList.add("cardDiv") ;
   mealDiv.innerHTML =
                  `
               <div onclick="mealDetials(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="food images">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions}</p>
                      <h5 class="card-title text-info">Element to make batter</h5>
                      <p class="card-text"> ${meal.strIngredient }   ${meal.strIngredient2 }  ${meal.strIngredient3 }  ${meal.strIngredient4 }</p>
                      <button onclick="mealDetials(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      More info
                    </button>
                      </div>
                  </div>
           `;
   mealContainer.appendChild(mealDiv) ;
  });
}
//-----------> Search <--------------
const searchFood = () => {
const inputFeild = document.getElementById("searchValue") ;
const inputValue = inputFeild.value ;
inputFeild.value = "" ;
loadMeals(inputValue) ;
}

//-------------> display dynamic data <--------------//
const mealDetials = (mealId) => {
// console.log("Meal id" , mealId);
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` ;
fetch(url)
.then(res => res.json())
.then(data => displayDynamicFood(data.meals[0]))
 }

 const displayDynamicFood = (displayFood) =>{
const displayFoodDiv = document.getElementById("displayDynamicData") ;
console.log(displayFood);
displayFoodDiv.innerHTML = "" ;
const dynamicDiv = document.createElement("div") ;
dynamicDiv.style.width=  "100%" ;
dynamicDiv.style.margin=  "auto" ;
dynamicDiv.style.marginTop=  "20px" ;
dynamicDiv.style.marginBottom=  "20px" ;
dynamicDiv.innerHTML =

`

  <img src="${displayFood.strMealThumb}" class="card-img-top img-fluid h-50" alt="food image" >
  <div class="card-body">
    <h5 class="card-title">  ${displayFood.strMeal}  </h5>
    <p class="card-text"> ${displayFood.strInstructions} </p>
    <h5 class="card-title my-4">  See youtube video for better experience  </h5>
    <a  href="${displayFood.strYoutube}" class="card-text" target="_blank"> Click here </as>
    <ifrem
  </div>

` ;
displayFoodDiv.appendChild(dynamicDiv) ;


 }



