const q = require('q');
const def = q.defer();

deferred.promise.then(console.log);
deferred.resolve('SECOND');
console.log('FIRST');
