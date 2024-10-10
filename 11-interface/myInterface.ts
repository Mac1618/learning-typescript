// INTERFACE
// - NOTE: make sure if you use a library it doesn't have the same name of interface you provide.
// - you can use reopening of the interface
// - you can use inheritance

// Example 1:
interface User {
	readonly dbId: number;
	googleId?: string;
	userId: string;
	email: string;

	// methods 1:
	// startTrial: () => string,
	// getCoupon: (couponName: string, off: number) => number,

	// methods 2:
	startTrial(): string;
	getCoupon(couponName: string, off: number): string;
}

// reopening  of the interface
interface User {
	githubToken: string;
}

// INHERITANCE with Interface
// - with inheritance you can only use 'role' property if you use 'Admin' interface
// -
interface Admin extends User {
	role: 'admin' | 'learner' | 'teacher';
}

// - with inheritance only 'Admin' has the property of 'User' but 'User' don't have access to 'Admin'
//  const newUser: User = () => {}
//  const newUser: Admin = () => {}
const newUser: Admin = {
	dbId: 306090,
	googleId: '11xx22',
	userId: '1j8d2j',
	email: 'm@ml.com',

	// 'Admin' property
	role: 'admin',

	// from 2nd User interface
	githubToken: '99dyne35h',

	// methods
	startTrial: () => {
		return 'You got a 3 days trial';
	},
	getCoupon: (couponName: '10OFF', off: 10) => {
		return `You got a ${off}% with code ${couponName}`;
	},
};

export {};
