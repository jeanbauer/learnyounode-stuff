const http = require('http');
const url = require('url');

const parseTimeAsJSON = time => ({ hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() });

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true),
          time = new Date(parsedUrl.query.iso);
    let response;

    response = req.url.indexOf('parsetime') >= 0 ? parseTimeAsJSON(time) : { unixtime: time.getTime() };

    if (response) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response))
    }
    res.writeHead(404); res.end();
});

server.listen((process.argv[2]));
