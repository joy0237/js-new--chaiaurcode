//in js array need not be only numneric or string it can anything like boolean or like an entire array within it......
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

console.log("marvel heros", marvel_heros);
console.log("dc heros", dc_heros);

// marvel_heros.push (dc_heros); // not recommended array within an array
// console.log("new marvel heros", marvel_heros);
// console.log("new marvel heros length", marvel_heros.length);
// console.log("new marvel heros", marvel_heros[3][2]);

// const all_heros = marvel_heros.concat (dc_heros);
// console.log("all heros", all_heros);
// console.log("all heros length", all_heros.length);
// console.log("all eros", all_heros[5]);

//SPREAD OPERATORS  ........highly preffered
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log("all new heros", all_new_heros);

//concat adds limitation of only one element but spread opreator allows multiple elements

const mixed_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [5, 4]]];
const useable_mixed_array = mixed_array.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log("new array", useable_mixed_array);


//used while data scrapping, questions can be asked if its an array or an array van also be created
console.log(Array.isArray("Joyshree"));
console.log(Array.from("Joyshree"));
console.log(Array.from({name: "Joyshree"})); // empty array as it cannot make an array here it have to mention that the array should be on the basis of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of (score1, score2, score3)); //.of Returns a new array from a set of elements.