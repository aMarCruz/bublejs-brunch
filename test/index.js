var expect = require('expect');
var Plugin = require('../');

describe('Plugin', function () {
  var plugin;

  beforeEach(function () {
    plugin = new Plugin({});
  });

  it('should be an object', function () {
    expect(plugin).toBeAn('object');
  });
});
