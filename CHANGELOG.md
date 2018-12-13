# buble-brunch Changes

## \[2.10.2] - 2018-12-13

### Fixed

- Avoid crash when there's no buble options.

### Changed

- Update dependencies.

## \[2.8.1] - 2016-12-22

- Added deprecation note in favor of [buble-brunch](https://github.com/brunch/buble-brunch), that will be the "official" version of this plugin (without `dangerousForOf` default nor the `Object.assign` polyfill).
- Using Bublé v0.15.2 that fixed an [important bug](https://gitlab.com/Rich-Harris/buble/issues/136) about source maps in Chrome, so the hacked copy is not needed.

## \[2.8.0] - 2016-12-22

- Includes hacked Bublé v0.15.1
