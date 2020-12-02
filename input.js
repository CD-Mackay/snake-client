//const { connect } = require('./client');
const { hotKeys } = require('./constants');
let connection;

// Setup User interface, allow for keyboard interactions 
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  //process input using handleUserInput function
  const handleUserInput = function(key) {
    //Allows user to exit game using ctrl + c
    if (key === '\u0003') {
      process.exit();
    } else {
      // Handles movement commands and banter messages.
      for (let element in hotKeys) {
        if (key === element) {
          
          connection.write(hotKeys[element]);
        }
      }
    }
  }
  //Call HandleuserInput each time data is recieved.
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  stdin.resume();
 
  return stdin;
}

module.exports = { setupInput };