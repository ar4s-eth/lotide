const assert = require("chai");

describe('addClass', function() {
  it('should add class to element');
    let element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');

  it('should not add a class which already exists');

});