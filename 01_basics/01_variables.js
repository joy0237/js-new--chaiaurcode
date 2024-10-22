const accountId = 144553;
let accountEmail = "joyshree.27.03.2k@gmail.com";
var accountPassword = "0237";
accountCity = "Kolkata"; // not a good way to declare
let accountState;
/* const datatypes are for values which will never change
let and var datatypes are for values which are changeable
var is not used as in js [scope {}] didn't have a control so let is used were the peoblem is removed mostly*/
// accountId = 2; change not accepted
accountEmail = "abd@gmail.com";
accountPassword = "212121";
accountCity = "Leh"
console.log(accountId);
console.table ([accountId, accountEmail, accountPassword, accountCity, accountState]);
// prefer not to use var because of the use in block scope and functional scope
// if a varible doesn't have a value it shows undefined 