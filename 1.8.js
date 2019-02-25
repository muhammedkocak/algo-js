const readlineSync = require("readline-sync");


let questions = 7;


let firstname = readlineSync.question('Can you give me your name please?');
questions--
console.log("U have ",questions,"questions remaining");
let lastname = readlineSync.question('Your lastname please?');
questions-- 
console.log("U have ",questions,"questions remaining");
let place = readlineSync.question('And where do you live?');
questions--
console.log("U have ",questions,"questions remaining");
let math = parseInt(readlineSync.question('Whats your age?'));
questions--
console.log("U have ",questions,"questions remaining"); 
let math1 = parseInt(readlineSync.question('and your shoe size?'));
questions--
console.log("U have ",questions,"questions remaining"); 
let mathfl = parseFloat(readlineSync.question('How much does gas cost in the Netherlands ?'));
questions--
console.log("U have ",questions,"question remaining"); 
let mathfl1 = parseFloat(readlineSync.question('And how much does gasoline cost in the Netherlands?'));



console.log("Well his name is:  "+lastname+"."+"and he call himself: "+firstname+"."+"But hes almost:  " +(math++).toString()+"!!! "+"and that means he gets older and older :) . "+"He's living in:  "+place+","+"and: "+math1.toString()+","+"is not his housenumber.... ");
console.log("Why is gas: $."+mathfl.toString()+",- per gallon"+","+"more expensive than gasoline: "+"$."+mathfl1.toString()+",- per gallon "+ "in the Netherlands???");





