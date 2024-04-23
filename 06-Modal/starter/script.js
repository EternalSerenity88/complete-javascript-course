'use strict';

// Assigning DOM elements to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloserModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// functions to close/open the window and blured overlay, by manipulating the visibilty of the classes
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Using loop in order to apply 'EventListener' to every button
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', showModal);

btnCloserModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Using specific key to do action (Escape, to close opened window)
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
