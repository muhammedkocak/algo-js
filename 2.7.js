const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question("enter a number : "));
let sum = 0;
for (let i = 0; i < number; i++) {
    sum += parseInt(readlineSync.question("enter a number : "));
}

console.log(sum);