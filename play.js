const connect = require('./client');
console.log("Connecting...");
connect();
const handleUserInput = function(key) {
  //Allows user to exit game using ctrl + c
  if (key === '\u0003') {
    process.exit();
  }
}
// Setup User interface, allow for keyboard interactions 
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  //process input using handleUserInput function
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  stdin.resume();
 
  return stdin;
}


setupInput();