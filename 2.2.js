const readlineSync = require("readline-sync");

let min = parseFloat(readlineSync.question("Whats your minimal score? "));
let max = parseFloat(readlineSync.question("Whats your maximal score? "));


 if (min > max) {
  console.log("ERROR"+" You don't understand!!!");
}


else 
{
let current = parseFloat(readlineSync.question("Whats your current score? "));
if ((current > min) &&  (current <  max)) {
 console.log(current);
}
}










