function average(number , lengthOfArray) {
var averageNumber = number / lengthOfArray ;
return averageNumber ;
}

var array = [45,78,200,300,500] ;
var sum = 0 ;
for(i=0; i<array.length; i++) {
 sum += array[i] ;
 }

var lengthOfArray = array.length ;

var getAverage =  average(sum, lengthOfArray) ;

console.log(getAverage);
