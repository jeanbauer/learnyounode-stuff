/*
REST WELL WITH HAPI
─────────────────────
PROXIES
Exercise 6 of 13

A proxy lets you relay requests from one server/service to another.

Create a server which listens on a port passed from the command line, takes any
requests to the path /proxy and proxies them to http://localhost:65535/proxy.

*/

const Hapi = require('hapi');
const H2o2 = require('h2o2');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(H2o2, () => {});

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535
    }
  }
});

server.start();
