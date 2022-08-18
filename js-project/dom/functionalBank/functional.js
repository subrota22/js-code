/*--------------------------------
DEPOSIT HISTROY
----------------------------------*/

function getTextElementValueById(elementId) {
     const textElement = document.getElementById(elementId) ;
     const textElementValueString = textElement.innerText ;
     const textElementValue = parseFloat (textElementValueString) ;
     return textElementValue ;
}

function getElementValueById(elementId) {
     const textElement = document.getElementById(elementId) ;
     const textElementValueString = textElement.value ;
     const textElementValue = parseFloat (textElementValueString) ;
     if(textElementValueString=="" || isNaN(textElementValueString)){
          alert("Please insert some number that is you want to withdraw");
          textElement.value = ""
         return getElementValueById();
     }
     textElement.value ="" ;
     return textElementValue ;
}

document.getElementById("depositBtn").addEventListener("click" , function() {
     const newDepositTotal = getElementValueById("depositFeild") ;
     const DepositTotal = getTextElementValueById("depositBalance") ;
     const totalDeposit = newDepositTotal + DepositTotal ;
     const depositBalance2 = document.getElementById("depositBalance") ; //------- just pass the inner text ----------//
     depositBalance2.innerText = totalDeposit ;//------- just pass the inner text ----------//
     const TotalBalance = document.getElementById("bankBalance") ;
     const previousBankBalance = TotalBalance.innerText ;
     const bankBalanceTotal = parseFloat( previousBankBalance ) ;
     const previousTotalBankBalance = (bankBalanceTotal + newDepositTotal  );
     TotalBalance.innerText =previousTotalBankBalance;
})

/*--------------------------------
----------> -> -> WITHDRAW HISTROY
----------------------------------*/

function getElementValueByIdofWithdraw(withdrawFeild) {
     const textElement = document.getElementById(withdrawFeild) ;
     const textElementValueString = textElement.value ;
     const textElementValue = parseFloat (textElementValueString) ;
     if(textElementValueString=="" || isNaN(textElementValueString)){
          alert("Please insert some number that is you want to withdraw") ;
          textElement.value = "" ;
          return getElementValueByIdofWithdraw();
     }
     textElement.value ="" ;
     return textElementValue ;
}

function getTextElementValueByIdOfWithdraw(withdrawBalance) {
     const textElement = document.getElementById(withdrawBalance) ;
     const textElementValueString = textElement.innerText ;
     const textElementValue = parseFloat (textElementValueString) ;
     return textElementValue ;
}

document.getElementById("withdrawButton").addEventListener("click" , function() {
     const newWithdrawTotal =getElementValueByIdofWithdraw("withdrawFeild") ;
     const totalWithdraw = getTextElementValueByIdOfWithdraw("withdrawBalance");
     const totalWithdrawBalance = newWithdrawTotal + totalWithdraw ;
     console.log(totalWithdrawBalance);
     const depositBalance2 = document.getElementById("withdrawBalance") ; //------- just pass the inner text ----------//
     depositBalance2.innerText = totalWithdrawBalance ;                 //------- just pass the inner text ----------//
     const TotalBalance = document.getElementById("bankBalance") ;
     const previousBankBalance = TotalBalance.innerText ;
     if(newWithdrawTotal > previousBankBalance) {
                 youcantdo() ;
        }
     const previousTotalBankBalance = ( previousBankBalance - newWithdrawTotal  );
     TotalBalance.innerText = previousTotalBankBalance;
 
 });

function youcantdo() {
     alert("you can not do it");
     return getElementValueByIdofWithdraw() ;
};
//------------------- end ----------------//

let urlget = URL="https://parallelum.com.br/fipe/api/v1" ;

console.log(urlget.name);
