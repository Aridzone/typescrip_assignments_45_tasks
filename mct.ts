let car: string = 'subaru';
let age: number = 5;
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Tests for equality and inequality with strings:");
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("\nTests using the lowercase function:");
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'Subaru'? I predict False.");
console.log(car.toLowerCase() == 'Subaru');

console.log("\nNumerical tests involving equality and inequality:");
console.log("Is age == 5? I predict True.");
console.log(age == 5);

console.log("Is age != 3? I predict True.");
console.log(age != 3);

console.log("Is age > 4? I predict True.");
console.log(age > 4);

console.log("Is age < 2? I predict False.");
console.log(age < 2);

console.log("Is age >= 5? I predict True.");
console.log(age >= 5);

console.log("Is age <= 3? I predict False.");
console.log(age <= 3);

console.log("\nTests using 'and' and 'or' operators:");
console.log("Is car == 'subaru' and age == 5? I predict True.");
console.log(car == 'subaru' && age == 5);

console.log("Is car == 'toyota' or age == 5? I predict True.");
console.log(car == 'toyota' || age == 5);

console.log("\nTest whether an item is in an array:");
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));

console.log("\nTest whether an item is not in an array:");
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple'));

console.log("Is 'mango' not in the fruits array? I predict True.");
console.log(!fruits.includes('mango'));