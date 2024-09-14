const num = 100;
const score = new Number(500);

// console.log(typeof num);    //number
// console.log(typeof score);  //object

// const typeCheck = score.toString();
// console.log(typeof typeCheck);

// It's converted into String then we can apply the properties of string.
// console.log(score.toString().length);
// console.log(score.toFixed(2));  //Precision values, use in Ecommerce projects

const otherNum = 123.9444;
// console.log(otherNum.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // Default = US Based
// console.log(hundreds.toLocaleString('en-IN'));



/******************* MATHS ********************/
// Type of Library, and a object
// console.log(Math); 
// console.log(Math.abs(-4));      // abs = absolute, negative to positive
// console.log(Math.round(3.4));   // simple round-off
// console.log(Math.ceil(4.2));    // top values
// console.log(Math.floor(4.8));   // down values
// console.log(Math.sqrt(9));      // 9 --> 3
// console.log(Math.max(10, 8, 2, 12));
// console.log(Math.min(10, 8, 2, 12));

//important topic --> Random
console.log(Math.random());     //values range 0 to 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)
