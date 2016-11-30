var assert = require('power-assert');
var namespace = require('../dist/mmle-namespace.js');

describe('Some boring tests.', function() {

  var cats = {};

  it('should throw error if path is not String', function() {
    try {
      namespace(cats, 1, 'paul');
    } catch(e) {
      assert(e.message.includes('Invalid namespace'));
    }
  });

  it('should throw error if path is empty String', function() {
    try {
      namespace(cats, '', 'paul');
    } catch(e) {
      assert(e.message.includes('Invalid namespace'));
    }
  });

  it('should throw error if arguments if not enough', function() {
    try {
      namespace(cats);
    } catch(e) {
      assert(e.message.includes('Invalid namespace'));
    }
  });

  it('should set the value properly', function() {
    var name = namespace(cats, 'yellow.small.happy', 'paul');
    assert(cats.yellow.small.happy === name);
  });

  it('should get the value if existed', function() {
    var name = namespace(cats, 'yellow.small.happy');
    assert(name === 'paul');
  });

  it('should return undefined if value is not existed', function() {
    var name = namespace(cats, 'yellow.small.sad');
    assert(name === undefined);
  });

  it('should throw error if setting value on a existed path', function() {
    try {
      namespace(cats, 'yellow.small.happy', 'thammin');
    } catch(e) {
      assert(e.message.includes('already existed'));
    }
  });

  it('should overwrite the value if allowOverwrite is set to true', function() {
    var name = namespace(cats, 'yellow.small.happy', 'thammin', true);
    assert(cats.yellow.small.happy === name);
  });

});
