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
console.log(createdDate.toDateString());

let moreDate = new Date(2023, 0, 23, 5 ,3)
console.log(moreDate.toLocaleString());

let checkDate = new Date("2023-01-14");     // yyyy-mm-dd
console.log(checkDate.toLocaleString());

//Time Stamp

