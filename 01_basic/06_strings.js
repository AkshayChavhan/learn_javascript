const name = "hitesh";
const repoCount = 50;

// Using string interpolation to log the name and repo count
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com');

// Accessing individual characters and prototype of the string
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// Displaying the length, converting to uppercase, and accessing characters
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// Extracting substrings using substring and slice
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// Demonstrating string trimming
const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// Working with URLs and replacing characters
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));

// Checking if a string includes a specific substring
console.log(url.includes('sundar'));

// Splitting a string into an array using a delimiter
console.log(gameName.split('-'));
