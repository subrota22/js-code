
// document.getElementById("text").addEventListener("keypress" , function(event) {
// const key = event.key ;
// const keyShow = document.getElementById("displyKey") ;
// keyShow.innerHTML = key  + "  Hello friend my name is subrota".slice(0,20)+ ".....";
// if(key==="Enter"){
//     alert("Ok you press enter")
// }
// })

const arrayNumbers = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,8,8,9,9,10,10] ;
const uniqueNumber = [] ;
for(let number of arrayNumbers) {
    if(uniqueNumber.indexOf(number) === -1) {
        uniqueNumber.push(number) ;
    }
}

console.log(uniqueNumber);

const sentence = "I am fall in love every time on every owmen" ;
const checkSentence = sentence.includes("every") ;
console.log(checkSentence);

const teacher = [
 {
      TeacherInfo:{
            TeacherName:"Ali uddin" ,
            age:48 ,
            subject:"English" , 
            experience: "20 Years" ,
            details:( salary) => { 
                return ` name :   ${ this.TeacherName ? this.TeacherName : "Subrota"} salary : ${salary} ` ;
         } ,
         hobby: "Reading" ,
      }
    } 
]

const madam = [
{
    AllInfo:{
            madamName:"Alia parvin" ,
            age:35,
            subject:"Bangla" , 
            experience: "12 Years" 
         } ,
       bio:{
             details:(salary) => {
                 return `name : ${this.madamName} salary: ${salary}`
             } , 
             hobby: "Reading" ,
         }
     }
]

teacher.forEach(info=>{
 console.log(info.TeacherInfo.details(20000) );
})

madam.filter(infoGet => {
   console.log( infoGet.bio.details(120000));
})
