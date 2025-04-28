const myNums = [1, 2, 3];
const myTotal = myNums.reduce ((acc, currentVal) => {
    console.log(`acc: ${acc} and currentVal: ${currentVal} `);
    return acc + currentVal}, 0);
console.log(myTotal);
