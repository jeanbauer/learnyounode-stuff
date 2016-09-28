module.exports.init = (db, words, callback) => {
  return db.batch(words.map(word => ({ type: 'put', key: `${word.length}!${word}`, value: word })), callback);
}

module.exports.query = (db, word, callback) => {
  const words = [];
  const key = `${word.length}!${word.replace(/\*/g, '')}`;
  db.createReadStream({ start: key, end: `${key}\xff` })
    .on('data', data => words.push(data.value))
    .on('error', err => {
      if (callback) callback(err);
      callback = null;
    })
    .on('end', () => {
      if (callback) callback(null, words);
      callback = null;
    });
}
