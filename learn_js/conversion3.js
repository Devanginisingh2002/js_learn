let score = "Devangini"
// console.log(typeof score);    
// console.log(typeof (score));        // we can write in method form

//convert string into number
let valNum = Number(score);
// console.log(typeof valNum);
// console.log(valNum);        //NaN

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Devangini"
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Dev" => true

let someNum = 33
let stringNum = String(someNum)
// console.log(stringNum);
// console.log(typeof stringNum)

/******************* OPERATIONS IN JS **************/

let val = 3;
let negVal = -val;
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //power 2^3
// console.log(2/2);
// console.log(2%3);   //modulo remainder

let str = "hello"
let str1 = "Dev"
let str2 = str + str1
console.log(str2);

console.log("1" + 2);  
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "4");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;      // Increment & Decrement operator
console.log(gameCounter);

// link to study, official website JS
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion