// INTERFACE

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

const newUser: User = {
	dbId: 306090,
	googleId: '11xx22',
	userId: '1j8d2j',
	email: 'm@ml.com',

	// methods
	startTrial: () => {
		return 'You got a 3 days trial';
	},
	getCoupon: (couponName: '10OFF', off: 10) => {
		return `You got a ${off}% with code ${couponName}`;
	},
};

export {};
