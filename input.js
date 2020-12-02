const { connect } = require('./client');
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
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "s") {
      connection.write("Move: down"); 
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "e") {
      connection.write("Say: TSwift: Snake it off!")
    } else if (key === "q") {
      connection.write("Say: nosnakesonthisplane")
    } else if (key === "x") {
      connection.write("Say: hello world");
    } else if (key === "z") {
      connection.write("Say: SHNAAAKE!")
    }
  }
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  stdin.resume();
 
  return stdin;
}

module.exports = { setupInput };