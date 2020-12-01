//borrowed code from assertArrayEqual.js 
//function takes in two arrays
const assertArraysEqual = function(array1, array2) {
  //if the lengths are not equal, return a failed assertion
  if (array1.length !== array2.length) {
    return `🔥 Assertion Failed: Arrays have unequal length`;
  } 
  //if the values of the equal arrays differ, return a failed assertion
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return `🔥 Assertion Failed: Array has unequal values`;
    }
  }
  //if the lengths aren't different, and the values are different, the arrays must be the same, return a passed assertion
  return `🟢 Assertion Passed: Arrays are the same`;
};
//without takes in two arrays and uses the second array -itemsToRemove- to remove items from the first array -source- items from the source array intact
const without = function(source, itemsToRemove) {
  //loop through source to collect the array elements
  for (let item of source) {
    //if itemsToRemove doesn't include the array elements from source, push the remaining elements to the newArray
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  } 
  return newArray
};


// --- TEST CASES ---

// console.log(without([1, 2, 1], [1]));
// withthout(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// console.log(words);
// console.log(assertArraysEqual(words, ["hello", "world"]));
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouz"]));
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;