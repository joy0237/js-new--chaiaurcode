//var c = 300;
let a = 300

if (true){ //global variables should be accessed within ithe scope but the variables decleared within the scope should not be accessed within outside the scope
    let a = 10;
    const b = 20;
    //var c = 30; // data type var doesn't follow the rules the braces and can accessed outside it
   // d = 90;
//    console.log(`in if ${a}`);
   function addNum(){}
   
}
//  for (let i = 0; i < array.length; i++){
//     const element = array[i];
//  }

// console.log(a);
//console.log(b);
// console.log(c);
// console.log(d);


//-------------------nested scope
function one(){
    const userName = "joyshree";

    function two(){
        const website = "chai aur code";
        console.log(userName);        
    }
    // console.log(website);

    two();    
}
one();

if(true){
    const userName = "joyshree";
    if (userName == "joyshree"){
        const website = "chai aur code";
        // console.log(userName + website);   
    }
    // console.log(website);
}
// console.log(userName);



//+++++++++++++++++++++++interesting+++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1;
}


// addTwo (5); this gives error
const addTwo = function(num){ // also called expression
    return num + 2
}
