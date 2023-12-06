const updateRemoteStudents = require('../update-remote-students.js');

describe('updateRemoteStudents()', () => {
  test('empty', () => {
    expect(updateRemoteStudents()).toEqual({})
  });
  test('update one element and no mutation', () => {
    const testArr1 = [{ name: 'Euler', age: 27}]
    expect(updateRemoteStudents(testArr1)).toEqual([{ name: 'Euler', age: 27, location: 'remote' }])
    expect(testArr1).toEqual([{ name: 'Euler', age: 27}])
  });
  test('more complicated', () => {
    const testArr2 =  [{ name: 'Hypatia', age: 31, location: 'leeds' },
    { name: 'Ramanujan', age: 22 },
    { name: 'Tao', age: 47, location: 'manchester' }]
    expect(updateRemoteStudents(testArr2)).toEqual([
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22, location: 'remote' },
      { name: 'Tao', age: 47, location: 'manchester' }
    ])
    expect(testArr2).toEqual([{ name: 'Hypatia', age: 31, location: 'leeds' },
    { name: 'Ramanujan', age: 22 },
    { name: 'Tao', age: 47, location: 'manchester' }])
  });


  
});
