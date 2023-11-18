const userEmail = [];

// Check if userEmail is truthy
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values: "0", 'false', " ", [], {}, function(){}

// Check if the array is empty
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than or equal to 80") : console.log("More than 80");
