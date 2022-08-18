//---------------- deposite amount --------------//
document.getElementById("deposit").addEventListener("click" , function() {
let depositeNewMoneyString = document.getElementById("depositField").value;
if(depositeNewMoneyString!=="" && isNaN(depositeNewMoneyString)==false) {
let depositeNewMoney = parseFloat(depositeNewMoneyString);
let depositeAmount = document.getElementById("depositeAmount");
let previousAmountString= depositeAmount.innerText ;
let previousAmount = parseFloat(previousAmountString ) ;

let depositTotalAmount = depositeNewMoney + previousAmount ;
depositeAmount.innerText = depositTotalAmount ;
//---------- Total balance ------------//
let bankBalance = document.getElementById("bankBalance");
let bankBalanceString = bankBalance.innerText ;
let bankBalancePrevious = parseFloat(bankBalanceString) ;
let totalBankBalance = bankBalancePrevious + depositeNewMoney ;
bankBalance.innerText = totalBankBalance ; 
} else{
    alert("Please enter amount what you want to deposit") ;
}
})
//clear input field 
document.getElementById("deposit").addEventListener("click" , function(){
    let depositeNewMoneyString = document.getElementById("depositField");
    depositeNewMoneyString.value = "" ;
})
//---------------- withdraw amount --------------//

document.getElementById("withdraw").addEventListener("click" , function() {
    let withdrawNewMoneyString = document.getElementById("withdrawField").value;
    if(withdrawNewMoneyString!=="" && isNaN(withdrawNewMoneyString) === false) {
    let withdrawNewMoney = parseFloat(withdrawNewMoneyString);
    let withdrawAmount = document.getElementById("withdrawAmount");
    let previousWithdrawAmountString= withdrawAmount.innerText ;
    let previousWithdrawAmount = parseFloat(previousWithdrawAmountString ) ;
    //----- bank balance
    let bankBalance = document.getElementById("bankBalance");
    let bankBalanceString = bankBalance.innerText ;
    let bankBalancePrevious = parseFloat(bankBalanceString) ;

      //check money to withdraw
      if(parseFloat(withdrawNewMoneyString) > bankBalancePrevious ) {
        alert("You are amount is insufficeint to withdraw") ;
        return ;
    }
    //----------
//---------- Total balance ------------//
let withdrawTotalAmount = withdrawNewMoney + previousWithdrawAmount ;
withdrawAmount.innerText = withdrawTotalAmount ;
    let totalBankBalance = bankBalancePrevious - withdrawNewMoneyString ;
    bankBalance.innerText = totalBankBalance ;
 
    } else{
        alert("Please enter amount what you want to withdraw") ;
    }
    })
    //clear input field 
    document.getElementById("withdraw").addEventListener("click" , function(){
        let withdrawNewMoneyString = document.getElementById("withdrawField");
        withdrawNewMoneyString.value = "" ;
    })