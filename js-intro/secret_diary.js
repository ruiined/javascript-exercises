function SecretDiary() {
  var locked = true,
      contents = "Hey!";
  
  function unlock() {
    locked = false;
  }
  
  function lock() {
    locked = true;
  }
  
  function read() {
    if (locked) { return "Nope!"; }
    return contents;
  }
  
  function write(message) {
    if (locked) { return "Nope!"; }
    contents = message;
  }
            
  return {
    unlock: unlock,
    lock: lock,
    read: read,
    write: write
  };
}

var secretDiary = SecretDiary();
console.log(secretDiary.read());
secretDiary.unlock();
console.log(secretDiary.read());