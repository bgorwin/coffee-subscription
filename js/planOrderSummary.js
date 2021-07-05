// How do you drink your coffee section
capsuleSelected = () => {
	const capsuleOption = 'Capsule';
	document.getElementById('howDoYouDrink').innerHTML = capsuleOption;
};

filterSelected = () => {
	const filterOption = 'Filter';
	document.getElementById('howDoYouDrink').innerHTML = filterOption;
};

espressoSelected = () => {
	const espressoOption = 'Espresso';
	document.getElementById('howDoYouDrink').innerHTML = espressoOption;
};

// What type of coffee section
singleOriginSelected = () => {
	const singleOrigin = 'Single Origin';
	document.getElementById('whatTypeOfCoffee').innerHTML = singleOrigin;
};

decafSelected = () => {
	const decaf = 'Decaf';
	document.getElementById('whatTypeOfCoffee').innerHTML = decaf;
};

blendedSelected = () => {
	const blended = 'Blended';
	document.getElementById('whatTypeOfCoffee').innerHTML = blended;
};

// How much would you like section
twoFiveZero = () => {
	const size1 = '250g';
	document.getElementById('howMuchGrounds').innerHTML = size1;
};

fiveHundred = () => {
	const size2 = '500g';
	document.getElementById('howMuchGrounds').innerHTML = size2;
};

oneThousand = () => {
	const size3 = '1000g';
	document.getElementById('howMuchGrounds').innerHTML = size3;
};

//Want us to grind them section
wholeBean = () => {
	const wholeBean = 'Wholebean';
	document.getElementById('grindStyle').innerHTML = wholeBean;
};

Filter = () => {
	const filter = 'Filter';
	document.getElementById('grindStyle').innerHTML = filter;
};

Cafetiére = () => {
	const Cafetiére = 'Cafetiére';
	document.getElementById('grindStyle').innerHTML = Cafetiére;
};

// How often should we deliver section
everyWeek = () => {
	const week = 'Every Week';
	document.getElementById('howOften').innerHTML = week;
};

twoWeeks = () => {
	const twoweeks = 'Every 2 Weeks';
	document.getElementById('howOften').innerHTML = twoweeks;
};

everyMonth = () => {
	const month = 'Every Month';
	document.getElementById('howOften').innerHTML = month;
};
