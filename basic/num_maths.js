const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));


const otherNumber = 123.8976

console.log(otherNumber.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//*************. Maths ************//

console.log(Math);
// learn more math libary in javascript in the search engine that you want to prefer;


console.log(Math.random());//In this math function you get random value from 0-1 value

// if we want to get the randm value in between 10 -20;
const max = 20;
const min = 10;
console.log(Math.floor((Math.random()*(max-min+1)+min)));
