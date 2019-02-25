
const readlineSync = require("readline-sync");

let math = parseFloat(readlineSync.question('How much does gas cost in the Netherlands ?'));
let math1 = parseFloat(readlineSync.question('And how much does gasoline cost in the Netherlands?'));

let total = parseInt(math)*math1;

console.log("The result is "+total);
