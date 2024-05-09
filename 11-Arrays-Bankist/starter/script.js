'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// TRANSACTIONS DISPLAY ================================================

// Passing an arrays of transaction data (movements)
const displayMovements = function (movements) {
  // Sets data in main index file to zero
  containerMovements.innerHTML = '';

  // index for a sequence of transaction starting from the bottom
  movements.forEach(function (mov, i) {
    // for transaction CSS manipulation
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>;
    `;

    // to insert html element to the DOM, sending it to a parent class variable (containerMovements)
    // first argument, is the position relatively to parent element (4 options-see manual)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// To display transactions for account1
displayMovements(account1.movements);


const calcDisplaySummary = function(movements) {
  const incomes = 
}
calcDisplayBalance(account1.movements);











// USERNAMES =====================================================================

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // Choosing forEach, because we need to mutate current arrays
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) // .map(function (name) { return name[0]})
      .join(''); // converts an array back to a single string
  });
};
createUsernames(accounts);

// const createUsernames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0]) // .map(function (name) { return name[0]})
//     .join(''); // converts an array back to a single string
//   return username;
// };
// console.log(createUsernames('Steven Thomas Williams'));

// const user = 'Steven Thomas Williams'; // stw - username
// const username = user.toLowerCase().split(' ');
// let uName = [];

// for (const currentUser of username) {
//   uName += currentUser[0];
// }

// console.log(uName);

// BALANCE DISPLAY =============================================================

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);














/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // c, d, e
console.log(arr.slice(2, 4)); // c, d
console.log(arr.slice(-2)); // d, e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b, c
console.log(arr.slice());
console.log([...arr]);

// SPLICE (MUTATES ORIGINAL ARRAY INSTEAD OF CREATING NEW ONE)
// numbers in brackets are elements to delete
// console.log(arr.splice(2))
console.log(arr);
arr.splice(-1); // deletes 0 and 1
console.log(arr);
arr.splice(1, 2); //second number is the number of elements to remove, including first argument!!!
console.log(arr);

// REVERSE - mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]); // same as concat

//JOIN
console.log(letter.join('-'));

// NEW AT METHOD
arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // same thing

// traditional last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // new way

console.log('jonas'.at(0)); // also works on strings
console.log('jonas'.at(-1));

// Looping: forEach - Arrays

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements1.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // Math.abs for asbsolute value, removing the sign
  }
}

console.log('------- FOREACH -------');
movements1.forEach(function (current_element, i, array) {
  if (current_element > 0) {
    console.log(`Movement ${i + 1}: You deposited ${current_element}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(current_element)}`); // Math.abs for asbsolute value, removing the sign
  }
});

// Looping: forEach - Maps
const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Looping: forEach - Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  // Sets have no keys or indexes,
  // therefore, second argument is irrelevant but must be included for consistency sake
  console.log(`${value}: ${value}`);
});

// DATA TRANSFORMATIONS ============================================================

// THE MAP METHOD (loops and creates new array)
// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements1.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements1.map(mov => mov * eurToUsd);

console.log(movements1);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// FILTER ==============================================================

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

// REDUCE ======================================================================

console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // zero is initial value of accumulator
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); // sets initial value for accumulator as a first element of the array
console.log(max);

// FUNCTION CHAINING ======================================================

// const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
