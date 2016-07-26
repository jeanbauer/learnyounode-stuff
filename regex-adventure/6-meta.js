/*
Export a function that takes a string argument and returns whether the string
ends with a literal `.` (dot). */

module.exports = str => /\.$/.test(str);

/*

`.` is normally a special character in a regexp, but you can refer to a literal
`.` (dot) character by putting a \ (backslash) in front of it.

Whenever you want to refer to a literal one of these characters, you'll need to
put a `\` before the character:

  . * + ? [ ] ( ) ^ $ { } | \

*/
