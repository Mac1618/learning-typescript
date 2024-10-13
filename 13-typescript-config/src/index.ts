// -----------------------------------------------------------------------------------------------
// LESSON 17: CLASS - 'Protected' Access Modifier and Inheritance
// - "Inheritance" allows to reuse the functionality of parent class without rewriting it.
// - "Protected" gives access to a variable from parent class to children.

class User17 {
	// changed to protected so it can be accessed to 'subUser17' class
	protected _courseCount = 1;

	private readonly city: string = 'San Pablo City';
	constructor(
		public email: string, //
		public name: string
	) {}

	// won't be accessible outside this class
	private deleteToken() {
		console.log('Token deleted!');
	}

	// get the current value of '_courseCount'
	get courseCount(): number {
		return this._courseCount;
	}

	// set the new value of '_courseCount'
	set courseCount(courseNum: number) {
		if (courseNum <= 1) {
			throw new Error('Course should be more than 1');
		}
		this._courseCount = courseNum;
	}
}

// Inherites the User17 functionality
class subUser17 extends User17 {
	isFamily: boolean = true;

	// change the "_courseCount" value to 4 from the parent
	changeCouserCount() {
		this._courseCount = 4;
	}
}
