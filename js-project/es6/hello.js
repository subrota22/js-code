// //>------>-----> Map <-----<-----<
// const array = [45,47,54,78,20,10,70,25] ;
// const mapnumber = array.map(x => x * 2) ;
// console.log("map number =>" ,mapnumber);

// //>------>-----> Filter <-----<-----<

// const FilterNumber = array.filter(n => n > 30) ;
// console.log("filter number =>" ,FilterNumber);

// //>------>-----> Find <-----<-----<

// const findNumber = array.find( x => x <50) ;
// console.log("find number =>" , findNumber);

// //>------>-----> Reduce <-----<-----<

// const reduceNumber = array.reduce(  
// (prevNumber , nextNumber ) => prevNumber + nextNumber 
// ) ;
// console.log("reduce number =>" , reduceNumber);

// //>------>-----> Object <-----<-----<

// const student = [
//     {name:"subrota" , age : 21 , roll:613331 } , 
//     {name:"diposh" , age : 25 , roll:613211 } , 
//     {name:"joy" , age : 25 , roll:610231 } , 
//     {name:"bappi" , age : 25 , roll:253331 } , 
// ]
// const studentGet = student[2].roll;
// console.log(student[3].name , studentGet);
// const simpleObject = {
//     name:"Alisa" , professtion: "singer" , age : 31 
// }
// const {professtion} = simpleObject ;
// console.log(professtion);

// //>-------->---------> Class <-------<-------<
// class AllInfo {
// constructor(greeting) {
//     this.greeting = greeting ;
// }
// feedback() {
// console.log("Thanks for your feedback" );
// }
// }

// class Teacher  extends AllInfo{
//     constructor(name , subject ,  salary  , dialogue  , state) {
//         super(dialogue) ; //derivate
//         this.name = name ;
//         this.subject = subject;
//         this.salary = salary;
//         this.dialogue = dialogue;
//         this.state = state ;
//     }
// }

// class Madam extends AllInfo {
//     constructor(name , subject ,  salary , dialogue) {
//         super(dialogue) ; //derivate
//         this.name = name ;
//         this.subject = subject;
//         this.salary = salary;
//         this.dialogue = dialogue;
//     }
// }


// const getTeacherClass = new Teacher("Anup" , "Botanist and Zoology" , 42000 , "Thanks to join with us ..." , "Teacher") ;
// const getTeacherClass2 = new Madam("Sreya" , "CSE" , 45000 , "Thanks to join with us ...") ;
// getTeacherClass.feedback() ;
// const getInfo = `
// Name : ${ getTeacherClass.name } 
// Subject : ${getTeacherClass.subject} 
// Salary: ${getTeacherClass.salary}
// Greeting: ${getTeacherClass.dialogue}
// State:${getTeacherClass.state}
// >----->-----> Madam history <-----<-----<
// Name : ${ getTeacherClass2.name } 
// Subject : ${getTeacherClass2.subject} 
// Salary: ${getTeacherClass2.salary}
// Greeting: ${getTeacherClass2.dialogue}

// ` ;

// console.log(getInfo);

// // >>-------->> Arrow function <<---------<<

// const  myArrow = ( num1 , num2 ) => {const add = num1 + num2  ; return add ;};
// const callArrow = myArrow(12,405) ;
// console.log("Addition of two numbers => " ,callArrow); 

// // >>--------->>   <<----------<<


// let data = {
//     location: [
//        {
//         latitude : '34.4 ,37.8' ,
//         logitude: '98.77 , 58.7' ,
//         country: 'india'
//        }
//     ]
// }
// const showObjectValue = data.location[0] ;
// console.log(showObjectValue);

//class again
class allHero {
    constructor(name , salary , age) {
        this.name = name ;
        this.salary = salary ;
        this.age = age ;
    }
}

class SalmanKhan extends allHero {
feedback() {
    console.log("Thanks to introuduce me. Salman");
}
}

class SharukKhan extends allHero {
    feedback() {
        console.log("Thanks to introuduce me  . Skarukh");
    }
    }
    
const salman = new SalmanKhan ("Salman" , "21221211" , "56") ;
salman.feedback()

const sarukh = new SharukKhan ("Sharukh" , "21221211" , "55") ;
sarukh.feedback()
console.log(`
Name : ${salman.name}
Salary : ${salman.salary}
Age : ${salman.age}

Name : ${sarukh.name}
Salary : ${sarukh.salary}
Age : ${sarukh.age}
` );