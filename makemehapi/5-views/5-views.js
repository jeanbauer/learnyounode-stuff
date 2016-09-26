/*
 REST WELL WITH HAPI
─────────────────────
 VIEWS
 Exercise 5 of 13

Create a server which responds to requests to /?name=Handling using a template
located at templates/index.html which outputs the following HTML:

    <html>
        <head><title>Hello Handling</title></head>
        <body>
            Hello Handling
        </body>
    </html>
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
  engines: {
      html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html'
  }
});

server.start();
