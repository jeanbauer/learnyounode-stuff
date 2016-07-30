const q = require('q');
const def = q.defer();

def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED!");
