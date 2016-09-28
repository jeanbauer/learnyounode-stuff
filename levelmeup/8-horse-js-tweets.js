module.exports = (db, start, callback) => {
  const tweets = []
  db.createReadStream({ start, end: `${start}\xff` })
    .on('data', data => tweets.push(data.value))
    .on('error', err => {
      if (callback) callback(err);
      callback = null;
    })
    .on('end', () => {
      if (callback) callback(null, tweets);
      callback = null;
    });
}
