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
let loginUser = (name: string = 'saitama', email: string = 'saitama@gmail.com', isPaid: boolean = false) => {
  
}

// call the function
getAdd(2);
getUpper('mark');
signUpUser('Mac', 'mac@gmail.com', true);
loginUser();