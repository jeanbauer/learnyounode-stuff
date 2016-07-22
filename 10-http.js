const net = require('net');

// zero before number like 1,2...9
const z = i => (i < 10 ? '0' : '') + i;

const now = () => {
  const d = new Date();
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}`;
}

const server = net.createServer(socket => socket.end(`${now()}\n`));
server.listen((process.argv[2]));
