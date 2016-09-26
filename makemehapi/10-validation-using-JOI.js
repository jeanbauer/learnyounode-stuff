/*
VALIDATION USING JOI OBJECT
Exercise 10 of 13

By using a Joi object we can specify highly customizable validation rules in
paths, request payloads, and responses.

Create a server exposing a login endpoint and reply with "login successful" when
an HTTP POST request is sent to /login.

The endpoint will accept following payload variables:

isGuest       (boolean)
username      (string)
accessToken   (alphanumeric)
password      (alphanumeric)

Validation should consist of following conditions:

i)   if isGuest is false, a username is required.
ii)  password cannot appear together with accessToken.
iii) if any other parameters than specified above are sent, they should pass the validation.

*/
const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'POST',
  path: '/login',
  config: {
    handler: (request, reply) => reply('login successful'),
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum()
      }).options({ allowUnknown: true }).without('password', 'accessToken')
    }
  }
});

server.start();
