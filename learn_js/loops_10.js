//loop
// for(for-each, for-in), while, do-while

/* Q1. Write a 'while loop' that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'  */

// solution
// let i = 1;
// let sum = 0;
// while(i <= 5){
//     sum = sum + i;
//     i++;
// }
// console.log(`check for the sum ${sum}`);
// console.log(`ith calculation: ${i}`);

/* Q2. Write a 'while' loop that counts down from 5 to 1.
 stores the numbers in an array naemed 'countdown' */

// let countdown = [];
// let i = 5;
// while(i > 0){
//     countdown.push(i);
//     i--;
// }
// console.log(countdown);

/* Q3. Write a 'do-while' loop that prompts a user to enter their favorite tea type until they enter "stop".
 store each tea type in an array named 'teaCollection' */

//  let teaCollection = [];
//  let tea_type;
// do {
//     tea_type = prompt(`Enter your tea name: (type "stop" to finish)`);
//     if(tea_type !== "stop"){
//         teaCollection.push(tea_type)
//     }
// } while (tea_type !== "stop");

/* Q4. Write a 'do-while' loop that means adds numbers from 1 to 3 and 
        stores the result in a variable named 'total' */
        
        // let total = 0;
        // let k = 1;

        // do {
        //     total += k;
        //     k++;
        // } while (k <= 3);

        // console.log(total);

    /* Q5. Write a 'for' loop that multiplies each element in the 
            array '[2, 4, 6]' by 2 and stores the results in a new array named 'multipliedNumbers.'    
    */
            let multipliedNumbers = [];
            let numbers = [2, 4, 6];
            for(l=0; l < numbers.length; l++){
                // takeNumbers = numbers[l] * 2;
                // multipliedNumbers.push(takeNumbers);
                multipliedNumbers.push(numbers[l] * 2)
            }
            // console.log(multipliedNumbers);
    
                /* Q6. Write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo",  "London"]' and stores
                each city in a new array named 'cityList'. */
    
            let cities = ["Paris", "New York", "Tokyo", "London"];
            let cityList = [];
            
            for(let c = 0; c < cities.length; c++){
                myCity = cities[c];
                // cityList.push(myCity);  // output --> [ 'Paris', 'New York', 'Tokyo', 'London' ]
                // cityList.unshift(myCity); // [ 'London', 'Tokyo', 'New York', 'Paris' ]
    
                // cityList.shift(myCity);  // []
    
                // cityList.push(cities[c]);
            }
            console.log(cityList)