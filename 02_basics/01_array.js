// Creating arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

// Creating an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// Adding and removing elements at the end of the array
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// Adding and removing elements at the beginning of the array
// myArr.unshift(9);
// myArr.shift();

// Checking if the array includes a specific element
// console.log(myArr.includes(9));

// Finding the index of a specific element in the array
// console.log(myArr.indexOf(3));

// Joining array elements into a string
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// slice and splice methods

console.log("A ", myArr);

// Creating a new array by slicing a portion of the original array
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

// Modifying the original array using splice
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
