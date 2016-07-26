/*
In this adventure, export a module that searches for the string `x=` followed by
numbers and returns the number found after the equal sign. */

module.exports = str => /x=(\d+)/.exec(str) ? /x=(\d+)/.exec(str)[1] : null;

/* Instead of calling `.test()`, we can use `.exec()`, which returns a match
object. If the regex matched the string, the match object will be populated with
capture groups.

Capture groups are pieces of regex inside of `(` and `)`.
The text that matches inside the `(` and `)` will be captured and available on
the match object with square bracket indexes starting from 1 for the leftmost
group. */
