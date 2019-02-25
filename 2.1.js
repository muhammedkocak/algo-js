
const readlineSync = require("readline-sync");


let age = readlineSync.question('Can you confirm your age please?');


if (age >= 18) {
  console.log("You probably are and adult");
}
else {
  console.log("You probably are a child");
}
