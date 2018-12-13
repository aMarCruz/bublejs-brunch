var assert = require('assert');
var Plugin = require('../');

describe('Plugin', function () {

  it('should be an object', function () {
    var plugin = new Plugin({});
    assert(!!plugin && typeof plugin === 'object', 'Plugin is not an object');
  });

});
