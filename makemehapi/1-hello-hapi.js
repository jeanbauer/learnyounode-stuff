/*
HELLO_HAPI
Exercise 1 of 13

Create a hapi server that listens on a port passed from the command line and
replies with "Hello hapi" when an HTTP GET request is sent to / .

The workshop will execute requests against the server and verify the output.

*/

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => reply('Hello hapi')
})

server.start(() => console.log('Server running at:', Number(process.argv[2] || 8080)));
