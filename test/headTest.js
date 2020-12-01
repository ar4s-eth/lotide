// const assertEqual = require('../assertEqual.js')
const head = require('../head.js')
const assert = require('chai').assert;

describe('#head', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it('returns the number 5 from an array of [5,6,7]', () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' from an array of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  })
});