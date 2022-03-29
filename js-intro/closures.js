function makeCounter(firstN) {
  var n = firstN;
  return function() {
    n += 1;
    return n;
  }
}

var counter = makeCounter(5);
console.log(counter())
console.log(counter())
console.log(counter())