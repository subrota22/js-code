var bankBalance = 0 ;
var Deposite = 0 ;
var Withdraw = 0 ;
var Transfer = 0 ;
var TotalAmount = 0 ;
//taking user info
var username = prompt("Enter your name") ;
var email = prompt("Enter your email") ;
document.querySelector("#start").addEventListener("click" , function() {
var userChoice = parseInt(document.querySelector("#number").value) ;
//  var value20 = typeof TotalAmount ;
//  console.log(value20);
switch (userChoice) {
    //deoposite money
    case 1:
     function DepositeMoney() {
     var  DepositeAmount = parseInt(prompt("Enter your deposite amount:")) ;
     bankBalance+=DepositeAmount ;
     TotalAmount+=DepositeAmount ;
     Deposite+=DepositeAmount ;
     alert("Your deposite is success.") ;
        }
        DepositeMoney() ;
     break;
     //withdraw money
    case 2:
     function WithdrawMoney() {
 var  WithdrawAmount = parseInt(prompt("Enter your withdraw amount:")) ;
  if (WithdrawAmount<bankBalance || WithdrawAmount <TotalAmount) {
    bankBalance-=WithdrawAmount ;
    TotalAmount-=WithdrawAmount ;
    Withdraw+=WithdrawAmount ;
    alert("Your withdraw is success.") ;
  } else {
    alert("Your withdraw money is not supported cause your bank balance is not sufficent.")
  }
        }
        WithdrawMoney() ;
     break;
     //transfer money
    case 3:
     function transferMoney() {
     var  transferMoneyAmount = parseInt(prompt("Enter your transfer amount:")) ;     
  if (transferMoneyAmount<bankBalance || transferMoneyAmount <TotalAmount) {
    bankBalance-=transferMoneyAmount ;
    TotalAmount-=transferMoneyAmount ;
    Transfer+=transferMoneyAmount ;
    alert("Your transfer is success.") ;
  } else {
    alert("Your withdraw money is not supported cause your bank balance is not sufficent.")
  }
        }
        transferMoney() ; //call back
     break;
     //withdraw money
    case 4:
     function checkMoney() {
 
 alert (
   "Your transfer money status : " +  Transfer + "  "  + "-------"  +
   "Your withdraw money status " +     Withdraw +  "  " +  "-------"  +
   "Your deposite money status  " +   Deposite + "  " +  "-------"  +
   "Your total  amount status  " +   parseFloat(TotalAmount) +  "  " +  "-------"  +
   "Your bank balance status   " +  parseFloat(bankBalance) +  "  " +   "-------"  
 ) ;
    }
        
     checkMoney() ;
     break;
case 5 :
alert("Congarasulation " + username +  " " + " thanks for stay with us ." + " Your email address is : " + " " + email) ;
break ;

        default:
        alert("Invalid number choice please select 1 to 4 ") ;
        break;
}
})