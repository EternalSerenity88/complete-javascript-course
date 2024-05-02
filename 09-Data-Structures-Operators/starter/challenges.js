'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    xy: 3.25,
    team2: 6.5,
  },
};

// 1. CHALLENGE ========================================================>

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

// 5.
// const team1 = game.odds.team1;
// const xy = game.odds.xy;
// const team2 = game.odds.team2;
const {
  odds: { team1, xy: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were  scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// 2. CHALLENGE ========================================================>

// 1.
for (const [ind, player] of game.scored.entries()) {
  console.log(`Goal ${ind + 1}: ${player}`);
}

// 2.

// let count = 0;
// let total = 0;
// for (const key of Object.keys(game.odds)) { // should use object.values instead!!!
//   total += game.odds[key]; // Access the numerical value associated with the key
//   count++;
//   count === Object.keys(game.odds).length &&
//     console.log(total / Object.keys(game.odds).length);
// }

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'xy' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// 3. CHALLENGE ========================================================>

const gameEvent = new Map([
  [17, '⚽ GOAL'],
  [36, '🚑 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🚑 Substitution'],
  [64, '🔔 Yellow card'],
  [69, '🚨 Red card'],
  [70, '🚑 Substitution'],
  [72, '🚑 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔔 Yellow card'],
]);

// 1.
const events2 = new Set([...gameEvent.values()]);
console.log(events2);
const events = [...events2];
console.log(events);

// 2.
gameEvent.delete(64);
console.log(gameEvent);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvent.size} minutes`
);
const time1 = [...gameEvent.keys()].pop();
console.log(time1);
console.log(
  `An event happened, on average, every ${90 / gameEvent.size} minutes`
);

// 4.
for (const [time, event] of gameEvent) {
  console.log(
    time < 45
      ? `[FIRST HALF] ${time} ${event}`
      : `[SECOND HALF] ${time} ${event}`
  );
}

// 4. CHALLENGE ========================================================>

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  // Splitting input string by '\n' to an array 'rows'
  const rows = text.split('\n');
  let newText;

  for (const [i, row] of rows.entries()) {
    // Iterating each of the rows and splitting them by '_' into first and second, also trimming any spaces with
    // .trim and making all letters small with .toLowerCase
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    newText += output + '\n';
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
  document.querySelector('textarea').value = newText;
});

// const inputedText = document.createElement('textarea');
// const button = document.createElement('button');

// document.body.append(inputedText);
// document.body.append(button);

// const convertUnder = function () {
//   const text = inputedText.value.toLowerCase();
//   let newText = [];
//   let capitalizeNext = false;
//   let newLineAdded = false;

//   for (let char of text) {
//     if (char === '_') {
//       capitalizeNext = true;
//       continue; // Skip adding the underscore to newText
//       // char = '';
//     } else if (capitalizeNext && char !== ' ') {
//       char = char.toUpperCase();
//       capitalizeNext = false;
//     } else if (char === ' ' && newLineAdded === false) {
//       char = '/n';
//       newLineAdded = true;
//     } else if (char === ' ' && newLineAdded) {
//       continue;
//     } else if (char !== ' ') {
//       newLineAdded = true;
//     }
//     newText.push(char); // Add the processed character to the new text array
//   }
//   inputedText.value = newText.join(''); // Update the textarea with the new text
// };

// button.addEventListener('click', convertUnder);
