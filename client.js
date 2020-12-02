const net = require('net');


// Establishes connection to game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
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
  // send "move: up" command and other practice
  conn.on('connect', () => {
  // possibly will be deleted soon 
    

  })
  //----------------------------------------
  return conn;
}



module.exports = { connect };