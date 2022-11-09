// 1 What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// ANSWER 1 a new set including {1, 2, 3, 4}

// 2 What does the following code return?
[...new Set('referee')].join('');
//  ANSWER  2 returns ' ref '

// 3 What does the following code return?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// ANSWER 3 a new set with two elements, first element has [1,2,3] as key and true as value and the second with [1,2,3] as key and false for the value

// (4 What does the following code return?');

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// hasDuplicate([1, 3, 2, 1])
// hasDuplicate([1, 5, -1, 4]) //false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function isVowel(char) {
  return 'aeiou'.includes(char);
}
// recreated after seeing solution
function vowelCount(string) {
  const newMap = new Map();
  for (let char of string) {
    let lowerChar = char.toLowerCase();
    if (isVowel(lowerChar)) {
      if (newMap.get(lowerChar)) {
        newMap.set(lowerChar, newMap.get(lowerChar) + 1);
      } else newMap.set(lowerChar, 1);
    }
  }
  return newMap;
}
// 1 seperate each char
// 1 lowercase each char
// 1 Is each individual char a lower cased vowel?
// 2 Is it in the newmap as a key already? True : False
// 3 If true, it is a key already, add one to the value
// 4 If false, it is not a key already, add current char as a new key to the newmap with a value of 1
