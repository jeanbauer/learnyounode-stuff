/*
VALIDATION
Exercise 9 of 13

Route configuration offers lots of ways to customize each endpoint offered by
your hapi application. One of those ways is through validation.

Validation can happen in parameters in the path, in inbound payload validation,
and outbound response. Objects for validation are defined in the Joi
validation framework.

Create a server that has a route configuration exposing an endpoint for
chickens. Specifically:

   /chickens

Within the route, add a path parameter named breed which has an attached
validation within the route's configuration. The solution will just check that a
Validation object exists within the configuration for breed, not any specific
validation.
*/

const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'GET',
  path: '/chickens/{breed}',
  config: {
    handler: (request, reply) => reply(`You asked for the chicken ${request.params.breed}`),
    validate: {
      params: {
        breed: Joi.string().required()
      }
    }
  }
});

server.start();
