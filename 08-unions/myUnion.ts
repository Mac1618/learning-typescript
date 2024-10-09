// Unions is inclution of 1 or more data types
let score: string | number = 23;

score = 22;
score = '57';

// Exampl 2:
type User = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let mark: User | Admin = {
	// User
	name: 'Mark',
	id: 225,
};

mark = {
	// Admin
	username: 'Laurence',
	id: 622,
};

// checking the type in a function parameter
const getDbId = (id: string | number) => {
	// this will give an error
	// id.toLowerCase();

	// verify the type if string
	if (typeof id === 'string') {
		return id.toLowerCase();
	}

	// verify the type if number
	return id + 2;
};

export {};