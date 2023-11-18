// Singleton
// Object.create

// Object literals

// Creating a symbol for a unique key
const mySym = Symbol("key1");

// Creating an object using object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing object properties using dot notation and square brackets
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// Modifying an existing property
JsUser.email = "hitesh@chatgpt.com";

// Attempting to modify a frozen object (commented out)
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

// Adding new properties to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// Invoking the added methods
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
