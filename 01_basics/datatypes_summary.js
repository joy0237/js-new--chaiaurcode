/* there are two types of datatypes primitive and non- primitive(referefnce type). this is done on basis of how the data is stored and accessed.\
Primitive type have 7 catagories. These are call by value i.e. whenever it is copied from one place to other original refernce of the memory is not given, it is give by copy any changes are chaged in the copied value.
#string
#number
#boolean
#undefined
#null
#symbol
#BigInt

Reference type or non-primitive datatype:- reference is directly allocated in the memory
#arrays
#objects
#functions


//JS is a dynamic language


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);
const bigNumber = 7665897486352490n;
console.log(bigNumber);



// non- primitve
const gods = ["Shiva", "Parvati", "Krishna"];
 //object is in between curly braces
 let myObj = {
    name: ""Joyshree",
    age: 24,
 }
 // function
 const myFunction  = function(){
    console.log("hi there!");    
 }


 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //memeory are of two types stack and heap
 //for primitive type stack memory is used 
 //for non- primitive heap memory is used

 let mySchoolName = "Auxilium Convent School";
 let anothername = mySchoolName;
 anothername = "St. Xavier's Institutuion";
 console.log(anothername);
 console.log(mySchoolName);
 */

 let userOne ={
   email: "user1@gmail.com",
   upi: "user1@ptm"
 }
 
 let userTwo = userOne;
 userTwo.email = "joy@gmail.com";
 console.log(userOne.email);
 console.log(userTwo.email);