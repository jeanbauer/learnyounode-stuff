/*
REST WELL WITH HAPI
─────────────────────
ROUTES
Exercise 2 of 13

Create a hapi server that listens on a port passed from the command line and
outputs "Hello [name]" where [name] is replaced with the path parameter supplied
to GET /{name}

*/
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, reply) => reply(`Hello ${request.params.name}`)
})

server.start(() => console.log('Server running at:', Number(process.argv[2] || 8080)));
