const sayHello = (name) => { return 'Hello, ' + name };

console.log(sayHello('Maria'));
console.log(sayHello('Phil'));

const add = (a, b) => { return a + b };

console.log(add(4, 5));

const multiply = (a, b) => { return a * b };

console.log(multiply(4, 5));

const getNumberSign = (num) => {
  if (num === 0) {
    return "zero"} 
  else if (num > 0) {
    return "positive"
  }
  else {
    return "negative"
  }};

  console.log(getNumberSign(-5));
  console.log(getNumberSign(5));
  console.log(getNumberSign(0));

  const isValidLength = (phoneNumber) => {
    const validLength = 10;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
  }
  
 console.log(isValidLength('89295782395729572895'));
 console.log(isValidLength('5253888888'));