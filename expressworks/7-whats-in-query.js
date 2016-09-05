/*
WHAT'S IN QUERY
Exercise 7 of 8

Oftentimes, we need to process the data from the URL query string (urlencoded).

Write a route that extracts data from the query string in the GET /search URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.

Use app.get('/search', function(){...}) for the route.

In Express.js, to extract query string parameters, we can use (inside the request handler):

   req.query.NAME
*/

const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query;
  res.send(query);
});

app.listen(process.argv[2]);
