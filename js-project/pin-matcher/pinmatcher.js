function generatePin() {
    const randomNumber = Math.round(Math.random()*10000) ;
    return randomNumber ;
}
function getPin() {
    const pinNumber = generatePin() ;
    const pinString = pinNumber + "" ;
    if(pinString.length ==4) { //check length
        return pinNumber ;
    } else{
        return getPin() ;
    }
}

document.getElementById("generatePin").addEventListener("click" , function() {
    const pin = document.getElementById("display-pin") ;
    const getPinnumbre = getPin() ;
    pin.value = getPinnumbre;
})

document.getElementById("calculator-body").addEventListener("click" , function(event) {
    const pinSet = document.getElementById("matchPin") ;
    const pinValue = pinSet.value ;
    const pinNumber= event.target.innerText;
    if(isNaN(pinNumber)) {
        if(pinNumber=="C") {
            pinSet.value = "" ;
        }else if(pinNumber=="<"){
            const array = pinValue.split('') ; // pinSet.value.split('') =>  array + arry.pop() + join('')
            array.pop() ;
            const joinNumber = array.join('');
            pinSet.value = joinNumber ;
        }
    }  else{
        const previousNumber = pinSet.value ;
        const newNumber = previousNumber + pinNumber;
        pinSet.value = newNumber ;
    }
})

document.getElementById("submitPin").addEventListener("click" , function() {
        const pinSet = document.getElementById("matchPin") ;
        const pinValue = pinSet.value ;
        const pin = document.getElementById("display-pin") ;
        const pinNumber = pin.value ;
        if(pinValue==""){
            return ;
        }
        const error = document.getElementById("error") ;
        const success = document.getElementById("success") ;

        if(pinValue==pinNumber) {
            success.style.display ="block" ;
            error.style.display ="none" ;
        }  else{
            error.style.display ="block" ;  
            success.style.display ="none" ;
        }
})


