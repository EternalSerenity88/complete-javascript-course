'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
// Another way to select element by ID
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Setting initial score values
score0El.textContent = 0;
score1El.textContent = 0;
// Making dice invisible
diceEl.classList.add('hidden');

const scores = [0, 0]; // To hold total scores for each player, [0] - first player's score, [1] - second player's score
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Genereting a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  // Connecting randomly generated number with coressponding png!
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // Display updated score for current player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Reset score of current player to zero
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // For manipulation with CSS for a current player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
