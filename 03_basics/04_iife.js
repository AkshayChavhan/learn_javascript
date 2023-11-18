// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// IIFE with an arrow function and parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
