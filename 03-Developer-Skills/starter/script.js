// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '23';
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991));


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degree celsius')),
  };
  102;
  // B) FIND BUG
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin()); */

const temp = [17, 21, 23];
let days = 0;
for (let i = 0; i < temp.length; i++) {
  ++days;
  console.log(`${temp[i]}\u00B0C in ${days} days ... `);
}
