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

const assertArraysEqual = function(array1, array2) {
  //if the lengths are not equal, return a failed assertion
  if (array1.length !== array2.length) {
    return false //`🔥 Assertion Failed: Arrays have unequal length`;
  } 
  //if the values of the equal arrays differ, return a failed assertion
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false //`🔥 Assertion Failed: Array has unequal values`;
    }
  }
  //if the lengths aren't different, and the values are different, the arrays must be the same, return a passed assertion
  return true //`🟢 Assertion Passed: Arrays are the same`;
};

const words = ["ground", "control", "to", "major", "tom"];


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item))
    console.log(item)
  }
  console.log(results)
  return results;
}

const getZeroIndex = (something) => {
  return something[0];
}
const getArrayValues = (something) => {
  return something;
}
const getArrayLength = (something) => {
  return something.length
}

const results1 = map(words, getZeroIndex);

console.log(results1);

// --- TEST CASES ---

const array1 = [1, 2];
const array2 = [1, "two"];
const array3 = [{ one: 1, two: 2, three: 3}]

console.log(assertArraysEqual(map(words, getZeroIndex), ["g", 'c', "t", "m", "t"]));
console.log(assertArraysEqual(map(array1, getArrayValues), [1, 2]));
console.log(assertArraysEqual(map(array3, getArrayLength), ["this", "is", "false"]));