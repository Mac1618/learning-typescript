// ANY: as much as possible dont use any

// GOOD PRACTICE
// - define the type
let heroX: string;

// the function should have stricter checking
const getHeroX = () => {
	return 'spiderman';
};

heroX = getHeroX();
console.log(heroX);

// BAD PRACTICE
// - this automatically uses 'any'
let heroY; //let heroY: any;

const getHeroY = () => {
	return 'batman';
};

heroY = getHeroY();
console.log(heroY);

export {};
