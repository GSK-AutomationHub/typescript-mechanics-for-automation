/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 */

// Example 1: Tuple with two values
let person: [string, number] = ["Alice", 25];

console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 25
console.log(person);

// Example 2: Tuple with multiple values
let user: [number, string, boolean, number, string]; // Declaring a tuple variable
user = [1, "Steve", true, 20, "Admin"]; // Initializing the tuple

console.log(user);

// Example 3: Iterating over a tuple using a traditional for loop
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

// Example 4: Iterating using a 'for...in' loop (index-based iteration)
for (let i in user) {
    console.log(user[i]); // 'i' represents the index of the tuple
}

// Example 5: Iterating using a 'for...of' loop (value-based iteration)
for (let element of user) {
    console.log(element); // 'element' represents the actual value
}

// Example 6: Tuple Array (Array of Tuples)
let students: [number, string][] = [
    [101, "Smith"],
    [102, "Scott"],
    [103, "Mary"]
];

console.log(students[0]); // Output: [101, "Smith"]
console.log(students[1]); // Output: [102, "Scott"]
console.log(students[2]); // Output: [103, "Mary"]
