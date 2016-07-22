console.log(process.argv.slice(2).reduce((prev, curr) => parseInt(prev) + parseInt(curr)));
