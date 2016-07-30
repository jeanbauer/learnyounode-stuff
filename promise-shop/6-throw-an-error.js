const q = require('q');

function parsePromised (json) {
  const def = q.defer();
  let result;

  try {
    result = JSON.parse(json);
  } catch (e) {
    def.reject(e);
  }

  def.resolve(result);
  return def.promise;
};

parsePromised(process.argv[2])
  .then(null, console.log)
