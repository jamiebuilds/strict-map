'use strict';

class StrictMap extends Map {
  get(key) {
    if (!this.has(key)) throw new Error(`Missing value for ${String(key)}`);
    return super.get(key);
  }
}

module.exports = StrictMap;
