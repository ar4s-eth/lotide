const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length !== array2.length) {
      return false;
    }
    if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
};

//function takes in two arrays and asserts if they are the same.
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

//function that finds the middle value of an array, or the two middle values if it is divisible by 2
const middle = function(array) {
  let newArray = []
  //if the array has one or two elements, return an empty array
  if (array.length <=2) {
    return []
  } 
  //if the array isn't divisible by two, return the two middle elements -find them by dividing the arrays length and rounding down while returning it and the element that follows.
  if (array.length % 2 === 0) {
    newArray.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
  } else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray
}


// --- TEST CASES ---

console.log(middle(["item1", "item2", "middle", "item4", "item5"]));
console.log(middle(["item1", "item2", "middle", "item4"]));
console.log(middle([1, 2, 3]));