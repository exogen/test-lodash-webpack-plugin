import get from 'lodash/get';
import assert from 'assert';

var x = { a: { b: { c: 1 } } };

assert.strictEqual(get(x, 'a.b.c'), 1);
