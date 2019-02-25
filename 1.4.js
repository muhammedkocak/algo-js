const readlineSync = require("readline-sync");
let name = "Kocak";
let firstname = "Muhammed";
let city = "Rotterdam";





let  username = readlineSync.question('Can you give me your name please?');
let lastname = readlineSync.question('Your lastname please?');
let place = readlineSync.question('And where do you live?');
console.log("Hello Your name is." + username + lastname);
console.log("and you live in." + place);


