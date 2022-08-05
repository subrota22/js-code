let BankBalnace=0; 
let deposite=0;
let withdraw=0;
let transfer=0;
//taking  user info
let username = prompt("Enter your name") ;
let email = prompt("Enter your email") ;
//take the choice of user 
document.querySelector("#start").addEventListener("click" , function() {
let num = parseInt(document.querySelector("#choice").value) ; //value and parseInt

//check the all logic
switch(num) {

    case 1 :
    //deposite
    let depositeNow = parseInt(prompt("Enter you deposite amount : ") ) ;
    deposite += depositeNow ;
    BankBalnace+=depositeNow ;
    alert("Your deposite is success : " + depositeNow + "tk") ;
 break ;
    
    case 2 :
//withdraw
let withDrawNow = parseInt(prompt("Enter your withdraw amount  : "));
if(BankBalnace < withDrawNow){
  alert("You can not deposite cause your Bank Balnace is not sufficent") ;
    }else{
        BankBalnace -= withDrawNow ;
        withdraw+=withDrawNow ;
        alert("Your withdraw success transfer Bank Balnace is : " + withDrawNow + " tk " );
    }
    break ;

 case 3 :
//transfer
let transferNow = parseInt( prompt("Enter you transfer amount :") ) ;
    if(BankBalnace < transferNow) {
      alert("You can not transfer cause your amout is not sufficent" );
    }else{
        BankBalnace-=transferNow; 
        transfer+=transferNow ;
        alert("Your transfer success transfer Bank Balnace is : " + transferNow + " tk " );
    } 
break ;

case 4 :
//check balance
alert(   
`Your current Bank Balnace money histroy ${BankBalnace} ` +
 `Your withdraw money histroy ${withdraw} ` +
`Your transfer money histroy ${transfer} ` +
`Your deposite money histroy ${deposite} ` 
);
    break ;

 case 5 :

//clear info
    deposite=0;
    transfer=0;
    withdraw=0;
  alert("Your information has been clear");
  break ;

case 6:
alert(" Congrasulation this is " + username + " Your email is " + email ) ;
break ;

  default : 
   alert("You should enter the value  1 to 6 ");
}

});

