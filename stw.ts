let locations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

console.log("Original order:", locations);

console.log("Alphabetical order:", [...locations].sort());

console.log("Original order (unchanged):", locations);

console.log("Reverse alphabetical order:", [...locations].sort().reverse());

console.log("Original order (unchanged):", locations);

locations.reverse();
console.log("Reversed order:", locations);

locations.reverse();
console.log("Original order (restored):", locations);

console.log("Alphabetical order:", locations.sort());

console.log("Reverse alphabetical order:", locations.sort().reverse());