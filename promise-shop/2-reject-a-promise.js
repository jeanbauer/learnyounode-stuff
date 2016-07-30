const q = require('q');
const def = q.defer();

def.promise.then(null, err => console.log(err.message);
setTimeout(def.reject, 300, new Error('REJECTED!'));
