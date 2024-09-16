// DEFINING ARRAY VALUE

// EXAMPLE 1: defining a single value to array
// - uses 'const' not a 'type'
// - bot works you can choose what you like to use
const carModel: string[] = [];
const carPrice: Array<number> = [];

carModel.push('GTR 923');
carPrice.push(110500);

// EXAMPLE 2: Using 'type' to define 'cars' array
type CarType = {
	model: string;
	price: number;
};

const cars: CarType[] = [];
cars.push({ model: 'Tesla', price: 119000 });

// EXAMPLE 3: Defining type for Multiple arrays
const carRGB: number[][] = [[225, 42, 243]];
