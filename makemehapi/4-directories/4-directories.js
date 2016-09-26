/*
REST WELL WITH HAPI
─────────────────────
DIRECTORIES
Exercise 4 of 13

Create a server which routes requests to the path /foo/bar/baz/file.html to a
file in a directory, e.g. public/file.html, which contains the following:

   <html>
       <head><title>Hello Directories</title></head>
       <body>
           Hello Directories
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
  path: '/foo/bar/baz/{filename}',
  handler: {
    directory: {
      path: Path.join(__dirname, 'public')
    }
  }
});

server.start();
