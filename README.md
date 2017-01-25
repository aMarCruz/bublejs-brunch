> ## 🚧 This Plugin Is Depreacted 🚧

> This plugin is deprecated in favor of [buble-brunch](https://github.com/roperzh/buble-brunch).

# bublejs-brunch

[![npm][npm-image]][npm-url]
[![License][license-image]][license-url]

Adds support to [Brunch](http://brunch.io) to transform ES6 into ES5 with [Bublé](https://buble.surge.sh).

## Usage

Installation via npm:

```bash
npm i bublejs-brunch
```

Manual install using the GitHub URI in your `package.json`:

```js
  "bublejs-brunch": "aMarCruz/bublejs-brunch"
```

## Options

In your `brunch-config` file you can specify the [Bublé options](https://buble.surge.sh/guide/#using-the-javascript-api).

```js
  ...
  plugins: {
    bublejs: {
      objectAssign: 'assign',   // replace 'assign' with your own function
      target: { ie: 10, safari: 9 }
    }
  }
  ...
```

By default, the plugin set this options:

### `objectAssign: "Object.assign"`

With this, the plugin includes a polyfill in the code generated by Brunch.

If you set this option, even to `""` or `"Object assign"`, the plugin does not includes the polyfill.

### `dangerousForOf: true`

That's it.

The option `modules` is left as `false`, so Bublé generates error with the `import` and `export` keywords because Brunch does not support ES6 modules (yet).

Other options, like `target` or `dangerousTaggedTemplateString` must be set explicitly.

In addition to the Bublé options you can set `pattern` and `ignore`, both [anymatch](https://github.com/es128/anymatch), to include or ignore files.

[npm-image]:      https://img.shields.io/npm/v/bublejs-brunch.svg
[npm-url]:        https://www.npmjs.com/package/bublejs-brunch
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/aMarCruz/bublejs-brunch/blob/master/LICENSE