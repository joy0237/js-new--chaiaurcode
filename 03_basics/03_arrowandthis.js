const user = {
    username:"joyshree",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }    
}
user.welcomeMessage();
user.username = "hitesh";
user.welcomeMessage();

// console.log(this);
// all the objects in browser are global oject of windows


// function chai() {
//     let userName = "joyshree"
//     console.log(this.userName); //this only works in object not in function      
// }
// chai();

// const chai = function(){
//     let userName = "joyshree"
//     console.log(this.userName);
// }
// chai();

// const chai = () => { // arrow function
//     let userName = "joyshree"
//     console.log(this);
// }
// chai();

const addTwo = (num1, num2) => {
    return num1 + num2; // explicit return
}
console.log(addTwo (3,4));


//++++++++++++++++++implicit return
const addThree = (num1, num2) => num1 + num2;
console.log(addThree (3,4));

const addFour = (num1, num2) => (num1 + num2); // if you add curly braces {} you have type return
console.log(addFour (3,4));

const addFive= (num1, num2) => ({userName: "joy"});
console.log(addFive(3,4));

const myArray = [2, 5, 3, 7, 8];
myArray.forEach()