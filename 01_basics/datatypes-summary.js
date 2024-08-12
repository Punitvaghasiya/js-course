// Primitive

// 7 types: String, Number, Boolean, null, undefined, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 23972529857239857293n



// Reference (Non-Primitive)

// Array, Objects, Functions

const cars = ["Volvo", "BMW", "Thar"];

let myObj = {
    name: "Punit",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");   
}

console.log(typeof cars);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// --------------------------------------------------------------------

// Stack (Promitive) Heap (Non-Primitive)

let myName = "Punit"
let anothername = myName;
anothername = "abc"

console.log(myName);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybi",
}

let userTwo = userOne

userTwo.email = "anknown@google.com"

console.log(userOne);
console.log(userTwo);

