'use strict';

// 1. CHALLENGE =========================================================================

const checkDogs = function (dogsJulia, dogsKate) {
  let trueJulia = dogsJulia.slice(1, 3);
  let allDogs = trueJulia.concat(dogsKate);

  allDogs.forEach(function (dogAge, i, array) {
    if (dogAge > 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
