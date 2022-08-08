function divideNumber() {
for(var i=1 ; i<=50; i++) {
  var element = i ;
    if ( element%3==0 && element%5==0 ) {
    console.log("foobar" , element);
}
else  if(element%3==0) {
        console.log("foo" , element);
    } else if(element%5==0) {
        console.log("bar" , element);
    }
 }
}

// var array = [12,45,78,45,37,12,36,95,48,75,68,50,47,54,55,25] ;

let callDivde = divideNumber() ;

// console.log("3 or 5 divideable numbers : " ,callDivde);