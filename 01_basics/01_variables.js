const accoubntId = 12255
let accountEmail = "shreya@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

//accountId =2 // not allowed

accountEmail = "ray@gmail.com"
accountPassword = "121212"
accountCity = "Pune"

console.log(accoubntId);

/*
Prefer not to use var because of issue in block scope 
and functional scop
*/

console.table([accoubntId, accountEmail, accountPassword, accountCity]);

