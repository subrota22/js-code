
//add event listener
//call function by parametar 
//parameter to use innerText and Field Value 
//get dom of innerText to set 
//another function to manipulate the bank balance 

/*-----------------------
----------> DEPOSIT HISTROY
--------------------------*/

//-------- deposit feild ---------//
function getFeildValueById(depositFeild) {
    const depositeFeildAmount = document.getElementById(depositFeild)
    const depositeFeildString = depositeFeildAmount.value ;
    const depositeFeildNumber = parseFloat(depositeFeildString) ; 
    depositeFeildAmount.value = "" ;
    return depositeFeildNumber;
}
//-------- deposit innerText ---------//
function getTextOfDepositById(depositMoney) {
    const depositeText = document.getElementById(depositMoney)
    const depositeTextString = depositeText.innerText ;
    const depositeTextNumber  = parseFloat(depositeTextString) ; 
    return depositeTextNumber;
} 
//-------------- bank balane add amount --------//
function bankBalanceAddAmount(bankBalance) {
   const bankBalanceText = document.getElementById(bankBalance) ;
   const bankBalanceString = bankBalanceText.innerText ;
   const bankBalanceNumber = parseFloat(bankBalanceString) ;
   return  bankBalanceNumber ;
}
//---------- add event listener ----------//
document.getElementById("depositButton").addEventListener("click" , function() {
    const newDepositAmount = getFeildValueById("depositFeild") ;
                //<------------- check input of deposit fieild ----------> 
                if(newDepositAmount==="" || isNaN(newDepositAmount)) {
                    alert("Please enter some amount to deposit") ;
                    return  ;
                }
                //------------->
    const previousDepositAmount = getTextOfDepositById("depositMoney")  ;
    const totalDepositAmount = (newDepositAmount + previousDepositAmount) ;
    //--- just inter innert text from here ---//
    const depositeTextInsert = document.getElementById("depositMoney") ;
    depositeTextInsert.innerText = totalDepositAmount ;
    //---- bank balance check  ----//
    const bankBalance = bankBalanceAddAmount("bankBalance") ;
        //--- just inter innert text from here ---//
     const bankBalaneTextInsert = document.getElementById("bankBalance") ;
    const totalBankBalance = (bankBalance + newDepositAmount) ;
    bankBalaneTextInsert.innerText = totalBankBalance ;
    console.log( "=========>>>--->---->" , setAmountById("depositBalance" , totalDepositAmount));
}) ;


/*-----------------------
----------> Withdraw HISTROY
--------------------------*/


//-------- deposit feild ---------//
function getFeildValueById(withdrawFeild) {
    const withdrawFeildAmount = document.getElementById(withdrawFeild)
    const withdrawFeildString = withdrawFeildAmount.value ;
    const withdrawFeildNumber = parseFloat(withdrawFeildString) ; 
    withdrawFeildAmount.value = "" ;
    return withdrawFeildNumber;
}
//-------- withdraw innerText ---------//
function getTextOfDepositById(withdrawMoney) {
    const withdrawText = document.getElementById(withdrawMoney)
    const withdrawTextString = withdrawText.innerText ;
    const withdrawTextNumber  = parseFloat(withdrawTextString) ; 
    return withdrawTextNumber;
} 
//-------------- bank balane add amount --------//
function bankBalanceAddAmount(bankBalance) {
   const bankBalanceText = document.getElementById(bankBalance) ;
   const bankBalanceString = bankBalanceText.innerText ;
   const bankBalanceNumber = parseFloat(bankBalanceString) ;
   return  bankBalanceNumber ;
}
//---------- add event listener ----------//
document.getElementById("withdrawButton").addEventListener("click" , function() {
    const newWithdrawAmount = getFeildValueById("withdrawFeild") ;
                 //<------------- check input of withdraw feild 
                 if(newWithdrawAmount==="" || isNaN(newWithdrawAmount)) {
                    alert("Please enter some amount to deposit") ;
                    return  ;
                }

    //---- bank balance check  ----//
    const bankBalance = bankBalanceAddAmount("bankBalance") ;
    if(newWithdrawAmount > bankBalance) {

 setTimeout (() => {
    const alertMsgDiv = document.createElement("div") ;
    alertMsgDiv.innerHTML = `
    <p class='text-red-400 my-10'> Sorry sir your amount is not sufficient to withdraw !! X </p> 
    `;
    const parent = document.getElementById("withdrawMsg") ;
    parent.appendChild(alertMsgDiv) ;
    alertMsgDiv.addEventListener("click" , function(event) {
    event.target.parentNode.removeChild(event.target) ;
    })
 }, 100);

 return ;
    }
//------------->
const previousDepositAmount = getTextOfDepositById("withdrawMoney")  ;
const bankBalaneTextInsert = document.getElementById("bankBalance") ;
const totalDepositAmount = (newWithdrawAmount + previousDepositAmount) ;
//--- just inter innert text from here ---//
const withdrawTextInsert = document.getElementById("withdrawMoney") ;
withdrawTextInsert.innerText = totalDepositAmount ;
     //--- just inter innert text from here ---//
    const totalBankBalance = (bankBalance - newWithdrawAmount) ;
     bankBalaneTextInsert.innerText = totalBankBalance ;


}) ;

