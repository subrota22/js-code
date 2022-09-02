const student  = {
    name:"subrota" , 
    age : 21 ,
    hobby:"codding" ,
}
const studen2  = {
    name:"subrota" , 
    age : 21 ,
    hobby:"codding" ,
    biodata: function (name , name2) {
        return `first name : ${name}  second name :${name2}` ;
    }
}

const apply = studen2.biodata.apply(student , ["subrota" , "diposh"]) ;
const call = studen2.biodata.call(student , "wiliiam", "david") ;
const bind = studen2.biodata.bind(student) ;
const bindShow = bind("makr jukarbarg" , "bil gates") ;
console.log(apply , call , bindShow);