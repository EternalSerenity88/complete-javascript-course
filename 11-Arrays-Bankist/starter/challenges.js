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

// 2. CHALLENGE ==========================================================================

const calcAverageHumanAge = function (dogAge) {
  const humanAge = dogAge.map(age => {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  console.log(humanAge);

  const adultsOnly = humanAge.filter(age => {
    if (age > 18) {
      return age;
    }
  });
  console.log(adultsOnly);

  const agesSum = adultsOnly.reduce((acc, age) => {
    console.log(acc);
    return acc + age;
  });

  const AVG = agesSum / adultsOnly.length;
  console.log(AVG);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
