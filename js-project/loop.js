// var i=11;
// do{
//     i--;
//     console.log(i);
// }while(i>=1)

var math = 75.25 ;
var biology = 65 ;
var chemistry = 80 ;
var physics =  35.45 ;
var bangla =   99.5 ; 
console.log(math , biology , chemistry , physics , bangla);
var totalMarks = 75.25 + 65 +  80 + 35.45 +  99.5 ; 
var marksShow = totalMarks/5 ; //total  marks divide by total subject 
console.log("Average mark is :" + parseFloat(marksShow.toFixed(2)));
//johan 
var firstDialog = " I am going to be" ;
console.log(firstDialog);
var secondDialog = "an awsome web developer " ;

console.log(secondDialog) ;
var totalDialog = firstDialog  + secondDialog ;
console.log(totalDialog) ;

//sraha math 
var specialNumber = 119 ;
var divideByTheNumber = 5 ;
var theReimiderIs = specialNumber % divideByTheNumber ;
console.log("The reminder is : " + parseFloat(theReimiderIs));
//for each
var array = [45,87,65,12,02] ;
array.forEach(myNumber => {
    console.log(myNumber);
});
//for loop with array 
var friends = ['niloy' , 'bijoy' , 'neha' , 'sraya' , 'bosle'] ;
for(var j=0; j<friends.length; j++) {
    var friend = friends[j];
    console.log(friend);
}
var fruits= ['Banana' , 'Apple'  , 'Pinaple' , 'Woodapple'] ;
for (var m=fruits.length; m>=0; --m ){
    var fruit = fruits[m] ;
    console.log(fruit);
}
//break and continue 
for(var k=0 ; k<12 ; k++) {
if(k>1){
console.log(k);
break;
}else{
    continue;
}
}
//for loop
for(var n=0 ; n<10; n++){
    console.log(n);
}