// declare object using constructor singleton
//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id =  "123abc",
tinderUser.name = "joy",
tinderUser. isLoggedIn = false
// console.log(tinderUser);
const regularUser ={
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "joyshree",
            lastName: "paul"
        }
    }
}
// console.log(regularUser.fullName.userFullName.lastName);

//mering objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {1: "c", 2: "d"};
// const obj3 = {obj1, obj2}; // creates an object within another object 
// const obj3 = Object.assign({}, obj1, obj2); //it is a better practise to give empty paranthesis
const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "kio@gmail.com"
    },
    {
        id: 2,
        email: "lio@gmail.com"
    },
    {    
        id: 3,
        email: "boy@gmail.com"
    },{},{},{}
]
user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.entires(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
