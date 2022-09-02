document.getElementById("loading").style.display="none" ;
const loadData =  () => {
    document.getElementById("loading").style.display="block" ;
const url  = `https://randomuser.me/api/`;
fetch(url)
.then(response => response.json())
.then(data =>  displayData(data.results[0]))
.catch(error => {
    alert("Your have some error...." , error) ;
});
}

const displayData = (getData) => {
// console.log(getData);
    document.getElementById("loading").style.display="none" ;
const displayUserData = document.getElementById("displayUser") ;
    displayUserData.innerHTML = `
    <div class="card m-auto  text-center" style="width: 40rem;">
    <img src="${  getData.picture.thumbnail }" class="image" alt="user picture"/>
    <div class="card-body">
      <p class="card-text"> Email :  ${getData.email} </p>
      <p class="card-text">Phone: ${ getData.phone} </p>
      <p class="card-text"> Gender : ${getData.gender} </p>
      <p class="card-text">Country: ${getData.location.country} </p>
      <p class="card-text">City: ${getData.location.city} </p>
      <p class="card-text">State: ${getData.location.state} </p>
      <p class="card-text text-info fw-bold"> Log in information </p>
      <p class="card-text">Username: ${ getData.login.username } </p>
      <p class="card-text">Password: ${ getData.login.password} </p>
    </div>
  </div>
    `;
}
