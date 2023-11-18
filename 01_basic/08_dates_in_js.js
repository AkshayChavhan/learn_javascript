const score = 400;
// Logging the value of the 'score' variable
// console.log(score);

const balance = new Number(100);
// Logging the value of the 'balance' variable
// console.log(balance);

// Using Number methods to manipulate and display information about 'balance'
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// Displaying a number with a specified precision using toPrecision
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// Formatting 'hundreds' using the locale string for Indian English
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Logging various mathematical operations using the Math object
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// Generating random numbers using Math.random()
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Generating a random number within a specified range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
