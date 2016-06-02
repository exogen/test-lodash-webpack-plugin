var assert = require('assert');
var get = require('lodash/get');

var x = { a: { b: { c: 1 } } };

assert.strictEqual(get(x, 'a.b.c'), 1);
