// Step 1: Make an array of usernames
let usernames: string[] = [];

// Step 2: Add an if test to check if the list is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Step 3: Loop through the array and print greetings
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
