// Dtaes

// let myDate = new Date();
// console.log("1", myDate.toString());
// console.log("2",myDate.toDateString());
// console.log("3",myDate.toISOString());
// console.log("4",myDate.toJSON());
// console.log("5",myDate.toLocaleDateString());
// console.log("6",myDate.toLocaleString());
// console.log("7",myDate.toLocaleTimeString());
// console.log("8",myDate.toTimeString());
// console.log("9",myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 2, 27 );
console.log("myCreatedDate", myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2000, 2, 27, 11, 34, 0);
console.log("myCreatedDate1", myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2025-03-27" );
console.log("myCreatedDate2", myCreatedDate2.toDateString());
console.log("myCreatedDate2", myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("03-27-2025" );
console.log("myCreatedDate3", myCreatedDate3.toDateString());
console.log("myCreatedDate3", myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('dafault', {
    weekday: "short",
    
})