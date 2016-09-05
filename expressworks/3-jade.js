/*
JADE
Exercise 3 of 8

Create an Express.js app with a home page rendered by the Jade template engine.

The home page should respond to /home.

The view should show the current date using 'new Date.toDateString()'.

We use 'toDateString()' to simply return the date in a human-readable format
without the time.
*/

const express = require('express');
const app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', (req, res) => res.render('index', { date: new Date().toDateString() }));
app.listen(process.argv[2]);
