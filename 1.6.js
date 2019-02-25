const readlineSync = require("readline-sync");

let math = parseInt(readlineSync.question('give me an integer'));
let math1 = parseInt(readlineSync.question('give me another integer'));

let math2 = math % math1;
console.log("The result is ",math2);
