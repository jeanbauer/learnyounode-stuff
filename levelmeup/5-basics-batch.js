/*
#####################################################################
##                      ~~  Basics: BATCH  ~~                      ##
#####################################################################

Write a program that opens a LevelDB data-store using `level`.

The full path to the data-store will be provided to your program as
the first command-line argument.

The second command-line argument will be a full path to a file
containing some data you must load in to the data-store. Each line
of the file will contain two or three strings separated by commas. The
first string will either be "put" or "del", the second string will be
a key and in the case of a "put", the third string will be a value.

For example:

put,@izs,Isaac Z. Schlueter
put,@tmpvar,Elijah Insua
put,@mrbruning,Max Bruning
del,@darachennis

In this case, you have 3 new entries to add, mapping twitter handles
to real names, and one entry to remove.

You are encouraged to use the `batch()` method for this exercise. A
batch operation is an atomic, and efficient mechanism for performing
multiple writes (put and delete).
*/

const fs = require('fs');
const level = require('level');
const data = fs.readFileSync(process.argv[3], 'utf8').split('\n');

level(process.argv[2], (err, db) => {
  if (err) throw err;
  const batch = db.batch();
  data.forEach(line => {
    const d = line.split(',');
    if (d[0] == 'del') return batch.del(d[1]);
    batch.put(d[1], d[2]);
  });
  batch.write();
});
