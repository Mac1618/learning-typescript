"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// assigning greetings as a sting
var greetings = 'Hello World';
// so later on if someone tried to change the value to greetings with a different type.
// It should give us an error.
greetings = 2;
greetings = true;
// automatically assign num to number
var num = 6;
num = 'this is string';
// NOTE: typescript knows what method to use if its a string e.g:
greetings.toLocaleLowerCase();
console.log(greetings, num);
