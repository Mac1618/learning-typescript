// DEFINING ARRAY VALUE
// - NOTE: A type cannot be changed after being created.

// EXAMPLE 1 - defining a single value to array
// - uses 'const' not a 'type'
// - both 'string[]' and 'Array<number>' works you can choose what you like
const carModel: string[] = [];
const carPrice: Array<number> = [];

carModel.push('GTR 923');
carPrice.push(110500);

// EXAMPLE 2 - Using 'type' to define 'cars' array
type CarType = {
	model: string;
	price: number;
};

const cars: CarType[] = [];
cars.push({ model: 'Tesla', price: 119000 });

// EXAMPLE 3 - Defining type for Multiple arrays
const carRGB: number[][] = [
	[225, 42, 243],
	[0, 0, 0],
];

// Having 2 types in ARRAY
const data: number[] = [1, 2, 3]; // only number
const data2: string[] = ['3', '2', '1']; // only string
const data3: (number | string)[] = [1, '2', 3, '4']; // mix of array and string

// bad practice in mixing 2 types inside an array
const data4: string[] | number[] = [1, 2, 3]; // either only number or only string

// defining a data that are not changable
let seatAllotment: 'aile' | 'middle' | 'window';
seatAllotment = 'aile';
// seatAllotment = 'pilot';

export {};
