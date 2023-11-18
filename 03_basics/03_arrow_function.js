const user = {
    username: "hitesh",
    price: 999,

    // Method within the user object to display a welcome message
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// Uncomment the lines below to invoke the welcomeMessage method and modify the username
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// Uncomment the line below to see the context of "this" outside any function or object
// console.log(this);

// Function declaration (hoisted) - Uncomment the lines below to invoke the function
// function chai(){
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai();

// Function expression (not hoisted) - Uncomment the lines below to invoke the function
// const chai = function () {
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai();

// Arrow function - Uncomment the lines below to invoke the arrow function and observe the context of "this"
// const chai =  () => {
//     let username = "hitesh";
//     console.log(this);
// }
// chai();

// Arrow function returning an object - Uncomment the lines below to invoke the arrow function and log the result
// const addTwo = (num1, num2) => ({username: "hitesh"});
// console.log(addTwo(3, 4));

// Arrow function for adding two numbers - Uncomment the lines below to invoke the arrow function and log the result
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4));

// Arrow function using concise syntax for adding two numbers - Uncomment the lines below to invoke the arrow function and log the result
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4));

// Array method forEach using arrow function - Uncomment the lines below to iterate through the array
// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach((element) => console.log(element));
