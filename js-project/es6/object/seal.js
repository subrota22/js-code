// const student = [
//     {
//         Student: {
//             name:"suborna" ,
//             roll:321252 ,
//             gpa:3  ,
//             propose:function() {
//                 return this.name + ' rejected subrota proposal '; //+  "rejected subrota proposal " ;
//                 }
//         } ,

//         Assignment:{
//             first: 57 , 
//             second : 60 ,
//             third:60 , 
//             forth:47 , 
//             fifth:60 
//         }
   
//     }
// ]
// // console.log(student.Student.propose);
// const sealValue  = student.filter(info => {
// const pair = Object.entries(info.Student) ;
// const create = Object.create(info.Student) ;
// console.log("Cerate success :----> " , create.name);
// Object.apply("helllo") ;
// delete info.Student.name;
// Object.bind(info.Student) ;
// Object.seal(info.Student) ;
// Object.assign(info.Student )
// Object.freeze(info.Student) ;
// console.log(Object.call(info.Assignment.forth));
// // ---Object.arguments() ;
// console.log(Object.length);
// info.Student.name = "expereince" ;
// console.log(pair , create );
// //--- console.log(info.Student);
// console.log(info.Assignment.forth);
// }) 

// //  >>>--------------->>> 

// const ogogSona  = {
//     nameGet : "Suborna" ,
//     age : 14 ,  
//     quality: "Jhakas" ,
//     tempare : "100% full"  , 
//     garden:function ( name , age  ) {
//       console.log(name  , age);
//     }
// }
//Object.seal(ogogSona) ;
// console.log(delete ogogSona.nameGet);
// console.log(ogogSona);
// // --ogogSona.garden.apply (ogogSona , ["Subrota" , 21]) 
// // ---console.log(ogogSona.garden());
// ogogSona.garden("Subrota", 54)

// >>--------->> Borrow method in js <<-------------<<

const kodomAli = {
    name: 'Kodom ali' ,
    money : 5000 ,
    study : 'Math' ,
    subject: ['calculas' , 'algebra' , 'geometry' , 'trigonometry' , 'integral' , 'matrices'] ,
    exam: function() {
        return this.name + 'is participate in an exam ' + this.subject ;
    } ,
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

const result2 = kodomAli.exam.call(badamAli) ;
console.log("Simple call =>" ,result2);
const moneyCal = kodomAli.treatDey.call(badamAli , 700 , 100); //c , coma
console.log("Call method" ,moneyCal);
const badamAliMoney = kodomAli.treatDey.apply(badamAli , [500 , 300]) ; //a , array
console.log("Apply method" ,badamAliMoney);
const bindMethod = kodomAli.treatDey.bind(badamAli) ;
const remaining = bindMethod(600 , 820) ;
console.log("Bind method" ,remaining);




