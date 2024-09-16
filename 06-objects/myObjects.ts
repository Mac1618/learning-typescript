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

// -----------------------------------------------------------------------------------------------

// PART 2: TYPE ALIASES
// Defining the 'Form' variables and types
type Form = {
	name: string;
	email: string;
	age: number;
};

// passing the 'Form' in parameter and return type
const createForm = (user: Form): Form => {
	return { name: 'Johnny', email: 'john@gmail.com', age: 35 };
};
createForm({ name: 'Johnny', email: 'john@gmail.com', age: 35 });

// to prevent errors
export {};

// -----------------------------------------------------------------------------------------------

// PART 3:
type User3 = {
	readonly _id: string; // cannot be modified
	name: string;
	email: string;
	isActive: boolean;
	credcardDetails?: number; // optional
};

// assinging value
let myUser: User3 = {
	_id: '52-143',
	name: 'Alex',
	email: 'a@a.com',
	isActive: true,
	// credcardDetails: 62143, // this is optional
};

// MIX and MATCH of 'type'
// - useful when utilizing an existing type
type cardNumber = {
	cardNumber: number;
};

type cardDate = {
	cardDate: string;
};

// - using 'cardNumber' and 'cardDate' is good example but adding '& { cvv: number }' is not.
// - it would still makes the job done
type cardDetails = cardNumber &
	cardDate & {
		cvv: number;
	};

const newCard: cardDetails = {
	cardNumber: 99222,
	cardDate: '09-16-2024',
	cvv: 77392,
};

// calling
console.log(newCard);
myUser.name = 'New name';
// myUser._id = 'new value'

export {};
