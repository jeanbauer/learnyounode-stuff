/*
REST WELL WITH HAPI
─────────────────────
HELPING
Exercise 7 of 13

Create a server which responds to requests to /?name=Helping&suffix=! using
the template from the VIEWS exercise.

Instead of placing the query parameter directly in the template, create a helper
at helpers/helper.js and use this helper in the template to output the name
query parameter.

   <html>
       <head><title>Hello Helping!</title></head>
       <body>
           Hello Helping!
       </body>
   </html>

The helper should concatenate the name and suffix query parameters.
*/

const Hapi = require('hapi');
const Vision = require('vision');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Vision, () => {});

server.views({
  path: Path.join(__dirname, 'templates'),
  engines: {
    html: require('handlebars')
  },
  helpersPath: Path.join(__dirname, 'helpers')
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html'
  }
});

server.start();
