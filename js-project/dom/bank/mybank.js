/*-------------------------------------

<------------- DEPOSIT HISTROY ------------->

----------------------------------------*/
document.querySelector("#depositBtn").addEventListener("click" , function() {
    //input deposit
    const inputDeposit = document.querySelector("#depositFeild");
    const inputDepositString = inputDeposit.value;
       //check input 
       if(inputDepositString=="") {
        alert("Enter the amount what you want to depostie") ;
        return;
    };
    if(isNaN(inputDepositString)) {
        alert("Please enter some number that you want to depostie.") ;
        return;
    } ;
    const inputDepositNewAmount = parseFloat(inputDepositString) ;
    //deposit balance
    const depositBalance = document.querySelector("#depositBalance");
    const depositBalanceString = depositBalance.innerHTML;
    const depositBalancePrevioue = parseFloat(depositBalanceString) ;
    const totalDeposit = (inputDepositNewAmount + depositBalancePrevioue); ;
    depositBalance.innerHTML = totalDeposit ;
    inputDeposit.value ="" ;
    //bank balance 
    const bankBalance = document.querySelector("#bankBalance");
    const bankBalanceString = bankBalance.innerHTML;
    const bankBalancePrevious = parseFloat(bankBalanceString) ;
    const totalBankBalace = (totalDeposit + bankBalancePrevious);
    bankBalance.innerHTML = totalBankBalace ;
})


/*-------------------------------------

<------------- WITHDRAW HISTROY ------------->

----------------------------------------*/


 
const withDraw10 = document.querySelector("#withdrawButton").addEventListener("click" , function() {
    //input deposit
    const inputDeposit = document.querySelector("#withdrawFeild");
    const inputDepositString = inputDeposit.value;
    const inputWithdrawNewAmount = parseFloat(inputDepositString) ;
           //check input 
           if(inputDepositString=="") {
            alert("Enter the amount what you want to withdraw") ;
            return;
        } ;
        if(isNaN(inputWithdrawNewAmount)) {
            alert("Please enter some number that you want to withdraw.") ;
            return;
        } ;
    //deposit balance
    const withdrawBalance = document.querySelector("#withdrawBalance");
    const withdrawBalanceString = withdrawBalance.innerHTML;
    console.log(withdrawBalanceString);
    const withdrawBalancePrevioue = parseFloat(withdrawBalanceString) ;
    //bank balance 
    const bankBalance = document.querySelector("#bankBalance");
    const bankBalanceString = bankBalance.innerHTML;
    const bankBalancePrevious = parseFloat(bankBalanceString) ;
    //check amount 
    if( bankBalancePrevious < inputDepositString) {
        alert("Sorry sir you amount is not sufficeint to withdraw !!") ;
        return;
    }
    const totalWithdraw= (inputWithdrawNewAmount + withdrawBalancePrevioue); ;
    withdrawBalance.innerHTML = totalWithdraw ;
    inputDeposit.value ="" ;
    const totalBankBalace = (bankBalancePrevious - totalWithdraw);
    bankBalance.innerHTML = totalBankBalace ;
})
