// assigning greetings as a sting
let greetings: string = 'Hello World';

// if someone tried to change the value to greetings to a different type it should give us an error e.g:
// greetings = 2;    
// greetings = true;

// automatically assign num to number
let num = 6;

// NOTE: typescript knows what method to use if its a string e.g:
greetings.toLocaleLowerCase();
console.log(greetings, num);

// used to temporarily remove error when using let
export {};


