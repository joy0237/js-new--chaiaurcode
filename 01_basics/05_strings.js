const name = "Joyshree";
const repoCount = 5;
// console.log(name + repoCount + "Value"); not recommended


// mordern way is using backticks what happens is string interpolation
// string interpolation makes placeholders can directly inject the values

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String ('jooyiee')

const anotherString1 = gameName.slice(-10,4);
console.log(anotherString1); //invoking object

console.log(gameName[7]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf('r'));
const newString = gameName.substring(4,7)
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const anotherString2 = gameName.slice(-10,4);
console.log(anotherString1);

const newStringOne = "               joyshree                        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.bing.com/images/search%20=mount+abu&form=HDRSC3&first=1"
console.log(url);
console. log(url.replace ('%20', '-'));