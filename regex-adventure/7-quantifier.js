/* Export a function that takes a filename string as an argument and returns
whether the entire filename is a sequence of one or more digits followed by
`.jpg` or `.jpeg`. */

module.exports = str => /^\d+\.jpe?g$/.test(str);

/*

When you place a quantifier character after a character or character class, that
character will match a number of times according to the quanitifier operator in
use.

Here are some simple quantifiers:

  *  zero or more times
  +  one or more times
  ?  zero or one times

*/
