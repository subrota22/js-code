//----------------- radian to degree convert start form here --------------//
function radianToDegree(radian) {
    if(typeof radian === "number"){
    let degree = radian * 57.2958 ;
    return degree.toFixed(2) ;
    }else{
    return("Please input a valid number of radian");
    }
    }
    //variable to use parameter of function
    const radian = 25 ;
    //call the radianToDegree function
    const callRadinToDegree = radianToDegree(radian) ;
    console.log(callRadinToDegree);
    //----------------- radian to degree convert end form here --------------//
    
    //----------------- File check start from here --------------//
    function isJavaScriptFile(fileNameCheck) {
    if(typeof fileNameCheck === "string") {
    if(fileNameCheck.endsWith('.js')) {
    return true ;
    }else{
    return false ;
    }
    } else{
      return("Please input a valid file");
    }
    }
    //variable to use parameter of function
    const fileName = 'app.js' ;
    //call the isJavaScriptFile function
    const callisJavaScriptFile = isJavaScriptFile(fileName) ;
    console.log(callisJavaScriptFile) ;
    //----------------- File check end from here --------------//

    //----------------- calculate the oil price start ----------------------//
 function oilPrice(diselRequire , petrolRequire , octaneRequire) {
   if(typeof diselRequire ==="number" && typeof petrolRequire ==="number" && typeof octaneRequire === "number") {
    //--------------- Oil price -------------//
    const diselPrice = 150 ;
    const petrolPrice = 130 ;
    const octanePrice =135 ;
    if(typeof diselPrice ==="number" && typeof petrolPrice ==="number" && typeof octanePrice === "number") {    
    //--------------- Oil price end -------------//
    const diselTotalPrice = diselRequire * diselPrice ;
    const petrolTotalPrice = petrolRequire * petrolPrice ;
    const octaneTotalPrice = octaneRequire * octanePrice ;
    const totalPriceOfOil = diselTotalPrice + petrolTotalPrice + octaneTotalPrice ;
    return totalPriceOfOil ;
    }else{
        return "Please input valid oil price" ;
    }
    } else{
      return ("Please enter number for oil calculation");
    }
}


    //variable to use parameter of function
    let diselRequire = 30;
    let petrolRequire = 20 ;
    let octaneRequire = 10;

    //call the oilPrice function
    const callOilPriceFunction = oilPrice(diselRequire , petrolRequire , octaneRequire) ;
    console.log(callOilPriceFunction);
 
    //----------------- calculate the oil price end --------------//

    //--------------------- public bus fare start from here -------------------//
    function publicBusFare (people) {
    const BusSeatAvailable = 50 ;
    const microBusSeatAvailable = 11 ;
    if(typeof people === "number" && people >=0 ) {
    if(people >= 11 && people < 50 ) {
    const microBusNeed = Math.floor(people/microBus) ;
    const microBusPeople = microBusNeed * microBus ;
    const remainingFromMicroBus = Math.abs( microBusPeople - people ) ;
    const coastForPublicBusFare = remainingFromMicroBus * 250 ;
    return coastForPublicBusFare ;
    }
    else if(people >= 50) {
    const busNeeed= Math.floor(people / BusSeatAvailable) ;
    const busPeople = busNeeed * BusSeatAvailable ;
    const remainingFromBus = Math.abs(busPeople - people ) ;
    const microBusNeed = Math.floor(remainingFromBus/microBusSeatAvailable) ;
    const microBusPeople = microBusNeed * microBusSeatAvailable ;
    const remainingFromMicroBusWithPeople = Math.abs( microBusPeople - people ) ;
    const remainingFromMicroBus = Math.abs( remainingFromMicroBusWithPeople - busPeople ) ;
    const coastForPublicBusFare = remainingFromMicroBus * 250 ;
    return coastForPublicBusFare ;
    } else{
    const localBusCoast = people * 250;
    return localBusCoast ;
    }
    } else{
        return "Please enter number"
    }

    }
    //variable to use parameter of function
    let people  = 120;
    //call publicBusFare function
    const callBusFare = publicBusFare(people) ;
    console.log(callBusFare);
    //--------------------- public bus fare end from here -------------------//

    //-------------------------- check best friend start ------------------------//
    function isBestFriend(firstFriendCheck , secondFriendCheck) {
    if(typeof firstFriend ==="object" &&  typeof secondFriend === "object") {
    if(firstFriendCheck.name ===  secondFriendCheck.friend &&  firstFriendCheck.friend === secondFriendCheck.name ) {
    return true ;
    }else{
    return false ;
    }
    } else{
     return "Please enter object type of data" ;
      }
    }
    let firstFriend= { name: "abul" , friend : "babul"} ;
    let secondFriend = { name: "babul" , friend : "abul"} ;
    const callIsBestFriend = isBestFriend(firstFriend , secondFriend) ;
    console.log(callIsBestFriend );
    //--------------------------check best friend end from here ------------------------//