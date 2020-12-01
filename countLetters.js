const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//function takes in a string
const countLetters = function(sentence) {
  let result = {}
  sentence = sentence.split(" ").join("")
  //loop through the sentence array
  for (let letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    } else if (result[letter] === " ") {
      delete result[letter];
    } else {
      result[letter] = 1;
    }
  }
  return result
};

// --- TEST CASES ---

// console.log(countLetters("lighthouse in the house"));
// console.log(countLetters("pOlly wAnt A crAckEr?"));

module.exports = countLetters;