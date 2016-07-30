const spawn = require('child_process').spawn;
const duplex = require('duplexer');

module.exports = (cmd, args) => {
  const child = spawn(cmd, args)
  return duplex(child.stdin, child.stdout)
}
