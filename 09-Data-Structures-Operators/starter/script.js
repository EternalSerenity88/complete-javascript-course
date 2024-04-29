'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restarauntName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  // arrays
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // objects
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`
    );
  },

  // Spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // Rest operator
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// OBJECT DESTRUCTURING =========================================================>

// Passing specific object arguments..... ??
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Basic destructuring object method
const { restarauntName, openingHours, categories } = restaurant;
console.log(restarauntName, openingHours, categories);

// Renaming properties of the object
const {
  restarauntName: newName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(newName, hours, tags);

// Renaming and setting default value[] at the same time
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating/overwriting variables
let w = 111;
let v = 999;
const obj = { w: 23, v: 7, cc: 14 };

({ w, v } = obj); // Use parentheses!
console.log(w, v);

// Nested objects + renaming
const {
  fri: { open: o, close: e },
} = openingHours;
console.log(o, e);

// ARRAY DESTRUCTURING =================================================================>

// Most basic array destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Basic destructuring arrays method
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Selecting specific elements from the array of the object
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables within the array
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receiving 2 choosen elements, using created "order" function and
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring elements from nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [p, , [s, k]] = nested;
console.log(p, s, k);

// Setting default values in case something will not match
const [m = 1, q = 1, r = 1] = [8, 9];
console.log(m, q, r);

// SPREAD & REST OPERATORS ======================================================>

// Not efficient
const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);

// Opens up the array and extracts it values
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS!
// Destructuring string using spread operator
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Implementing prompt function
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Making copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.restarauntName);

// REST
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Passing several ANY quantity of arguments
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 465, 6, 2, 3);
add(45, 6546, 4, 5, 5);

const xx = [23, 5, 7];
add(...xx);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// LOOPING ARRAYS/OBJECTS, OPTIONAL CHAINIG, NULLISH COALESCING OPERATOR (??) ==============>

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu3) console.log(item);

for (const item of menu3.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// item[0] - gives an index
// item[0]+1 - to start from 1 (skip 0)
// item[1] - gives value

// destructured version
for (const [index, value] of menu3.entries()) {
  console.log(`${index + 1}: ${value}`);
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // ? - check if openingHours[day] exists and ?? to show '0'
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// With methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// Looping objects
// Looping property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Looping VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// SETS ================================================================>

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Converting array to set and back to array without repeated values, using spread operator
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('skylarcarrington').size);

// MAPS ================================================================================>

const rest = new Map();
rest.set('name', 'Classico Italiano'); // similar to 'add', adds data stracture, but also RETURNS
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); // get value to console by the key
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // checks if it has such a key
rest.delete(2); // to delete property
console.log(rest);
console.log(rest.size); // show the 'the length' of the map
// rest.clear(); // to delete everything

// How to use an array as a key
const arr1 = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Using DOM element as a key
rest.set(document.querySelector('h1'), 'Heading');

// Another way to create MAPS using arrays as arguments, each for a propety and within another array
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// Using prompt to compare input data from the map structure
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// Converting maps to an array using spread operator
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// STRINGS ================================================================================>

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// direct indexing
console.log('B737'[0]);

console.log(airline.length);
// direct length method
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
