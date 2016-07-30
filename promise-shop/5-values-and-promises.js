const q = require('q');
const def = q.defer();

def.promise
.then(name => `DR. ${name}`)
.then(console.log);

def.resolve("MANHATTAN");
