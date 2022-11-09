// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');

// const empty = [];
// myMap.set(empty, 'empty array!');
// myMap.set(true, 'TRUEEEE!');

// myMap.get(7);

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;

// const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// funcCalls.set(add, 1);
// funcCalls.set(mult, 9);

const myMap = new Map();
myMap.set(7, 'seven');
const stopSign = new Map();
stopSign.set('corners', 8);
stopSign.set('color', () => 'rgb(1, 1, 1)');

const bandData = [
  [3, '3 Doors Down'],
  ['three', 'Three Dog Night'],
  ['nine', 'Nine Inch Nails'],
  ['four', 'The Four Seasons'],
  [41, 'Sum 41'],
];
const bandMap = new Map(bandData);

bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');

// bandMap.forEach((val, key) => {
// 	console.log(key + '=>' + val);
// });

// for (let [key, value] of bandMap) {
//   console.log(key, 'key', '=', value, 'value');
// }
const valetData = [
  ['MAB', 'Ryan Kenyon'],
  [34, 'Three Dog Night'],
  [9, 'Nine Inch Nails'],
  ['four', 'The Four Seasons'],
  [41, 'Sum 41'],
];

const valetMap = new Map(valetData);

bandMap.forEach((val, key) => {
  //   console.log(key, '=>', val);
});

const bannedHashTags = new Set(['one', 'yolo', 'yoyo']);
