# koco-array-utilities
Array utilities to be used with a [KOCO](https://github.com/cbcrc/generator-koco) project.

[See API reference](https://github.com/cbcrc/koco-array-utilities/wiki/API-reference-documentation)

## Installation

```bash
bower install koco-array-utilities
```

## Usage with KOCO

This is a shared module that is used in many other module. The convention is to configure an alias in the `require.configs.js` with the name `array-utilities` like so:

```javascript
paths: {
  ...
  'array-utilities': 'bower_components/koco-array-utilities/src/array-utilities'
  ...
}
```
