/* Q1. Declare an array named 'TeaFlavors', that contains
    the strings "GreenTea", "BlackTea", "oolangTea".
    Access the first element of an array and store it in a variable
    name 'firstTea'.
*/
// let TeaFlavors = ["GreenTea", "BlackTea", "oolangTea"]
// let firstTea = TeaFlavors[0];
// console.log(firstTea);


/*Q2. Declare an array name 'cities' containing "London", "Tokyo", "Paris", and "Newyork".
Access the third element in the array and store it in a variable
named 'favoriteCity' */
// let cities = new Array("London", "Tokyo", "Paris", "Newyork");
// let favoriteCity = cities[2];
// console.log(favoriteCity);

/* Q3. You have an array named 'teaTypes' containing 
    "herbal tea", "white tea", and "masala chai".
    Change the second element of an array to "jasmine tea" */
    // let teaTypes = ["herbal tea", "white tea", "masala chai"];
    // // console.log(teaTypes);
    // teaTypes[1] = "jasmine tea";
    // console.log(teaTypes);

   /* Q4. Declare an array named 'citiesVisited' containing "Mumbai" and "Goa".
    Add "Berlin" to the array using 'push' method */
    //solution: ways of adding elements 
    
    // 1. exact to the position
    // let citiesVisited = ["Mumbai", "Goa"];
    // citiesVisited[2] = "Berlin";    // for big number array, cannt count the array elements
    // console.log(citiesVisited);
    
    // 2. With the help of .length
    // let citiesVisited = ["Mumbai", "Goa"]
    // citiesVisited[citiesVisited.length] = "Berlin"
    // console.log(citiesVisited)
    
    //3. using 'push' method
    // let citiesVisited = ["Mumbai", "Goa"]
    // citiesVisited.push("Berlin");
    // console.log(citiesVisited)
    

    /* Q5. You have an array named 'teaOrders' with "chai", "iced tea", "matcha" and "earl grey".
        Remove the last element of the array using the 'pop'
        method and store it in a variable named 'lastOrder'.
    */
//    let teaOrders = ["chai", "iced tea", "match", "earl grey"];
//    let lastOrder = teaOrders.pop();
//    console.log(lastOrder)
//    console.log(teaOrders)

    /* Q6. You have an array named 'popularTeas' containing "green tea", "oolang tea", and "chai".
        crete a soft copy of this array named 'softCopyTeas' */

        // let popularTeas = ["green tea", "oolang tea", "chai"]
        // let softCopyTeas = popularTeas;
        // // popularTeas.pop();  //manipulation happens an original array.
        // console.log(popularTeas);
        // console.log(softCopyTeas);


    /* Q7. You have an array named 'topCities' containing 
    "Berlin", "Singapore", and, "New York".
    Create a hard copy of this array named 'hardCopyCities'.
    */

    let topCities = ["Berlin", "Singapore", "New York"];
    let hardCopyCities = [...topCities];    //copy the original array --> Rest and Spread Operator

    //second way --> slice method()
    // let hardCopyCities = topCities.slice();

    // console.log(hardCopyCities);
    // console.log(topCities);

    // console.log([...hardCopyCities]);


    /* Q8. You have two arrays: "europeanCities", containing "paris", and "Rome", and asianCities, containing "Tokyo", and "Bangkok".
     Merge these two arrays into a new array named 'worldCities'.
    */
    let europeanCities = ["paris", "Rome"]
    let asianCities = ["Tokyo", "Bangkok"]
    let worldCities = [europeanCities.concat(asianCities)];
    // console.log(typeof worldCities);

     /* Q9. You have an array named 'teaMenu' containing "masala chai", "oolong tea", "green tea", and "earl grey"
     Find the length of the array and store it in a variable named 'menuLength'. */

     let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];
     let menuLength = teaMenu.length;
    //  console.log(menuLength);


    /* Q10. You have an array named 'cityBucketList' containing
    "Kyoto","London", "Cape Town", and "Vancouver",
    Check if "London" is in the array and store the result in a variable named 'isLondonInList
    */
    let cityBucketList = ["kyoto", "London", "Cape Town", "Vancouver"];
    let isLondonInList = cityBucketList.includes("London");
    console.log(isLondonInList);