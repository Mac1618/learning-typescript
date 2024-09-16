"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic object
var newUser = {
    name: 'Mac',
    email: 'mac@gmail.com',
    isPaid: false,
};
// Object inside parameter and method
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
    return;
};
createUser({ name: 'Mac', isPaid: false });
// BAD Practice or a BUG
// createUser({ name: 'Warlock', isPaid: true,	email: 'mac@gmail.com', });
// - this code works, it gives an error on 'email' because 'email' not defined in paramater.
// createUser(newUser);
// - typescript should stop me from passing 'email'
// Returning an object
var createCourse = function () {
    return { name: 'Larl', price: 299 };
};
// passing the 'Form' in parameter and return type
var createForm = function (user) {
    return { name: 'Johnny', email: 'john@gmail.com', age: 35 };
};
createForm({ name: 'Johnny', email: 'john@gmail.com', age: 35 });
// assinging value
var myUser = {
    _id: '52-143',
    name: 'Alex',
    email: 'a@a.com',
    isActive: true,
    // credcardDetails: 62143, // this is optional
};
// calling myUser
myUser.name = 'New name'; //        this will work
