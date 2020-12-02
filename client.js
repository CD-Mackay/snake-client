const net = require('net');

// Establishes connection to game server

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf8');
// Prints incoming messages from server to the console
  conn.on('data', (data) => { 
    console.log('Server says: ', data);
  })
  return conn;
}



module.exports = connect;