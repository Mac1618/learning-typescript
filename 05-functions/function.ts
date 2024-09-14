// PART 1:
// function parameter type need to be define or else it will use default 'any' type

// Single Parameter
function getAdd(num: number) {
	return num + 1;
}

function getUpper(val: string) {
	return val.toUpperCase();
}

// Multiple Parameter
function signUpUser(name: string, email: string, isPaid: boolean) {
	return { name, email, isPaid };
}

// Defining default value and type
// - note parameters that has default value are not required
let loginUser = (
	name: string = 'saitama',
	email: string = 'saitama@gmail.com',
	isPaid: boolean = false
) => {
	return { name, email, isPaid };
};

// PART 2: RETURN TYPE OF FUNCTION
// return a single type of string
const getValue = (val: string): string => {
	return val;
};

// return type with mapping an array of string
const heroes = ['thor', 'spiderman', 'ironman'];
heroes.map((val): string => {
	return `My selected hero is ${val}`;
});

// consoles what the error is
// void: don't return a value, doesn’t have any return statements, or doesn’t return any explicit value
const consoleError = (errMsg: string): void => {
  console.log(`The error is ${errMsg}`);
}

// handles the what will happen if there is an error
// never: values which are never observed and throws an exception or terminate execution of the program.
const handleError = (errMsg: string): never => {
  throw new Error(`The error is ${errMsg}`);
}



// call the function
getAdd(2);
getUpper('mark');
signUpUser('Mac', 'mac@gmail.com', true);
loginUser();

getValue('Simply handsome me');
consoleError("Wrong syntax");
handleError('Invalid username or password');
