const tillAddition = require('../till-addition.js');

describe('tillAddition()', () => {
  test('pennies', () => {
    testObj1 = { "1p": 1, "2p": 1 }
    expect(tillAddition(testObj1)).toBe("£0.03")
    expect(testObj1).toEqual({ "1p": 1, "2p": 1 })
  });
  test('more pennies', () => {
    testObj2 = { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 }
    expect(tillAddition(testObj2)).toBe("£0.38")
    expect(testObj2).toEqual({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })
  });
  test('and pounds', () => {
    testObj3 = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 }
    expect(tillAddition(testObj3)).toBe("£1.85")
    expect(testObj3).toEqual({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })
  });
});
