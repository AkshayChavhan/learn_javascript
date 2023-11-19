// For Loop
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        //console.log("5 is the best number");
    }
    //console.log(i);
}

// Nested For Loop
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop ${i}`);
        //console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Array Iteration
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    //console.log(myArray[index]);
}

// Break and Continue
// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}
