'use strict'

const duplex = require('duplexer');
const through = require('through');

module.exports = counter => {
  let counts = {}
  return duplex(through(record_count, set_count), counter);

  function record_count(obj) {
    const country = obj.country;
    const count = counts[country] || 0;
    counts[country] = count + 1;
  }

  function set_count() {
    counter.setCounts(counts);
    counts = {};
  }
}
