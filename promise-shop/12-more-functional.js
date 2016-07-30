const qhttp = require('q-io/http');
const _ = require('lodash');
const cachePath = 'http://localhost:7000/';
const dbPath = 'http://localhost:7001/';

const buildDbPath = _.bind(String.prototype.concat, dbPath);

qhttp.read(cachePath)
  .then(_.compose(qhttp.read, buildDbPath))
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.error)
  .done();
