"use strict";
// -----------------------------------------------------------------------------------------------
// LESSON 17: CLASS - 'Protected' Access Modifier and Inheritance
// - "Inheritance" allows to reuse the functionality of parent class without rewriting it.
// - "Protected" gives access to a variable from parent class to children.
class User17 {
    constructor(email, //
    name) {
        this.email = email;
        this.name = name;
        // changed to protected so it can be accessed to 'subUser17' class
        this._courseCount = 1;
        this.city = 'San Pablo City';
    }
    // won't be accessible outside this class
    deleteToken() {
        console.log('Token deleted!');
    }
    // get the current value of '_courseCount'
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
// Inherites the User17 functionality
class subUser17 extends User17 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    // change the "_courseCount" value to 4 from the parent
    changeCouserCount() {
        this._courseCount = 4;
    }
}
