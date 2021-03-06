const net = require('net');
const {IP, PORT} = require('./constants');


// Establishes connection to game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  conn.setEncoding('utf8');
// Prints incoming messages from server to the console
  conn.on('data', (data) => { 
    console.log('Server says: ', data);
  });
// when connection is established, sets the player's name to pre-determined initials
  conn.on('connect', () => {
    console.log("Successfully connected to game server \n WOOOOOH!");
    conn.write("Name: Cnr");
  })
  return conn;
}

module.exports = { connect };