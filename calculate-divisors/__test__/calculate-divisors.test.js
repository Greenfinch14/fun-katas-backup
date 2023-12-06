const calculateDivisors = require('../calculate-divisors.js');

describe('calculateDivisors()', () => {
  test('3', () => {
    expect(calculateDivisors(4)).toEqual(3)
  });
  test('3 and 5', () => {
    expect(calculateDivisors(16)).toEqual(60)
  });


  
});
