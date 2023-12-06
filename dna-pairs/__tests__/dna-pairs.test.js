const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty return empty array', () => {
    expect(dnaPairs()).toEqual([])
  });
  test('pairs properly', () => {
    expect(dnaPairs("ATAG")).toEqual([ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ])
  });

});
