const readlineSync = require("readline-sync");

let i = 1;

while (i <= 100) {
i++;
if (i % 2 == 0) {
console.log(i);
}
}


for (i=1;i<=50;i++)

{
    if(i%2 == 0)continue;
    console.log(i)
}
