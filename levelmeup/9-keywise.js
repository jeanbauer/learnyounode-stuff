/*
#####################################################################
##                         ~~  Keywise  ~~                         ##
#####################################################################
*/

const level = require('level');
const db = level(process.argv[2], { valueEncoding: 'json' });
const data = require(process.argv[3]);

const operations = data.map(row => {
  if (row.type === 'user') row.key = row.name;
  else if (row.type === 'repo') row.key = row.user + '!' + row.name;
  return ({ type: 'put', key: row.key, value: row });
});

db.batch(operations);
