function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function to show the magicians
show_magicians(magician_names);
