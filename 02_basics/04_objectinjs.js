// Creating an object using object literal notation
const tinderUser = {};

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Creating a regularUser object with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing nested properties in regularUser
// console.log(regularUser.fullname.userfullname.firstname);

// Creating multiple objects and combining them using the spread operator
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Accessing properties in an array of objects
const users = [
    {id: 1, email: "h@gmail.com"},
    {id: 1, email: "h@gmail.com"},
    {id: 1, email: "h@gmail.com"}
];

// Accessing a property in the second user object
// console.log(users[1].email);

// Using Object methods to retrieve keys, values, and entries of an object
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Checking if an object has a specific property
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring assignment to extract a property from an object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Extracting the courseInstructor property using destructuring
const { courseInstructor: instructor } = course;
// console.log(instructor);

// Example JSON-like structure representing an array of objects
[
    {},
    {},
    {}
]
