//primitive dataTypes --> Stack Memory
// let myName = "DevanginiSingh"

// let anotherName = myName;
// anotherName = "Riya"

// console.log(anotherName);
// console.log(myName)
// console.log(anotherName)

// //Non Primitive (Reference Type) --> Heap Memory

// let userObj = {
//     name: "Devang",
//     upiId: 1212
// }

// let userTwo = userObj;
// userTwo.name = "Riyyyyaa"

// console.log(userObj.name);


/****************** STRING METHOD *************/
//how to declare strings
const name = "Devangini"
const gameName = new String('Valorant')

//concat
// console.log(name + gameName + " okayyy");  //old way

//newer way
// console.log(`My name is ${name} The game I play ${gameName}`);


//Access the key value pairs from gameName
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);        //new to know me, by this we can access all the properties of string
console.log(gameName.toUpperCase());    // change the string in Upper case
console.log(gameName.charAt(4));        // it's the position based on index
console.log(gameName.indexOf('t'))      // In which position the character is


const stringSubstring = gameName.substring(0, 4);    // cannt give negative value also, it only takes up one less string.
console.log(stringSubstring);

const stringSlice = gameName.slice(-5, 4);
console.log(stringSlice);

const stringTrim = "    Devang   ";
console.log(stringTrim.trim());     // only use in white space and line terminators

const url = 'https:Devangini//2002#20.github.dev';
console.log(url.replace('#20', 'okay'));

console.log(url.includes('Devangini'));    // includes returns as true/false

const newName = "Devang@123@gmail@com";
console.log(newName.split('@'));    // it returns an array