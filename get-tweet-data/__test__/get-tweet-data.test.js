const getTweetData = require('../get-tweet-data.js');

describe('getTweetData()', () => {
  test('length test', () => {
    const tweetObj = getTweetData("test tweet one")
    expect(tweetObj.length).toEqual(14)
  });
  test('tags', () => {
    const tweetObj = getTweetData("My awesome tweet about #coding")
    expect(tweetObj.tags).toEqual(["#coding"])
  });
  test('mentions', () => {
    const tweetObj = getTweetData("My awesome tweet about #coding to @northcoders")
    expect(tweetObj.metions).toEqual(["@northcoders"])
  });
  test('tag count', () => {
    const tweetObj = getTweetData("My awesome tweet about #coding")
    expect(tweetObj.tagsCount).toEqual(1)
  });
  test('mention count', () => {
    const tweetObj = getTweetData("My awesome tweet about #coding to @northcoders")
    expect(tweetObj.metionsCount).toEqual(1)
  });
  test('mention count', () => {
    const tweetObj = getTweetData("My awesome tweet about #coding to @northcoders")
    expect(tweetObj).toEqual(  {
      tags: [ '#coding' ],
      metions: [ '@northcoders' ],
      tagsCount: 1,
      metionsCount: 1,
      length: 46
    })
  });



});
