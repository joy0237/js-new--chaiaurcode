// for of
["", "", "", ""] // array of elements
[{}, {}, {}, {}] // array o f objects

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);    
// }

// const greetings = "hello world";
// for (const greet of greetings) {
//     console.log(`${greet} ${greetings}`);
//     console.log(`each char is ${greet}`);
// }



// Map
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN',"India");
for (const [key, value] of map) {
    console.log(key ,':-', value);
}

const myObject = {
    game1: 'NF',
    game2: 'spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }  not iterating for objects as objects are not iterable as maps


