/*
AUTH
Exercise 13 of 13

Basic Authentication is a simple way to protect access to your application using
only a username and password. There is no need for cookies or sessions, only a
standard HTTP header.

Create a hapi server that listens on a port passed from the command line and is
protected with Basic Authentication. The authentication username should be
"hapi" and the password "auth" and the server should respond with an HTTP 401
status code when authentication fails.

*/

const Hapi = require('hapi');
const Auth = require('hapi-auth-basic');
const user = { name: 'hapi', password: 'auth' };
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

const validate = (request, username, password, cb) => {
  const isValid = username === user.name && password === user.password;
  return cb(null, isValid, { name: user.name });
};

server.register(Auth, function (err) {
  server.auth.strategy('simple', 'basic', { validateFunc: validate });
  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'simple',
      handler: (request, reply) => reply()
    }
  });

  server.start();
});
