/* Write a module that accepts a string as its argument and returns an array of
the quoted strings contained in the input. Strings will be quoted with double
quotes. Your program should include the double quotes in its output.

For example, given the string: 'cool "beans" "beep boop" whatever "yay"'
your program should return: ['"beans"', '"beep boop"', '"yay"']
*/

module.exports = str => str.match(/"[^"]*"/g)

/* You can use `str.match(regex)` to return an array string matches for `regex`
when the `regex` has `/g` flag enabled.

Negated character classes may be useful here. */
