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

//high level function takes in an array and callback function that performs an operation on the array
const takeUntil = (array, callback) => {
  //capture the results that are truthy
  const results = [];
  //loop through the array   
  for (let item of array) {
    //return the items in the results array when the logic in the callback is true, otherwise collect the items in the results array.  
    if (callback(item)) {
        return results
      } else {
        results.push(item)
      }
   }
};

// provided arrays
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; 
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// provided variables using the high-level function
// const results1 = takeUntil(data1, x => x > 0); // <- this code supplied in the exercise returns an empty array
//console.log(results1);


// const results2 = takeUntil(data2, (something) => {
//   return something === ','
// });
// console.log(results2);
// console.log('---');

// --- TEST CASES ---

//custom callbacks
const lessThanZero = (x) => {
  if (x < 0) {
    return x
  }
}
const beforeTo = (x) => {
  if (x === "to") {
  return x
  }
}
const lessThanFive = (x) => {
  if (x < 5) {
    return x
  }
}

//return until an element is less than 0
const result1 = takeUntil(data1, lessThanZero);
// console.log(result1)

const test1 = takeUntil(data2, beforeTo);
// console.log(test1)

// console.log(assertArraysEqual(takeUntil(data1, lessThanZero), [1, 2, 5, 7, 2]));
// console.log(assertArraysEqual(takeUntil(data2, beforeTo), ["I\'ve", "been"]));
// console.log(assertArraysEqual(takeUntil(data1, lessThanFive), ["this", "is", "false"]));

module.exports = takeUntil;