//controls
//if
// if (condition){

// }// syntax

const temperature = 31;
// if(2 === "2"){ // === for checking along with datatype
//     console.log("executed");    
// }

// if(temperature < 50){
//     console.log(`${temperature} less than 50 `);    
// } else {
//     console.log(`${temperature} greater than 50`);
// }

// const score = 200;
// if(score > 100){
//     const power = "fly"
//     console.log(`user has ${power}`);   
// }

const balance = 1000
// if(balance > 500)
//     console.log("test1"), 
//     console.log("test2");
    

// NESTING

// if(balance < 500){
//     console.log("less than 500");    
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance <900){
//     console.log("less than 900");
// }else
//     console.log("less than 1200");


const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard){
    console.log(`allowed to buy courses`);
    
}


const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");    
}