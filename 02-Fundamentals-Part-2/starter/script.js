'use strict';


// Arrow funtion example
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// More lines example
// const yearsUntilRetirement = birthYear => {
//    const age = 2037 - birthYear;
//    const retirement = 65 - age;
//    return retirement;
//}

/* console.log(yearsUntilRetirement(1991));

// More lines and parameters example
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1991, 'Bob'));


function calcTip(bill_value) {
    let tip = 0;
    if (bill_value < 50 || bill_value > 300) {
        tip = (20 * bill_value) / 100;
    } else {
        tip = (15 * bill_value) / 100;
    }
    return tip;
}



const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); */

/* const jonas = {
     firstName: 'Jonas',
    lastName: 'Schedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriveLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    
    checkLicense: function() {
        if (this.hasDriveLicense) {
            return 'a'
        } else {
            return 'no'
        }
    }
}

console.log(`Jonas is a 46-year old teacher, and he has ${jonas.checkLicense()} driver's license`)
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
 
 const tips = [];
 const totals = [];
 
 function calcTip(bill_value) {
     let tip = 0;
     if (bill_value < 50 || bill_value > 300) {
         tip = (bill_value * 20) / 100;
     } else {
         tip = (bill_value * 15) / 100;
     }
     return tip;
 }

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const AVG = calcAverage(totals);

console.log(AVG);