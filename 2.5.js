const readlineSync = require("readline-sync");

let fav = 0;



while (fav != 42){
    fav = parseFloat(readlineSync.question('Whats your favorite number?'));

    if(fav != 42){
        console.log("are you serious???????????");
    }
}
