const accountId = 1222
let accountEmail = "punit@yahoo.com"
var accountPassword = "12345"
accountCity = "Junagadh"
let accountState;

// accountId = 4
accountEmail = "ab@ab.com"
accountPassword = "123456"
accountCity = "Rajkot"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
