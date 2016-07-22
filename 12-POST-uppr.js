const http = require('http');
const map = require('through2-map'); // map ~like to stream

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end('send me a POST\n');
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen((process.argv[2]));
