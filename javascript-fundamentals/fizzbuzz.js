const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0 ) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0 ) {
    return "Buzz";
  } else {
    return num;
  }
}

// for (let num = 1; num <=50; num++) {
//   console.log(fizzBuzz(num));
// }

module.exports = fizzBuzz;