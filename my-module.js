const fs = require('fs');
const path = require('path');

module.exports = (dir, filterStr, cb) => {
  fs.readdir(dir, (err, list) => {
    if (err) return cb(err);
    cb(null, list.filter(file => path.extname(file) === '.' + filterStr))
  });
}
