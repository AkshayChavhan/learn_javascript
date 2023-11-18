// Uncomment the line below to see the effect of variable shadowing with let and const
// console.log("OUTER: ", a);

function one(){
    // Variable declared with const within function one
    const username = "hitesh"

    function two(){
        // Variable declared with const within function two
        const website = "youtube"
        console.log(username);
    }

    // Uncomment the line below to see the effect of variable scope
    // console.log(website);

    // Invoking function two
    two()
}

// Uncomment the line below to invoke function one
// one()

if (true) {
    // Variable declared with const in the outer block
    const username = "hitesh"

    if (username === "hitesh") {
        // Variable declared with const in the inner block
        const website = " youtube"
        // Uncomment the line below to see the effect of variable shadowing
        // console.log(username + website);
    }

    // Uncomment the line below to see the effect of variable scope
    // console.log(website);
}

// Uncomment the line below to see the effect of variable scope
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declaration (hoisted) - can be called before the declaration
console.log(addone(5))

function addone(num){
    return num + 1
}

// Function expression (not hoisted) - will result in an error if called before the declaration
// Uncomment the line below to see the error
// addTwo(5)

const addTwo = function(num){
    return num + 2
}
