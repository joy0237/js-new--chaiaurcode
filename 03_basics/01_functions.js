function sayMyName(){
    console.log("J");
    console.log("O");
    console.log("Y");
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("E");   
}
sayMyName // only reference
// sayMyName () // executing the function

function addTwoNumbers (number1, number2){ // when a function is defined the passed values is called parameters
    console.log( number1 + number2);    
}

function addTwoNumbers1 (number1, number2){ // when a function is defined the passed values is called parameters
    return( number1 + number2);    
}
// const result = addTwoNumbers(3, 4); 
// const result1 = addTwoNumbers1(3, 9);// when a function is called then the passed values are called arguments
// addTwoNumbers("4", 5);
// addTwoNumbers("a", 7);
// addTwoNumbers(7, "a");
// addTwoNumbers( null, 8);

// console.log(result);
// console.log(result1);

function loginUserMessage(userName = "sam"){
    if (!userName){
        console.log("please enter a username");    
        return    
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("joyshree"));
console.log(loginUserMessage("joy"));