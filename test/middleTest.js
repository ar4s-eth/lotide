const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

// --- TEST CASES ---

console.log(middle(["item1", "item2", "middle", "item4", "item5"]));
console.log(assertArraysEqual(["item1", "item2", "middle", "item4"],["item1", "item2", "middle", "item4"]));
console.log((middle([1, 2, 3], [1, 2, 3])));