"use strict";
// -----------------------------------------------------------------------------------------------
// LESSON 14: CLASS - basics
class User14 {
    constructor(email, name) {
        this.city = 'San Pablo City'; // needs a value because it is not being defind in constructor
        this.email = email;
        this.name = name;
    }
}
const newUser14_1 = new User14('one@14.com', 'Mac One - 14');
const newUser14_2 = new User14('two@14.com', 'Mac Two - 14');
console.log('User 14: ', newUser14_1);
console.log('User 14: ', newUser14_2);
// -----------------------------------------------------------------------------------------------
// LESSON 15: CLASS - private, public moderator with practical usage.
//  - there are two ways to use typescript in classs.
//  - "public" is accessible outside the class.
//  - "private" is only accessible inside the class.
class User15 {
    // readonly #city: string = 'San Pablo City' // private e.g. 2
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // 1ST METHOD:
        // public email: string;
        // public name: string;
        // private readonly city: string = 'San Pablo City'; // private e.g. 1
        // constructor(email: string, name: string) {
        // 	this.email = email;
        // 	this.name = email;
        // }
        // 2ND METHOD: PRACTICAL WAY
        // - two ways to use private
        this.city = 'San Pablo City'; // private e.g. 1
    }
}
const newUser15_1 = new User15('one@15.com', 'Mac One - 15');
const newUser15_2 = new User15('two@15.com', 'Mac Two - 15');
console.log('User 15: ', newUser15_1);
console.log('User 15: ', newUser15_2);
// -----------------------------------------------------------------------------------------------
// LESSON 16: CLASS - Getters and Setters
// - 'get' and 'set' is designed to make a 'private' property exposed outside the class
// - NOTE: 'set' should not return anything. Event in ts it don't need to specify the return type.
// - 'set' is use to set the value of your target variable.
// - 'get' is just like a function where it return a value.
class User16 {
    constructor(email, //
    name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = 'San Pablo City';
        this._courseCount = 1;
    }
    // won't be accessible outside this class
    deleteToken() {
        console.log('Token deleted!');
    }
    // get the current value of '_courseCount'
    // - get is mostly used to get a 'private' property value
    // - it can also be use in 'private' property
    get courseCount() {
        return this._courseCount;
    }
    // set the new value of '_courseCount'
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
const newUser16 = new User16('one@16.com', 'Mac One - 16', '33k241');
console.log('User 16: ', newUser16);
