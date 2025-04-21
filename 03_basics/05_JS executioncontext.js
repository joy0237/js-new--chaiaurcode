// //JAVASCRIPT ECECUTION CONTEXT
// // STEP 1: GLOBAL EXECUTION CONTEXT/GLOBAL ENVIRONMENT (this)
// // STEP 2: FUNCTION EXECUTION CONTEXT
// // STEP 3: EVAL EXECUTION CONTEXT- PROPERTY OF GLOBAL

 
// //the code runs in two phases - memeory creation phase/creation phase (allocates memory for variables and all the ddeclared stuffs no operation performed here) and execution phase

// let value1 = 10;
// let value2 = 5;
// function addNum(num1, num2){
//     let total = num1 + num2;
//     return total;
// }
// let result1 = addNum (value1, value2);
// let result2 = addNum (10, 2);

// STEP 1: GLOBAL EXECUTION
// STEP 2: MEMORY PHASE 
//            value1 - > undefined
//            value2 - > undefined
//            addNum - > defination
//            result1 - > undefined
//            result2 - > undefined
// STEP 3: EXECUTION PHASE
//             value1 - > 10
//             value2 - > 5
//             result -> addNum -> makes a seperate EXECUTION CONTEXT (NEW VARIABLE ENVIRONMENT + EXECUTION THREAD)
//             //FOR EACH FUNCTION A SEPERATE EXECUTION CONTEXT IS CREATED AND FOR THIS MEMORY PHASE AND EXECUTION PHASE RUNS AGAIN
//                         MEMEORY PHASE
//                         value1 -> undefined
//                         value2 -> undefined
//                         total -> undefined

//                         EXECUTION CONTEXT
//                         num1 -> 10
//                         num2 -> 5
//                         total -> num1 + num2 -> 15 // returns too PARENT EXECUTIONAL CONTEXT ...........AFTER RETURNING THE VALUE TO PARENT OR GLOBAL EXECUTIONAL CONTEXT THE EXECUTION CONTEXT CREATED FOR THE FUNCTION IS DELETED and the the flow goes back the EXEUTION phase that is where it statred from
            
            
//             therefore, result1 -> 15


//             result2 -> addNum -> makes a seperate EXECUTION CONTEXT (NEW VARIABLE ENVIRONMENT + EXECUTION THREAD)
//             //FOR EACH FUNCTION A SEPERATE EXECUTION CONTEXT IS CREATED AND FOR THIS MEMORY PHASE AND EXECUTION PHASE RUNS AGAIN
//                         MEMEORY PHASE
//                         value1 -> undefined
//                         value2 -> undefined
//                         total -> undefined

//                         EXECUTION CONTEXT
//                         num1 -> 10
//                         num2 -> 2
//                         total -> num1 + num2 -> 12  // returns too PARENT EXECUTIONAL CONTEXT ...........AFTER RETURNING THE VALUE TO PARENT OR GLOBAL EXECUTIONAL CONTEXT THE EXECUTION CONTEXT CREATED FOR THE FUNCTION IS DELETED and the the flow goes back the EXEUTION phase that is where it statred from
            
            
//             therefore,  result2 -> 12


// // +++++++++   call stack ++++++++++

// GLOBAL EXECUTION (lifo)