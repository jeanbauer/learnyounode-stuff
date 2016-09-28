module.exports = (db, date, callback) => {
  // be careful with hoisting here, Let won't work! =)
  const tweets = { count: 0 };
  db.createReadStream({ start: date })
    .on('data', data => tweets.count++)
    .on('error', err => {
      if (callback) { callback(err); callback = null; }
    })
    .on('end', () => {
      if (callback) { callback(null, tweets.count); callback = null; }
    });
}
