'use strict';

const anymatch = require('anymatch');
const flatten = require('flatten-brunch-map');
const resolve = require('path').resolve;
const buble = require('buble');

const reIgnore = /\b(?:bower_components|node_modules|vendor)\//;

const dup = (src) => Object.assign({}, src);

class BublePlugin {

  constructor (config) {
    const opts = dup(config.plugins && config.plugins.buble);

    opts.sourceMap = !!config.sourceMaps &&
                      opts.sourceMap !== false && opts.sourceMaps !== false;
    opts.includeContent = false;
    opts.dangerousForOf = opts.dangerousForOf !== false;

    if (typeof opts.objectAssign != 'string') {
      opts.objectAssign = 'Object.assign';
      this.include = [resolve(__dirname, 'object-assign.js')];
    }
    if (opts.pattern) {
      this.pattern = opts.pattern;
    }
    this.ignored = anymatch(opts.ignore || reIgnore);
    this.options = opts;
  }

  compile (file) {
    if (this.ignored(file.path)) {
      return Promise.resolve(file);
    }

    return new Promise((resolve, reject) => {

      const opts = dup(this.options);

      opts.source = file.path;
      try {
        const output = buble.transform(file.data, opts);
        const result = opts.sourceMap
                     ? flatten(file, output.code, output.map) : output.code;

        resolve(result);

      } catch (err) {

        reject(err);
      }

    });
  }
}

BublePlugin.prototype.brunchPlugin = true;
BublePlugin.prototype.type = 'javascript';
BublePlugin.prototype.pattern = /\.jsx?$/;

module.exports = BublePlugin;
