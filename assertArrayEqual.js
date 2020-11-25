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

console.log(assertArraysEqual([1,"2", "ten", 99],[1,"2", "ten", 99]));