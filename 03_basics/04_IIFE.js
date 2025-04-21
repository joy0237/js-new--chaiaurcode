//Immediately invoked function expression(IIFE)
//do not need pollution from global scope
//execute immediately

// function chai(){
//     console.log (`DB CONNECTED`)
// }
// chai()

//+++++++++++++++++IIFE++++++++++++++
(function chai(){
    console.log (`DB CONNECTED`)
})();

// ++++ARROW FUNCTION++++++
( () => {
    console.log (`DB CONNECTED`)
})();
(function aurcode(){
    console.log (`DB CONNECTED`)
})();

// doesn't know where to end so there was error to stop the exceution add ; explicitly

( (name) => {
    console.log (`DB CONNECTED ${name}`)
})("joyshree");
