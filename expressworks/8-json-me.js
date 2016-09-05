/*
JSON ME
Exercise 8 of 8

Most of the times we're building RESTful API servers with JSON.

Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the /books resource path.
As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3].

Respond with:

   res.json(object)

Everything should match the /books resource path.

For reading the file, use the fs module, e.g.,

   fs.readFile(filename, callback)
*/

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', (req, res) => {
  const filename = process.argv[3];
  fs.readFile(filename, (e, data) => {
    if (e) return res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch (e) { res.sendStatus(500); }
    res.json(books);
  });
});

app.listen(process.argv[2]);
