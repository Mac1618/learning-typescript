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
// - this code works normal it gives an error if 'email' is not defined in paramater.
// createUser(newUser);
// - here if we pass 'newUser' suddenly email is not giving me an error
// Returning an object
var createCourse = function () {
    return { name: 'Larl', price: 299 };
};
