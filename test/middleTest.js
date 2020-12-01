const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe('#middle', () => {
  it(`returns ["middle"] for the array of strings ["item1", "item2", "middle", "item4", "item5"]`, () => {
    assert.deepEqual(middle(["item1", "item2", "middle", "item4", "item5"]), ["middle"]);
  });
  it(`returns ["item2"], ["middle"] for arrays of strings with even length -> ["item1", "item2", "middle", "item4"]`, () => {
    assert.deepEqual(middle(["item1", "item2", "middle", "item4"]), ["item2", "middle"]);
  });
  it(`returns [2], for arrays of uneven length -> [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns [2, 3] for even arrays of numbers [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
