/* Date: It is Object, Calculate in milliseconds (1 january 1970)
Temporal API: Proposal for now
*/

/*
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //converts into string

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());        */


// Created a date
let createdDate = new Date(2023, 0 , 23)    //In date month starts with 0 
// console.log(createdDate.toDateString());

let moreDate = new Date(2023, 0, 23, 5 ,3)
// console.log(moreDate.toLocaleString());

let checkDate = new Date("2023-01-14");     // yyyy-mm-dd
// console.log(checkDate.toLocaleString());

//Time Stamp
let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(checkDate.getTime());
// console.log(Math.floor(Date.now()/1000));

//For particular date, year and more --> get method

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getUTCDate());

