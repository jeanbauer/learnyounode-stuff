/*
COUNT
Exercise 8 of 9

Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection from the database named learnyoumongo to
count all documents where age is greater than the first argument
passed to your script.

Using console.log, print the number to stdout.
*/

const mongo = require('mongodb').MongoClient;
const age = process.argv[2];

const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) throw err;
  const parrots = db.collection('parrots');
  parrots.count({ age: { $gt: +age } }, (err, count) => {
    console.log(count);
    db.close();
  });
});
