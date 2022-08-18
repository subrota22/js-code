let p2 = document.createElement("p");
let div = document.createElement("div") ;
p2.innerHTML ="We should to know the everything." ;
div.appendChild(p2);
console.log(div);
const text = document.querySelector(".text") ;
//avoid className
text.innerText="Welcome to the DOM world !" ;
text.setAttribute("class" , "color color2 color3") ;
text.getAttribute("class") ;
text.setAttribute("title" , "Now we can make our website intractive")
const create = document.createElement("div") ;
const p = document.createElement("p") ;
p.innerText ="I am inside of div";
create.append(p)
console.log(text);
const div2 = document.createElement("div") ;
const p3 = document.createElement("p") ;
p3.innerText ="Are you ok javaScript ?  You need to use any div in html as tag than you can append" ;
div2.appendChild(p3) ;
console.log(div2);
const ulist = document.getElementById("ul") ;
const list =  document.createElement("li") ;
list.innerText ="Mango" ;
ulist.appendChild(list) ;
const list2 =  document.createElement("li") ;
list2.innerText ="Orange" ;
ulist.appendChild(list2) ;
const list3=  document.createElement("li") ;
list3.innerText ="Pineaple" ;
ulist.appendChild(list3) ;
const list4 =  document.createElement("li") ;
list4.innerText ="Litchi" ;
ulist.appendChild(list4) ;
const shib = list.nextElementSibling;
const shib2 = list.previousElementSibling;
console.log("shibling" , shib , shib2);
const allList = document.querySelectorAll("li") ;
for(listTag of allList) {

    listTag.style.listStyleType ="none" ;
    listTag.style.listStylePosition ="inside" ;
    listTag.style.color="lime" ;
    listTag.style.fontSize ="20px" ;
    listTag.style.border ="3px solid tomato" ;
    listTag.style.padding ="6px" ;
}
const liDiv = document.querySelector("#div-li") ;
liDiv.innerHTML = "<h2 style='font-size:25px; text-transform:uppercase;'> Fruits list </h2>" ;
liDiv.style.background="red" ;
liDiv.style.borderRadius="20px" ;
liDiv.style.width="50%" ;
liDiv.style.margin="auto" ;
liDiv.style.padding="20px" ;
liDiv.style.textAlign="center" ;
liDiv.style.marginBottom="45px" ;
liDiv.appendChild(ulist);
console.log(liDiv);

let div4 = document.querySelector('#content');
div4.classList.add('info');
// div4.classList.remove("info") ;
console.log(div4);
div4.innerText = "Hello everyone lest spread our knowladge";
div4.appendChild(div) ;
console.log(
    "Get parent and node child : " , div4  , 
    div4.childNodes ,
div4.parentNode
    );

    div4.appendChild(div2) ;

    //----------- ha ha
function clickEvent () {
const divElement =  document.createTextNode("Are you ok ?" );
document.querySelector(".storeDiv").appendChild(divElement) ;
}

//event handelar

document.querySelector("#change").addEventListener("click" , function() {
let userInput = document.getElementById("userInput") ;
let displayValue = document.querySelector(".displayValue") ;
displayValue.innerHTML = userInput.value ;
 userInput.value ="" ;

})
//make a beggar comment in js
document.querySelector("#send").addEventListener("click" , function() {

let text = document.querySelector("#comment") ;

let displayText = document.createElement("p");
displayText.innerText = text.value ;

let myText =  document.createElement("div") ; 
   myText.innerText = text.value ;
   text.value = "" ;
//get div to set div
 let getDiv = document.querySelector(".comment-container") ;
 getDiv.appendChild(myText) ;
 getDiv.appendChild(displayText) ;
getDiv.parent
})




//------------------ delete ----------------//

document.querySelector("#deleteText").addEventListener("keyup" , function() {
const deleteButton = document.querySelector("#deleteText").value;
if(deleteButton=="delete") {
    document.querySelector("#deleteBtn").removeAttribute("disabled" , true) ;
} else{
    document.querySelector("#deleteBtn").setAttribute("disabled" , true) ;
}
})

document.querySelector("#deleteBtn").addEventListener("click" , function(event) {
    const deleteButton = document.querySelector("#delete");
    deleteButton.remove(event.target.value);
    })
//------------- delete 2 -----------//

document.querySelector("#ulList").addEventListener("click" , function(event) {
const deleteList = document.querySelector(".items");
deleteList.remove(event.target.value) ;//delete one by one using remove event
}) ;

document.querySelector("#addList").addEventListener("click" , function() {
    const listCreate = document.createElement("li") ;
     listCreate.innerHTML = "<h2  style='color:lime; border:2px solid blue; padding:15px;'> para 120 </h2>" ;
     listCreate.setAttribute("class" , "items li");
    const getUl = document.getElementById("ulList") ;
    getUl.appendChild(listCreate) ;
});

//change background color of body 

function black() {
 document.body.style.backgroundColor ="black"; 
 document.body.style.color = "lime" ;
}

function white() {
    document.body.style.backgroundColor ="white"; 
    document.body.style.color = "black" ;
   }
   