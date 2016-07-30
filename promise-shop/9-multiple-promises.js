const q = require('q');
const def1 = q.defer();
const def2 = q.defer();

function all (prom1, prom2) {
  const groupDef = q.defer();
  let counter = 0;
  let val1;
  let val2;

  prom1
  .then(result => {
    val1 = result;
    ++counter;
    if (counter >=2) groupDef.resolve([val1, val2]);
  })
  .then(null, groupDef.reject)
  .done();

  prom2
  .then(result => {
    val2 = result;
    ++counter;
    if (counter >=2) groupDef.resolve([val1, val2]);
  })
  .then(null, groupDef.reject)
  .done();

  return groupDef.promise;
}

all(def1.promise, def2.promise)
.then(console.log)
.done();

setTimeout(() => {
  def1.resolve('PROMISES');
  def2.resolve('FTW');
}, 200);
