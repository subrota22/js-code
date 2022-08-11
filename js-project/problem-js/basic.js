//----------------- radian to degree convert start form here --------------//

function radianToDegree(radian) {
    if(typeof radian === "number"){
        let degree = radian * 57.2958 ;
        return degree.toFixed(2) ;
    }else{
    console.log("Please input a valid number of radian");
    }
    }
    
    //variable to use parameter of function
    const radian = 25 ;
    //call the radianToDegree function
    const callRadinToDegree = radianToDegree(radian) ;
    console.log(callRadinToDegree);
    
    //----------------- radian to degree convert end form here --------------//
    
    //----------------- File check start from here  --------------//
    
    function isJavaScriptFile(fileNameCheck) {
    
    if(typeof fileNameCheck === "string") {
        if(fileNameCheck.endsWith('.js')) {
            return true ;
        }else{
            return false ;
        }    
    } else{
        console.log("Please input a valid file");
    }
    }
    //variable to use parameter of function
    const fileName = 'app.js' ;
    //call the isJavaScriptFile function
    const callisJavaScriptFile = isJavaScriptFile(fileName) ;
    console.log(callisJavaScriptFile) ;
    //----------------- File check end from here  --------------//
    
    //----------------- calculate the oil price  start ----------------------//
    
    function oilPrice(diselRequire , petrolRequire , octaneRequire) {
    if(typeof diselRequire ==="number" && typeof petrolRequire ==="number" && typeof octaneRequire === "number") {
    //--------------- Oil price -------------//
    const diselPrice = 114 ;
    const petrolPrice = 130 ;
    const octanePrice =135 ;
    //--------------- Oil price end -------------//
    const diselTotalPrice = diselRequire * diselPrice ;
    const petrolTotalPrice = petrolRequire * petrolPrice ;
    const octaneTotalPrice = octaneRequire * octanePrice ;
    const totalPriceOfOil = diselTotalPrice + petrolTotalPrice + octaneTotalPrice ;
    
    return totalPriceOfOil ; 
    } else{
        console.log("Please input valid numbers of oil ");
    }
    }
    
    
    //variable to use  parameter of function
    let diselRequire = 30 ;
    let petrolRequire = 20 ;
    let octaneRequire = 10 ;
    //call the oilPrice function
    const callOilPriceFunction = oilPrice(diselRequire , petrolRequire , octaneRequire) ;
    
    console.log(callOilPriceFunction);
    
    //----------------- calculate the oil price end --------------//
    
    //--------------------- public bus fare start from here  -------------------//
    
    function publicBusFare (people) {
    
        const BusSeatAvailAble = 50 ;
        const microBusSeatAvailAble = 11 ;
    
     if(typeof people === "number") {
    
        if(people >= 50) {
          const busNeeed= Math.floor(people / BusSeatAvailAble) ;
          const busPeople = busNeeed * BusSeatAvailAble ;
          const remainingFromBus = Math.abs(busPeople - people ) ;
          const microBusNeed = Math.floor(remainingFromBus/microBusSeatAvailAble) ;
          const microBusPeople = microBusNeed * microBusSeatAvailAble ;
          const remainingFromMicroBusWithPeople = Math.abs( microBusPeople - people ) ;
          const remainingFromMicroBus = Math.abs( remainingFromMicroBusWithPeople - busPeople ) ;
          const coastForPublicBusFare = remainingFromMicroBus * 250 ;
         return coastForPublicBusFare ;
        } ;
    
     } else{
        console.log("Please enter valid number");
     }
    }
    //variable to use parameter of function
    let people = 55;
    //call publicBusFare function
    const callBusFare = publicBusFare(people) ;
    
    console.log(callBusFare);
    
    //--------------------- public bus fare end from here  -------------------//
    
    //-------------------------- check best friend start ------------------------//
    
    function   isBestFriend(friend1 , friend2) {
    if(typeof friend1.name ==="string" && typeof friend1.friend ==="string" && typeof friend2.name ==="string" && typeof friend2.friend ==="string" ) {
        if(friend1.name==="abul" && friend2.friend==="abul" && friend2.name==="babul" && friend1.friend==="babul") {
            return true ;
        }else{
            return false ;
        }
    } else{
        console.log("Please enter valid type of freind or name") ;
    }
    
    }
    
    let friend1 = { name: "abul" , friend : "babul"} ;
    let friend2 = { name: "babul" , friend : "abul"} ;
    
    const callIsBestFriend = isBestFriend(friend1 , friend2) ;
    
    console.log(callIsBestFriend );
    
    //--------------------------check best friend end from here ------------------------//
    
    