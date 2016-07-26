/* Export a function that takes a string argument and returns whether the string
starts with `cat`, `dog`, or `robot` followed by a number to the end of the
string. */

  module.exports = str => /^(cat|dog|robot)[0-9]+$/.test(str);

/*

You can use the alteration operator `|` to solve this adventure.

The alteration operator matches among possible options:

  /xyz|qrs|tuv/.test('tuv') // true

Alteration operators are often seen in capture groups:

  /0x(ff|00|80)/.test('0x80') // true

*/
