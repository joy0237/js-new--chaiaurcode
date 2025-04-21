const userEmail = "joyshree@gmail.com"
if(userEmail){
    console.log("got user email");    
}else {
    console.log("don't have user email");
}
//falsey values
//false, 0, -0, BigInt 0n, "", null, undefined, Nan 
// rest all are truthy values

//surprise truthy values
//"0", 'false', " ", [], {}//empty object, function(){}// empty function

const userEmail1 = []
if(userEmail1.length === 0 ){
    console.log("empty array");    
}

const emptyObject = {}
if ((Object.keys(emptyObject).length) === 0) {
    console.log("object is empty");
    
}


//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 10
console.log(val1);


// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80"): console.log("less than 80");

// ternary opertor and ullish caolescing operator


