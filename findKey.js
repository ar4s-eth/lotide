const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔥 Assertion Failed: ${actual} !== ${expected}`;
  }
};

//function should return the "noma" key.
// refactored original callback x => x.stars === 2 to something easier to understand
const getNoma = (key) => {
  if (key.stars === 2) {
    return key;
  }
};
const getStarThree = (key) => {
  if (key.stars === 3) {
    return key;
  }
};
const getOneStar = (key) => {
  if (key.stars === 1) {
    return key;
  }
};
const getFiveStar = (key) => {
  if (key.stars === 5) {
    return key;
  }
};

//function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for which 
//the callback returns a truthy value. 
//If no key is found, then it should return undefined.
const findKey = (object, callback) => {
  //scanning through the object 
  for (let key in object) {
    // console.log([key])
    // console.log(object[key])
    if(callback(object[key])) {
      return key;
    }
  }
  return undefined
};

const starMap = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, getNoma)) // => "noma"

// --- TEST CASES --- 

console.log(assertEqual(findKey(starMap, getOneStar), "Blue Hill"));
console.log(assertEqual(findKey(starMap, getStarThree), "Akaleri"));
console.log(assertEqual(findKey(starMap, getNoma), "noma"));
console.log(assertEqual(findKey(starMap, getNoma), "this is false"));
console.log(assertEqual(findKey(starMap, getFiveStar)));