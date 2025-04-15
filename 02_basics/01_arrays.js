// array

const myArray = [1, 2, 3, 4, 5, 6]
// console.log(myArray[3]);

const places = ["Spriti", "Manassarovar"]

const myArray2 = new Array (1, 2, 3, 4, 5);

// Array Methods
myArray.push(7);
myArray.push(10);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));
console.log(myArray.indexOf(2));

const newArray = myArray.join();
console.log(myArray);
console.log(typeof myArray);
console.log(newArray);
console.log(typeof newArray);

//slice or splice

console.log("A", myArray);

const myn1 = myArray. slice(1, 4);
console.log("B", myArray);
console.log("a", myn1);

const myn2 = myArray.splice(1, 4);
console.log("C", myArray);
console.log("b", myn2);

// slice- do not affect the original array only takes the elements from lower index to (upper index - lower index)
// splice-  chanes the original array by removing the elements from lower idex to upper index 