/*
#####################################################################
##                   ~~  Get Your Level On!  ~~                    ##
#####################################################################

Write a program that opens a `level` directory and reads a key from it.

Your program should take two arguments, a LevelDB directory, and a key.
your program should then retrieve the value of that key, and write it to the console.

for example, if `database_dir` contains a record `foo => bar` then the command
`node levelread.js database_dir foo` should output `bar`.
*/

const level = require('level');
const db = level(process.argv[2]);
const key = process.argv[3];

db.get(key, (err, value) => console.log(value));
