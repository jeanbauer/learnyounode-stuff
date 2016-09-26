/*
STREAMS
Exercise 8 of 13

Create a hapi server which responds to GET requests to / by streaming a
ROT13'd version of a file that contains:

   The Pursuit of Hapi-ness

Output should look like:

   Gur Chefhvg bs Uncv-arff

*/
const Fs = require('fs');
const Hapi = require('hapi');
const Path = require('path');
const Rot13 = require('rot13-transform');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: (request, reply) => {
      const thisfile = Fs.createReadStream(Path.join(__dirname, 'file.txt'));
      reply(thisfile.pipe(Rot13()));
    }
  }
});

server.start();
