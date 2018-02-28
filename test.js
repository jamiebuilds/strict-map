// @flow
'use strict';

const test = require('ava');
const StrictMap = require('./');

test('StrictMap#get()', t => {
  let map = new StrictMap();
  map.set('foo', 42);
  t.is(map.get('foo'), 42);
  t.throws(() => map.get('bar'));
});
