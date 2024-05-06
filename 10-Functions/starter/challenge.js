'use strict';

// 1. CHALLENGE ==============================================================

const poll = {
  question: 'What is your favourite programming language?',
  option: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(
      `${this.question}\n${this.option.join('\n')}\n(Write option number)`
    );

    if (answer === null) {
      console.log('Cancelled');
      return;
    }

    if (answer !== '0' && answer !== '1' && answer !== '2' && answer !== '3') {
      alert('Enter valid option number!');
      this.registerNewAnswer();
    } else {
      let numAnswer = Number(answer);
      this.answers[numAnswer]++;
    }

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
    console.log(poll.answers);
  },
};

console.log(poll);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 2. CHALLENGE ==============================================================

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

document.querySelector('body').addEventListener('click', function () {
  header.style.color = 'blue';
});
