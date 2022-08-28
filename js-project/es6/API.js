const button = document.getElementById("diplayButton") ;
button.addEventListener("click" , function(event) {
event.target.setAttribute("disabled" , true) ;
    const url = "https://jsonplaceholder.typicode.com/users" ;
    fetch(url) 
    .then(response => response.json())
    .then(data=> getTheData(data)) 


        function getTheData (datas) {
        const setData = document.getElementById("info"); 
        const setAllData = document.getElementById("moreInfo") ;
        for(let data of datas ) {
        const dataGet = data ;
        // const parseStringigy = JSON.parse(dataGet) ;
        console.log(dataGet.name);
        const list = document.createElement("li") ;
        list.innerText = dataGet.name ;
        setData.appendChild(list) ;
        const newDiv = document.createElement("div") ;
        newDiv.classList.add("infoDiv") ; //to set a class var.classList.add("nameOfClass")
        newDiv.innerHTML = `
        Name : ${data.name} <br> 
        Username: ${data.username} <br> 
        Email: ${data.email} <br> 
        Address: 
        Street :  ${ data.address.street}<br> 
        Suite:    ${ data.address.suite}<br> 
        City :${ data.address.city}<br> 
        Zipcode : ${ data.address.zipcode}<br> 
        Geo 1  : ${ data.address.geo.lat}<br> 
        Geo 2  : ${ data.address.geo.lng}<br> 
        Phone : ${data.phone} <br>
        Websit : ${data.website} <br>
        Company name: ${data.company.name} <br>
        Company catchPhrase: ${data.company.catchPhrase} <br>
        Company bs: ${data.company.bs} <br>
        <br> <br> <br> 

        `
        setAllData.appendChild(newDiv) ;

        //>>--------->>------->> set data in a table 
        const tableBody = document.getElementById("tableBody") ;
        const newRow = document.createElement("tr") ;
        tableBody.appendChild(newRow) ;
        //end table
        newRow.innerHTML = `
        <td> ${data.name} </td>
        <td> ${data.username} </td>
        <td> ${data.email} </td>
        <td> ${data.phone} </td>
        <td> ${data.address.city} </td>
        <td> ${ data.address.zipcode} </td>
        `
        }
        }
        })