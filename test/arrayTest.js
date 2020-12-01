const chai = require('chai');
const chalk = require('chalk');
const assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    let arr = [];

    assert.equal(arr.length, 0, chalk.bgRed.yellow.bold('Array length was not 0'));
  });
  //more tests here
});
