const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//scan the object and return the first key which contains the given value. if no key with that given value is found, it should return undefined.
const findKeyByValue = function(object, value) {
  //loop through object to get genres 
  for (let genre in object) { 
    if (object[genre] === value) {
      return genre
    }
  }
};

// --- TEST CASES ---

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);