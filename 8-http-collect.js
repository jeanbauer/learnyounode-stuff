const http = require('http');
var info = [];

http.get(process.argv[2], res => {
  res.setEncoding('utf8');
  res.on('data', input => info.push(input));
  res.on('end', () => {
    console.log(info.join('').length);
    console.log(info.join('')); 
  });
});
