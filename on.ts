// Step 1: Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Step 2: Loop through the array
for (let number of numbers) {
    // Step 3: Use an if-else chain to print the proper ordinal ending
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
