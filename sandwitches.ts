function make_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("\n");
}

// Call the function with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Bacon");
make_sandwich("Tomato", "Onion", "Mayonnaise", "Mustard");
