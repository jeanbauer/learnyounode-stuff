/*
REMOVE
Exercise 7 of 9

This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script.

*/

const mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/${process.argv[2]}`;

mongo.connect(url, (err, db) => {
  if (err) throw err;
  const collection = db.collection(process.argv[3]);
  collection.remove({
    _id: process.argv[4]
  }, err => db.close());
});
