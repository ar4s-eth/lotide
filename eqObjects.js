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

//function that will take in two objects and returns true or false based on a perfect match.

const eqObjects = function(object1, object2) {
  //function checks if two objects are equal, they are equal if they have the same number of keys 
  //&& the value for each key in one object is the same as the value of the same key in another object.
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false; // `🔥 Assertion Failed: Objects differ in length`
    }
    for (let x of Object.keys(object1)) {
      //if the object of x is an array, if the indices x 
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) { //check to make sure both objects are arrays
        return eqArrays(object1[x], object2[x]) // call eqArrays() on both of arrays 
      }
      if (object1[x] !== object2[x]) {
        return false; // `🔥 Assertion Failed: Objects have different values`
      }
  }
  return true; //`🟢 Assertion Passed: Objects are the same`;
};



// --- TEST CASES ---

// reference objects
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//checking if the objects have the same length && values
console.log(eqObjects(ab, ba));

//checking if the objects have the same length && values
console.log(eqObjects(ab, abc));

//checking if the objects have the same length && values && arrays
console.log(eqObjects(cd, dc)); // => true

//checking two similar objects, but with an extra number
console.log(eqObjects(cd, cd2));