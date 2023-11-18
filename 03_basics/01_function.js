// Function to log individual characters of the string "HITESH"
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Uncomment the line below to invoke the sayMyName function
// sayMyName();

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2){
    // Uncomment the lines below to log the result instead of returning it
    // let result = number1 + number2;
    // console.log(result);

    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// Uncomment the line below to log the result
// console.log("Result: ", result);

// Function to generate a login message for a given username (default is "sam")
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Uncomment the lines below to log login messages with different usernames
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("john"));

// Function to demonstrate the use of rest parameters in calculating cart prices
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// Uncomment the line below to log the result
// console.log(calculateCartPrice(200, 400, 500, 2000));

// Sample user object
const user = {
    username: "hitesh",
    prices: 199
}

// Function to handle objects and log their properties
function handleObject(anyobject){
    // Logging the username and price properties of the input object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Uncomment the lines below to handle the user object and a custom object
// handleObject(user);
// handleObject({ username: "sam", price: 399 });

// Sample array of numbers
const myNewArray = [200, 400, 100, 600];

// Function to return the second value of an array
function returnSecondValue(getArray){
    return getArray[1];
}

// Uncomment the line below to log the second value of the provided array
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
