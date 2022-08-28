
//-------------------- Object working ----------------//
let ourObject = {
    subrota: "web developer" ,
    lifeStyle: "general" ,
    education: "HSC" ,
    bio:{
        address: "Rajshahi , Joypurhat" ,
        country: "Bangladesh" ,
        hobby : "Coding" ,
        age : "21" ,
        gender: "Male"  ,
        extraHobby: {
            sex : "1st" ,
            movie: "2nd" ,
            interest : "gril"
        } ,
    } ,
    array: ['subrota' , '21' , 'male' , 'bangladesh'] ,
    func : {
       ourFunc : function () {
       for(let i=1; i<=20 ; i++) {
        console.log(i);
       }
       }
    }
}

console.log(ourObject.array);
console.log(ourObject.bio);
console.log(ourObject.func.ourFunc());

//------------- Recursion---------------//
function sum(num) {
console.log(arguments);
if(num==1) {
    return 1 ; //to stop the recurstion 
}
num= num + sum (num - 1 ) ;  // call function inside of function and decreement it's value //
return num;

}
//25 + sum (25-1) = 24 
//25 + 24 + sum (24-1) = 23 
//25 + 24 + 23 + sum (23-1) = 22
//..................... 1  => if num ==1 return 1 ;

const callBackSumFunction = sum(25) ;
console.log("Total numbers => " , callBackSumFunction);

//----------------- searching method --------------------//

let products  =[
{ name: "Lava" , color:"blue" , ram : "2GB" , rom : "32GB" , warenty:"2 years" , price:6400 } ,
{ name: "Sumsung" , color:"black" , ram : "4GB" , rom : "64GB" , warenty:"2 years" , price:10000 } ,
{ name: "Galaxy" , color:"black" , ram : "2GB" , rom : "32GB" , warenty:"3 years" , price:6400 } ,
{ name: "iPhone" , color:"golden" , ram : "4GB" , rom : "64GB" , warenty:"2 years" , price:10000 } ,
{ name: "Symphony" , color:"blue" , ram : "4GB" , rom : "32GB" , warenty:"3 years" , price:6400 } ,
{ name: "itech" , color:"silver" , ram : "2GB" , rom : "32GB" , warenty:"3 years" , price:10000 } ,
] ;

function productSerach(products, search) {
const storeSearchProduct = [] ;
for(const product of products) {
if(product.rom.toLowerCase().includes(search.toLowerCase())) {
storeSearchProduct.push(product.rom) ;
}
}
return storeSearchProduct ;
}

let callProductSearchFunction = productSerach(products , "32gb") ;

console.log(callProductSearchFunction);

//----------- practice with search method --------------//

let bags = [

    {brand:"iPhone" , color:"black" , price : "2000"} ,
    {brand:"iPhone" , color:"black" , price : "2000"} ,
    {brand:"iPhone" , color:"black" , price : "2000"} 
] ;

function bagsSearch(bags , search) {
const storeBags = [] ;
for(const bag of bags) {
    if(bag.brand.includes(search)) {
        storeBags.push(bag) ;
    }
}
return storeBags ;
}

const callBags = bagsSearch(bags , "iPhone") ;

console.log(callBags);