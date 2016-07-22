var ls = require('./my-module');
var dir = process.argv[2];
var filterStr = process.argv[3];

ls(dir, filterStr, (err, list) => err ? console.error(err):list.forEach(file => console.log(file)));
