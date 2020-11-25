const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length !== array2.length) {
      return false;
    }
    if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
};

let assertArraysEqual = function(eqArrays) {
  if (!eqArrays) {
    return `🔥 Assertion Failed: Arrays Differ`;
  }
  if (eqArrays) {
    return `🟢 Assertion Passed: Arrays are the same`;
  }
};
console.log(assertArraysEqual(eqArrays([1,"2"],[1,"2"])));