/*
#####################################################################
##                       ~~  Multilevel  ~~                        ##
#####################################################################
*/

const multilevel = require('multilevel');
const net = require('net');
const db = multilevel.client();
const con = net.connect(4545)
con.pipe(db.createRpcStream()).pipe(con);
db.get('multilevelmeup', (err, value) => {
  if (err) throw err;
  console.log(value);
  con.end();
});
