'use strict';
/*
UPLOADS
Exercise 11 of 13

Create a server with an endpoint that accepts an uploaded file to the following
path:

/upload

The endpoint should accept the following keys: description and file. The
description field should be a string describing whatever you want, and
file should be an uploaded file. The endpoint should return a JSON object
that follows the following pattern:

{
  description :  //description from form
  file : {
    data :    //content of file uploaded
    filename:  //name of file uploaded
    headers :   //file header provided by hapi
  }
}

*/

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: 'localhost'
});

server.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: (request, reply) => {
      let body = '';
      request.payload.file.on('data', function(data) {
        body += data;
      });
      request.payload.file.on('end', function() {
        const result = {
          description: request.payload.description,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        };
        reply(JSON.stringify(result));
      });
    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

server.start();
