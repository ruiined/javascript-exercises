const fizzBuzz = require('./fizzbuzz')

describe('fizzBuzz', () => {
  it('returns FizzBuzz when divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('returns Fizz when divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  it('returns Buzz when divisible by 5', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
  it('returns itself when not divisible by 3 or 5', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
});