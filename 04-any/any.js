"use strict";
// ANY: as much as possible dont use any
Object.defineProperty(exports, "__esModule", { value: true });
// GOOD PRACTICE
// - define the type
var heroX;
// the function should have stricter checking
var getHeroX = function () {
    return 'spiderman';
};
heroX = getHeroX();
console.log(heroX);
// BAD PRACTICE
// - this automatically uses 'any'
var heroY; //let heroY: any;
var getHeroY = function () {
    return 'batman';
};
heroY = getHeroY();
console.log(heroY);
