'use strict';

const bookings = [];

const createdBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassenegers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createdBooking('LH123');
createdBooking('LH123', 2, 800);
createdBooking('LH123', 2);
createdBooking('LH123', 5);
createdBooking('LH123', undefined, 1000);

// =============================================================================

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    // alert('Checked in');
  } else {
    // alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Higher-order functions =========================================================

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};
// document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam', 'Skylar'].forEach(high5);

// Function returning functions ================================================

// Arrow method alternative
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
greetArr('Hi')('Jonas');

// The call and apply methods ========================================================

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} 
        flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // Possible becuase JS has first class functions (do not need to copy whole function)

// book(23, 'Sarah Williams'); NOT WORK

// Call method, to manipulate 'this' according to the object used
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method, same as CALL, but takes arguments from the array
const flightData = [583, 'George cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // Can replace APPLY METHOD

// BIND ==========================================================================
// creates function with already set relevant this for every object

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Skylar Carrington');
bookEW23('Karina Agarkova');

// With Event Listeneres
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this.planes);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlanes();

// in her we use bind to direct this to 'lufthansa object',
// because otherwiase this will be direceted to attached elemeny (button in this case)
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// Partial application (preset parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Another function to fix rate at 0.23, and make it able to input only one argument - value
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// function calling a function examaple doing same thing as bind
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT(23));

// Immediatetly Invoked Function Expressions (IIFE) ======================================

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// By adding parenthesses we transformed statement to expression (IIFE)
(function () {
  console.log('This will never run again');
  const isPrivate = 23; // this data is private (accessible only withing the function's scope)
})(); // () Immidiately to call it

// arrow version
(() => console.log('This will never run again'))();

// Closures =======================================================================

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); // to see closure, unders 'scopes'

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// g function is no longer there, but f keeps it's variables in a backpack
g(); // Has to be called first in order for f() to be able run afterwards on it's own
f();
console.dir(f); // has g in a scope

// Re-assigning f function
h();
f();
console.dir(f); // has h already instead

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // has a priority as a closure in  executing over 'perGroup' variable

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // 1000 ms to execute the included function

  console.log(`Will start boarding in ${wait} seconds `);
};

const perGroup = 1000;
boardPassengers(180, 3);
