function duckCount() {
  return Array.prototype.filter.call(arguments, (arg => Object.prototype.hasOwnProperty.call(arg, 'quack'))).length;
}

module.exports = duckCount
