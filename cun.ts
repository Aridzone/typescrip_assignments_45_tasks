// Step 1: Make a list of current users
let current_users: string[] = ["john", "jane", "mary", "alex", "susan"];

// Step 2: Make a list of new users
let new_users: string[] = ["alex", "peter", "SUSAN", "emma", "joe"];

// Step 3: Loop through new users to check if they're available
for (let new_user of new_users) {
    let usernameTaken = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    
    if (usernameTaken) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
