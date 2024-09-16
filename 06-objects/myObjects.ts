// basic object
const newUser = {
	name: 'Mac',
	email: 'mac@gmail.com',
	isPaid: false,
};

// Object inside parameter and method
const createUser = ({ name: string, isPaid: boolean }) => {
	return;
};
createUser({ name: 'Mac', isPaid: false });

// BAD Practice or a BUG
// createUser({ name: 'Warlock', isPaid: true,	email: 'mac@gmail.com', });
// - this code works, it gives an error on 'email' because 'email' not defined in paramater.

// createUser(newUser);
// - typescript should stop me from passing 'email'

// Returning an object
const createCourse = (): { name: string; price: number } => {
	return { name: 'Larl', price: 299 };
};

// to prevent errors
export {};
