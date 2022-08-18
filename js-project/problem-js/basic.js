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
    
        const BusSeatAvailable = 50 ;
        const microBusSeatAvailable = 11 ;
    
     if(typeof people === "number" && people >= 0 ) {
    if(people >=11 && people < 50 ) {
        const microBusNeed = Math.floor(people/microBusSeatAvailable) ;
        const microBusPeople = microBusNeed * microBusSeatAvailable ;
        const remainingFromMicrobus = Math.abs( microBusPeople - people ) ;
        const coastForPublicBusFare = remainingFromMicrobus * 250 ;
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
        } else
        {
            const coastForLocalBus = people * 250 ;
            return coastForLocalBus ;
        }
    
     } else{
        console.log("Please enter valid number");
     }
    }
    //variable to use parameter of function
    let people = 212;
    //call publicBusFare function
    const callBusFare = publicBusFare(people) ;
    
    console.log(callBusFare);
    
    //--------------------- public bus fare end from here  -------------------//
    
    //-------------------------- check best friend start ------------------------//
    
    function   isBestFriend(firstFriendCheck , secondFriendCheck) {
    if(typeof firstFriendCheck.name ==="string" && typeof firstFriendCheck.friend ==="string" && 
    typeof secondFriendCheck.name ==="string" && typeof secondFriendCheck.friend ==="string" ) {
        if(firstFriendCheck.name.toLowerCase() ==="abul" && secondFriendCheck.friend.toLowerCase()==="abul"
         && secondFriendCheck.name.toLowerCase()==="babul" && firstFriendCheck.friend.toLowerCase()==="babul") {
            return true ;
        }else{
            return false ;
        }
    } else{
        console.log("Please enter valid type of freind or name") ;
    }
    
    }
    
    let firstFriend= {
         name: "abul" , friend : "babul" , gender: "male" , school:"dadra high school" , education: "HSC" , divisition: "science"
        } ;
    let secondFriend = {
         name: "babul" , friend : "abul" , gender: "male" , school:"dadra high school" , education: "HSC" , divisition: "science"
        } ;
    
    const callIsBestFriend = isBestFriend(firstFriend , secondFriend) ;
    
    console.log(callIsBestFriend );
    
    //--------------------------check best friend end from here ------------------------//
    
    