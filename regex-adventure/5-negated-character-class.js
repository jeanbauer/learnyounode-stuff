/*
   Write a module that returns true only when:
   the first character is not a digit
   and the second character is not a capital letter. */

module.exports = str => /^[\D][^A-Z]/.test(str);

/*
Negating a character class makes it match the opposite characters.
To negate a character class, include a `^` as the first character inside the
`[]`s.

You won't need these right now, but there are some handy shortcuts for character
classes:

  * \d - [0-9]        any digit
  * \w - [A-Za-z_]    word character
  * \s - [ \t\r\n\f]  whitespace

Capitalize the shortcut escape characters to negate them:

  * \D - [^0-9]        not a digit
  * \W - [^A-Za-z_]    not a word character
  * \S - [^ \t\r\n\f]  not whitespace

There is a special character class `.` that matches any character, except for
newlines (under some conditions).

*/
