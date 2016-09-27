/*
LEARN YOU COUCHDB FOR GREAT GOOD!
───────────────────────────────────
HELLO COUCHDB
Exercise 2 of 4

Start Apache CouchDB and create a database named couchdbschool by
using HTTP.

After you created the database, please insert this document:

   {
     "_id": "robert",
     "type": "human"
   }

   === RESULT:

   url: http://localhost:5984/_utils/document.html?couchdbschool/robert

   {
      "_id": "robert",
      "_rev": "1-64cb49ff991ee0398f2bf03e9ce59381",
      "type": "human",
      "id": "robert"
   }


   OR


   curl -X POST -d '{"id":"robert", _id":"robert", "type":human}' http://localhost:5984/couchdbschool -H "Content-Type:application/json"

*/
