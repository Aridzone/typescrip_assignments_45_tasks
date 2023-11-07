function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Copy the array to a new one and add "the Great"
let great_magicians = make_great([...magician_names]);

// Show the original magicians
console.log("Original Magicians:");
show_magicians(magician_names);

// Show the modified magicians (with "the Great" added)
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
