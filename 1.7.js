const readlineSync = require("readline-sync");

let shoe = parseInt(readlineSync.question('give me your shoe size:'));
let birth = parseInt(readlineSync.question('give me your birth year:'));

let math =((((shoe * 2) +5) *50) - birth) + 1766;
console.log("The result is ",math);
