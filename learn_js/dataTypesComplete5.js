/* We distinguish two types of dataTypes
callByValue: Copy not change in original. --> Primitive
callByReference: new object is created, no copy is created --> Non-Primitive

Also, why we bifrucate the primitive and nonPrimitive?
Because how we can store in memory
And how we can access from the memory.

Primitive and NonPrimitive (Reference Type) */

/*
Primitive: --> 7 Types
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Big init
*/

//examples
const score = 100;
const scoreValue = 100.3        //nothing like decimal or float: all symbolise as NUMBER

const isLoggedIn = false
const outsideTemp = null
let userEmail;      // undefined

const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);  //return false, because it have different number

const bigNum = 345672432545364547767n;

// Let's check the return types of the primitive dataTypes
// console.log(typeof score)           //number
// console.log(typeof scoreValue)      //number
// console.log(typeof isLoggedIn)      //boolean 
// console.log(typeof outsideTemp)     //object
// console.log(typeof userEmail)       //undefined
// console.log(typeof id)              //symbol
// console.log(typeof bigNum)          //biginit




/*
NonPrimitive --> 3 Types
1. Array
2. Object
3. Functions
*/

//examples
let arr = ["riya", "javier", "sohan", "radha"];

let obj = {
    name: "Riya",
    age: 21
}

const myFun = function(){
    console.log("Hello World");
}

console.log(typeof arr);        //obj
console.log(typeof obj);        //obj
console.log(typeof myFun);      //function obj



// Doc study: https://262.ecma-international.org/5.1/#sec-11.4.3