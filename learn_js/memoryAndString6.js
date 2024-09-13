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
const gameName = new String('Valorant ')

//concat
// console.log(name + gameName + " okayyy");  //old way

//newer way
// console.log(`My name is ${name} The game I play ${gameName}`);


//Access the key value pairs from gameName
console.log(gameName[0]);