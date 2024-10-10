// Providing a strict choice

// Example 1:
// NOTE IMPORTANT: add const in enum to make the converted js code shorter
const enum seatChoice {
	// sample 1: value would be incremental 0, 1, 2, 3
	// AISLE,
	// MIDDLE,
	// WINDOW,
	// FOUTH,

	// sample 2:
	// - you can provide a string or bolean
	// - you want to make the next value incremental you have a provide a number initializer
	AISLE = 'aisle',
	MIDDLE = 'middle',
	WINDOW = 'window',
	FOUTH = 4,
	FIFTH,
	SIXTH,
}

const mySeat = seatChoice.WINDOW;
export {};
