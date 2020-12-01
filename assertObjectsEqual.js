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

const assertObjectsEqual = function(object1, object2) {
  //reference the util library's inspect function
  const inspect = require('util').inspect;
  //capture the result (turthy/falsy) from eqObjects by passing object1/object2 into it
  let returnResult = eqObjects(object1, object2);
  //if return results is true, assertion passed, otherwise it fails
  //return the assertion with the reference objects values respectively
  if (returnResult) {
    return console.log(`🟢 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    return console.log(`🔥 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// --- TEST CASES ---
// reference objects
// obj1 = { b: 1, a: 2 }
// obj2 = { a: 2, b: 1 }
// obj3 = { a: 1, b: 2, c: 3 }
// obj4 = { a: 1, b: 2, c: "3" }

// assertObjectsEqual(obj1, obj1) // same objects -> pass
// assertObjectsEqual(obj1, obj2) // different objects with the same keys & values *in different order -> pass
// assertObjectsEqual(obj1, obj3) // different objects -> fail
// assertObjectsEqual(obj3, obj4) // same objects -> pass

module.exports = assertObjectsEqual;