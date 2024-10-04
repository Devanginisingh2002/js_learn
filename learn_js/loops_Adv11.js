//level-up Challenges

    /* Q1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolang tea"] and stops the loop when it finds "chai".
        Store all teas before "chai" in a new array named 'selectedTeas. */

    // let arrayChai = ["green tea", "black tea", "chai", "oolang tea"];
    // let selectedTeas = [];

    // for (let i = 0; i < arrayChai.length; i++) {

    //     if(arrayChai[i] === "chai"){
    //         break;
    //     }
    //     selectedTeas.push(arrayChai[i]);
    // }
    // console.log(selectedTeas);

    /* Q2. Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
            store the other cities in a new array named 'visitedCities'.  */

    // let cities = ["London", "New york", "Paris", "Berlin"];
    // let visitedCities = [];

    // for (let j = 0; j < cities.length; j++) {
    //     if(cities[j] === "Paris"){
    //         continue;
    //     }
    //     visitedCities.push(cities[j]);
    // }
    // console.log(visitedCities);

    /* Q3. Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found.
        Store the numbers before '4' in an array named 'smallNumbers'.*/

    // let arrayNum = [1, 2, 3, 4, 5];
    // let smallNumbers = [];
    // for (const num of arrayNum) {
    //   if(num === 4){
    //     break;
    //   }
    //   smallNumbers.push(num)
    // }
    // console.log(smallNumbers);

    /* Q4. Use a 'for-of' loop to iterate through the array ' ["chai", "green tea", "herbal tea", "black tea"]' and skip '"herbal tea"'.
        Store the other teas in an array named 'preferredTeas. */

    // let teas = ["chai", "green tea", "herbal tea", "black tea"];
    // let preferredTeas = [];

    // for(const checkTea of teas){
    //   if(checkTea === "herbal tea" || checkTea === "Herbal Tea"){
    //     continue;
    //   }
    //   preferredTeas.push(checkTea)
    // }
    // console.log(preferredTeas)

    /*Q5. Use a 'for-in' loop to loop through an object containing city populations.
    Stop the loop when the population of '"Berlin"' is found and store all previous cities' populations in a new object named 'cityNewPopulations'.

    let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
    ｝； */

    // let citiesPopulation = {
    //     "London": 8900000,
    //     "New York": 8400000,
    //     "Paris": 2200000,
    //     "Berlin": 3500000
    // };
    // let cityNewPopulations = {};
    
/*  console.log(Object.keys(citiesPopulation)); // access the keys
    console.log(Object.values(citiesPopulation)); // access the valuess */

    // for (const city in citiesPopulation) {
    //     if(city === "Berlin"){
    //         break;
    //     }
    //     //key = value
    //     cityNewPopulations[city] = citiesPopulation[city]  
    // }
    // console.log(cityNewPopulations)

    /* Q6. Use a 'for-in' loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named 'largeCities' 
    
    let worldCities = {
        "Sydney": 5000000,
        "TOkyo": 9000000,
        "Berlin": 3500000,
        "Paris": 2200000
    };
    */
    
    // let worldCities = {
    //     "Sydney": 5000000,
    //     "TOkyo": 9000000,
    //     "Berlin": 3500000,
    //     "Paris": 2200000
    // };
   
    // let largeCities = {};
    
    // for (const city in worldCities) {
    //     if(worldCities[city] < 3000000){
    //         continue;
    //     }
    //     largeCities[city] = worldCities[city]
    // }
    // console.log(largeCities);


/* Q7. Write a 'forEach' loop that iterates through the array 
    `["earl grey", "green tea", "chai", "oolang tea"]`.
        Stop the loop when "chai" is found, and store all 
        previous tea types in an array named 'availableTeas'. 
    */
           
    // let teaTypes = ["earl grey", "green Tea", "chai", "ooland Tea"]
    // let availableTeas = [];
    // teaTypes.forEach(function (teas){
    //     if(teas === "chai"){
    //         return;
    //     }
    //     availableTeas.push(teas)
    // });
    // console.log(availableTeas);

    /* Q8. Write a 'forEach' loop that iterates through the array
    '["Berlin", "Tokyo", "Sydney", "Paris"]'.
    Skip "Sydney" and store the other cities in a new array named 
    'traveledCities'.
    */
//    let cities = ["Berlin", "Tokyo", "Sydney", "Paris"]
//    let traveledCities = [];

//    cities.forEach(function (city) {
//         if(city === "Sydney"){
//             return;
//         }
//         traveledCities.push(city)
//    });
//    console.log(traveledCities);


    /* Q9. Write a 'for' loop that iterates through the array [2, 5, 7, 9].
    Skip the values '7' and multiply the resy by 2. Store the results in a new array named 'doubledNumbers'. */

    // let arrayNums = [2, 5, 7, 9];
    // let doubledNumbers = [];

    // for(let i = 0; i < arrayNums.length; i++){
    //     if (arrayNums[i] === 7){
    //         continue;
    //     }
    //     doubledNumbers.push(arrayNums[i] * 2);
    // }
    // console.log(doubledNumbers);

    /* Q10. Use a 'for-of' loop to iterate through the array
        ["chai", "green Tea", "black tea", "jasmine tea", "herbal tea" ] 
        and stop when the length of the current tea name is greater than 10.
        Store the teas iterated over in an array named 'shortTeas' */

        let teasOptions = ["chai", "green Tea", "black tea", "jasmine tea", "herbal tea" ];
        let shortTeas = [];
        
        for (const teas of teasOptions) {
           if(teas.length > 10){
            break;
           } 
           shortTeas.push(teas);
        }
        console.log(shortTeas);
