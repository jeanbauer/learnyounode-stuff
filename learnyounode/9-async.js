const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

const printResults = () => { for (var i = 0; i < 3; i++) console.log(results[i]); }

const httpGet = index => {
  http.get(process.argv[2 + index], res => {
    res.pipe(bl((err, data) => {
      if (err) return console.error(err)
      results[index] = data.toString(); count++;
      if (count == 3) printResults()
    }));
  });
}

for (var i = 0; i < 3; i++) httpGet(i);
