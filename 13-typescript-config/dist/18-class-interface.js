"use strict";
// -----------------------------------------------------------------------------------------------
// LESSON 18: CLASS - INTERFACE with CLASS
// - you can implement types morethan the TakePhoto or Story interface have
// Implements TakePhoto iterface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// Implements TakePhoto and Story interface
class Youtube {
    constructor(cameraMode, filter, burst, extra // not implemented from interface
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.extra = extra;
    }
    createStory() {
        console.log('New story is created!');
    }
}
