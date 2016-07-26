/*  Strings in javascript have a `.split()` method. `.split()` takes an argument
that can be a string or a regex.

Write a module that accepts a string as its argument and returns an array that
splits the string on commas separated by arbitrary amounts of whitespace. */

module.exports = str => str.split(/\s*,\s*/);

// Remember that `\s` is a shortcut for whitespace characters `[ \t\r\n\f]`.
