//datatypes
const account_id = 23; //value is not changed 
let account_email = "wolf@932700" // we can used the let because there is no scope issuess 
var account_password = "12345" //we cannot used  beacuse there is no scope like{}
account_city = "Ahmedabad"; //it allowed 

let account_state; //if we can not giveanytime of value to the variable it can gives undefined

// account_id = 2 //not allowed
console.log(account_id);
account_email = "hc.com"
account_password = "212121";
account_city = "banglore"; 


/* 
prefer not to used var
because there is isusses in block scope and function scope
*/

console.table([account_email,account_password,account_city,account_state])