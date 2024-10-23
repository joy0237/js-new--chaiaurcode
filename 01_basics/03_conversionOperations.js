let score = 33;
let age = "33abc";
let b = null;
let c = undefined;
let d = true;
let e = "joy";
// const {score} = req.body; don't know whether the value is string or number
console.log(typeof score);
console.log(typeof (score));
console.log(typeof age);

let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber); // output NaN => not a number

console.log(b);
let valueInB = Number(b);
console.log(typeof valueInB);
console.log(valueInB); 

console.log(c);
let valueInC = Number(c);
console.log(typeof valueInC);
console.log(valueInC); 

console.log(d);
let valueInD = Number(d);
console.log(typeof valueInD);
console.log(valueInD); 

console.log(e);
let valueInE = Number(e);
console.log(typeof valueInE);
console.log(valueInE); 

/* when number in string is converted to a number it is easily comnverted to a number
if the string is a combination a alphabets and number then if it is converted to a number then NaN comes as a output
if boolean is converted to a number then it is either 0 or 1 */

let isLoggedIn = "joyy";
let booleanIsLoggedIn = Boolean (isLoggedIn);
console.log(booleanIsLoggedIn);

/* when converted to boolean 
1 => true
0 => false
" " => false
"anystring" => true */

let someNumber = 33;
let stringNumber = String (someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);