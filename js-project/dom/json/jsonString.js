


var jsonString = JSON.stringify({
    make: "McLaren",
    model: "MP4-12C",
    miles: 5023
});
var car = JSON.parse(jsonString);
console.log(car.model, "Parse is here => ", JSON.parse(jsonString));


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }


