console.log("Devangini");

const accountId = 12121
let accountEmail = "dev@gmail.com"
var accountPassword = "12345"
accountCity = "Banglore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])