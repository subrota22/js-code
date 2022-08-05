var marks = 45;
if(marks>100 || marks< 0){
console.log("You should enter your mark less than 100 and gettar than 0 or equal to 0 ");
}else if(marks>=80 && marks<=100) {
    console.log("Your have got A+ ");
}else if(marks>=70  &&  marks<80) {
    console.log("You have got A");
}else if(marks>=60 && marks<70) {
    console.log("You have got A- ");
} else if(marks>=50 && marks<60) {
    console.log("You have got B");
}else if(marks>=45 && marks<50) {
    console.log("You have got C");
} else if(marks>=33 && marks <45 ) {
    console.log("You have got D");
}else {
    console.log("You are fail best of luck for the next time .");
}

