// -----------------------------------------------------------------------------------------------
// LESSON 16: CLASS - Getters and Setters
// - 'get' and 'set' is designed to make a 'private' property exposed outside the class
// - NOTE: 'set' should not return anything. Event in ts it don't need to specify the return type.
// - 'set' is use to set the value of your target variable.
// - 'get' is just like a function where it return a value.

class User16 {
	private readonly city: string = 'San Pablo City';
	private _courseCount = 1;
	constructor(
		public email: string, //
		public name: string,
		private userId: string
	) {}

	// won't be accessible outside this class
	private deleteToken() {
		console.log('Token deleted!');
	}

	// get the current value of '_courseCount'
	// - get is mostly used to get a 'private' property value
	// - it can also be use in 'private' property
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

const newUser16 = new User16('one@16.com', 'Mac One - 16', '33k241');
console.log('User 16: ', newUser16);
