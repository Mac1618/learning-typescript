"use strict";
console.log('Typescript is here');
// -----------------------------------------------------------------------------------------------
// LESSON 14: CLASS - basics
class User {
    constructor(email, name) {
        this.city = 'San Pablo City'; // needs a value because it is not being defind in constructor
        this.email = email;
        this.name = name;
    }
}
const newUser1 = new User('one@mc.com', 'Mac One');
const newUser2 = new User('two@mc.com', 'Mac Two');
console.log('User 1: ', newUser1);
console.log('User 2: ', newUser2);
