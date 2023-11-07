// Step 1: Define an array of animals with a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Step 2: Print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Step 3: Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Step 4: Add a line about what these animals have in common
console.log("Any of these animals would make a great pet!");
