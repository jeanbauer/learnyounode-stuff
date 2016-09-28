/*
#####################################################################
##                       ~~  Basics: GET  ~~                       ##
#####################################################################

Write a program that opens a LevelDB data-store using `level`.

The store will contain up to 10 entries with keys in the form:

keyX

Where 'X' is an integer between 0 and 100.

You must find those entries and print them out to the console, ordered
by 'X', ascending. You should print them out with:

console.log(key + '=' + value)
// will output "key12=here is that random text"

The full path to the data-store will be provided to your program as
the first command-line arguent.
*/

const level = require('level');
const db = level(process.argv[2]);

function fetchNext (i) {
  const key = 'key' + i
  db.get(key, function (err, data) {
    if (err) {
      if (!err.notFound) throw err;
    } else
      console.log(key + '=' + data);

    if (i < 100) fetchNext(i + 1);
  })
}

fetchNext(0);
