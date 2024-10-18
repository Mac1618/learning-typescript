"use strict";
// -----------------------------------------------------------------------------------------------
// LESSON 19: CLASS - Abstract vs Interface
// - "abstract class" uses extend just like "inheritance"
// - "asbstract class" is like a blueprint
// - "asbstract class" can use function just like normal class
// - "abstract cannot" create an instance just like an "normal class"
// - the "normal class" who extends the "abstract class" can create an instance with abstract class functionality
class TakePhoto2 {
    constructor(cameraMode, //
    filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // can use normal function
    getReelTime() {
        // some complex calculation here
        return 8;
    }
}
// - with normal "class" this will work
// - with "abstract class" this will give an error
// const newPhoto = new TakePhoto2('normal', 'white beard');
class Tiktok extends TakePhoto2 {
    constructor(cameraMode, //
    filter, burst) {
        // needs to pass the required value from "TakePhoto2"
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // from TakePhoto2
    getHopia() {
        console.log('Here is your hopia!');
    }
}
// - "Tiktok" can create an instance with "TakePhoto2" if it's "extends"
const newPhoto = new Tiktok('normal', 'white beard', 7);
// From TakePhoto2
console.log(newPhoto.getReelTime());
