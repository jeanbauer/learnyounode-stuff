/*
REST WELL WITH HAPI
─────────────────────
HANDLING
Exercise 3 of 13

Create a server which responds to requests to / with a static HTML file named
index.html containing the following:

   <html>
       <head><title>Hello Handling</title></head>
       <body>
           Hello Handling
       </body>
   </html>
*/

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Inert, () => {});

server.route({
  method: 'GET',
  path: '/path/to/somewhere/{param}',
  handler: {
    file: Path.join(__dirname, '3-handling.html')
  }
});

server.start();
