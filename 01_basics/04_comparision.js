/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2">1);
console.log("02">1);
// try comparision with same datatypes

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the resaon is that equality check ==  and comparisons >, >=, <, <= works differently. 
//comparisions convert null to anumber treating it as zero is the third option in the above syntax is correct and the first option is incorrect
*/

//=== strict check i.e. check keeping the datatypes same but if those are of different datatypes then execution becomes false
console.log("2" === 2); // strict check

//avoid comparion with null and undefined to keep the code clean 