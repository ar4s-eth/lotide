const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔥 Assertion Failed: ${actual} !== ${expected}`;
  }
};


// TEST CODE

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);