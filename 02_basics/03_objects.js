// objects can be declared in two ways literal and constructor
// singleton - if the object is declared with constructor then only one of its sigleton cuz its the only object cuz only one instance is created
//singleton - Object. create


// symbol
const mySym = Symbol("key1");
// object literal
const JsUser = {     //keys can be defined not necessarily to be accessed using index number
    name: "Joyshree",
    "fullName": "Joyshree Paul",
    age: 25,
    //mySym: "mykey1"
    [mySym]: "myKey1", //synbols cannot be accessed directly within the object it must delcared outside and then in the object it must be in []
    location: "Noida",
    email: "joyshree.paul@mcarbon.com",
    loggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log("email of user", JsUser.email);
// console.log("email of user",  JsUser ["email"]);
// console.log("name of user",  JsUser ["fullName"]);
// console.log("sybmol", JsUser.mySym);
// console.log("sybmol", typeof JsUser.mySym);
// console.log("sybmol", JsUser[mySym]);
// console.log("symbol", typeof JsUser[mySym]);

JsUser.email = "joyshree.27.03.2k@gamil.com" // change the value of a key in the object
// console.log("email of user",  JsUser ["email"]);

// Object.freeze(JsUser)// the values in the object will not be allowed to change
// JsUser.email = "joyshreepaul@gmail.com"
// console.log("email of user",JsUser ["email"]);
// console.log(JsUser);


//add funuction
JsUser.greetings = function(){
    console.log("hello jsuser");
}
// console.log("function",  JsUser ["greetings"]);
// console.log("function",  JsUser.greetings);
console.log("function",  JsUser.greetings());
// console.log(JsUser);

JsUser.greetingsTwo= function(){
    console.log(`hello jsuser ${this.name}` ); // string interpolation `` bacticks and ${}
}
console.log("function",  JsUser.greetingsTwo());


const myArray = ['j', 'o', 'y', 's', 'h', 'r', 'e', 'e'] // can e accessed only using index number means key cannot be defined

//imp note access object values using  dot use [] only if required
