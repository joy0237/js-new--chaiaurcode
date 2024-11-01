const score = 400;
//console.log (score);
const balance = new Number (100); // it is confirmed that this varibible is a number using " new Number"
//console.log (balance);
//console.log(balance.toString().length); //after a number is converted to string all the properties of a string can be applied 
//console.log(balance.toFixed(3));

const otherNumber = 25.8966;
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*console.log(Math);
console.log(Math.abs(-4)); // gives the positive value even its negative
console.log(Math.abs(4));

console.log(Math.round(4.6)); // gives the value in nearest integer form .i.e. if after decimal and thing greater than 5 with give the next number of the integer part
console.log(Math.ceil(4.2)); // whatever be the decimal part always gives the number next of the number in the integer part
console.log(Math.floor(4.6)); // whatever be the decimal part it always gives the number there in the integer

console.log(Math.min(4,7,9,1,0));
console.log(Math.max(4,7,9,1,0));
*/

//console.log(Math.random());// values will always be in between 0 and 1
//console.log((Math.floor(Math.random()*10))+1);// values will alyas be greater than 1


const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);