
// >>--------->> Borrow method in js <<-------------<<

const kodomAli = {
    name: 'Kodom ali' ,
    money : 5000 ,
    study : 'Math' ,
    subject: ['calculas' , 'algebra' , 'geometry' , 'trigonometry' , 'integral' , 'matrices'] ,
    exam: function() {
        return this.name + 'is participate in an exam ' + this.subject ;
    } ,
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow() ;
    } 
    ,
    improveExam : function(subject) {
        this.exam() ; 
        return `${this.name} is takeing improvement exam on ${subject}` 
    } ,
    treatDey : function (amount , tips) {
        this.money = this.money - amount - tips ;
        return this.money ;
    }

}
const result = kodomAli.exam() ;
console.log(result);
//
const badamAli = {
    name : 'kacha badam' ,
    money: 8000 ,
   subject:['english' , 'bangla' , 'math' , 'bilogy' , 'physics' , 'chemistry' , 'ict']
}

const  clickHndelar = () => {
console.log(this , "Normal this output work" , document.getElementById("clickHndelar").innerText ); 
}
document.getElementById("clickHndelar2").addEventListener("click" , function() {
    const clickHndelar2 = () => {
        console.log(this , "id this output work" ,document.getElementById("clickHndelar2").innerText  );
    }
    clickHndelar2() ;
})

//------------>>

function sum(num) {

    if(num===1){
        return ;
    }
    num + sum(num-1) ;

    console.log(num);
}
sum(40) ;

function fabonacci (num) { //function
let array =  [ 0, 1] ;
for(var i=2; i <= num; i++) { //var i=2
    array[i] = array[i-1] + array[i-2] ;
}
return array ;
}
console.log(fabonacci(20));

// function fibonacciSeries(number) {
//     let fibo = [0, 1]
//     for (var i = 2; i <= number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// console.log(fibonacciSeries(10))

