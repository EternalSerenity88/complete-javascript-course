'use strict';

// Creating random number between 1 and 20, then store it 'number' variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.secretNumber').style.width = '15rem';
  document.querySelector('.guess').value = '';
  score = 20;
  displayScore(score);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Creating output if no number has been entered
  if (!guess) {
    displayMessage('❓No Number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.secretNumber').style.width = '30rem';
    document.querySelector('.secretNumber').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    console.log(secretNumber);
  } else if (guess != secretNumber) {
    displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
    score--;
    displayScore(score);
  } else {
    displayMessage('❌You lost the game');
    score = 0;
    displayScore(score);
  }
});
