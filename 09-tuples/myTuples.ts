// Strict order of types
// Example 1:
let tUser: [string, number, boolean] = ['Hello', 16, true];

// Problem with Tuples
// Example 2:
type User = [string, number];
const newUser: User = ['Mark', 18];

// problems
newUser[1] = 44; // the new user array value is changable
newUser.push(22); // can push a string or number but not a boolean inside a defined array

export {};
