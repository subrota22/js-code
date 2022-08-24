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

var getAverage =  average(sum , lengthOfArray ) ;

console.log(getAverage);
//tray catch block 

try {
    function myFunction(getArray , getLength , getObject1 , getObject2) { 

    if(getObject1.name === getObject2.friendName && getObject1.friendName === getObject2.name) {
        console.log("Best freind");
    } else{
        console.log("Theyer not best friend.");
    }
       let storeArrayNumbers = 0 ;
       for(let i=0 ; i <getArray.length; i++) {
        let lengthOfArrayNumber = getArray[i] ;
        storeArrayNumbers +=  lengthOfArrayNumber ;
       }
       //we need to calculate averege out of function //
       const averageNumber = storeArrayNumbers / getLength ;
       return averageNumber ;
    }

let array = [57,47,60,60 ,48 , 47 , 52 , 46 , 45 ,44 , 52 , 46] ;
let lengthArray = array.length ;

let object = {
    name:"karim" ,  friendName:"rahim" 
}

let object2 = {
    name:"rahim" ,  friendName:"karim" 
}
const funtionGet = myFunction( array , lengthArray , object , object2 ) ;
console.log("Avereage number =======>>>" , funtionGet);

} catch (error) {
    console.log(error);
} finally {
    console.log("Weldone");
}

