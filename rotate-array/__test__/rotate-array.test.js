const rotateArray = require('../rotate-array.js');

describe('rotateArray()', () => {
  test('no rotation', () => {
    const testArr1 = [1, 2, 3]
    expect(rotateArray(testArr1,0)).toEqual([1,2,3])
    expect(testArr1).toEqual([1, 2, 3])
  });
  test('one to the right', () => {
    const testArr2 = [1, 2, 3]
    expect(rotateArray(testArr2,1)).toEqual([3, 1, 2])
    expect(testArr2).toEqual([1, 2, 3])
  });
  test('multiple to the right', () => {
    const testArr3 = [1, 2, 3, 4, 5]
    expect(rotateArray(testArr3,3)).toEqual([3, 4, 5, 1, 2])
    expect(testArr3).toEqual([1, 2, 3, 4, 5])
  });
  test('to the left', () => {
    const testArr4 = [1, 2, 3]
    expect(rotateArray(testArr4,-1)).toEqual([2, 3, 1])
    expect(testArr4).toEqual([1, 2, 3])
  });
  test('multiple to the left', () => {
    const testArr5 =[1, 2, 3, 4, 5]
    expect(rotateArray(testArr5,-3)).toEqual([4, 5, 1, 2, 3])
    expect(testArr5).toEqual([1, 2, 3, 4, 5])
  });


  
});
