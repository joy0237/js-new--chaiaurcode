const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map( (num) => num + 10);


// chaining
const newNums = myNumbers
        .map ((num) => num * 10 ) // if you want to return return explicitly
        .map ((num) => num + 1 )
        .filter((num) => num >= 40) // returns true or false
console.log(newNums);
