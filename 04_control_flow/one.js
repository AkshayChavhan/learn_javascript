// if
const isUserloggedIn = true;
const temperature = 41;

// Basic if-else statement
// if (temperature === 40) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than or equal to 50");
// }

// Simple comparison operators: <, >, <=, >=, ==, !=, ===, !==

// Example with a score variable
// const score = 200;
// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }
// The variable 'power' is not accessible outside the if block.

// const balance = 1000;

// Single-line if statement
// if (balance > 500) console.log("Test"), console.log("Test2");

// Complex if-else if-else ladder
// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Greater than or equal to 900");
// }

// Logical operators (&&, ||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Logical AND (&&)
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// Logical OR (||)
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
