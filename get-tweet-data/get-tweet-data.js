const { hasSubscribers } = require("diagnostics_channel")

// Please do not change the name of this function
function getTweetData (tweet) {
  const tweetObj = {}

  const splitTweet = tweet.split(" ")
  const uniqueTag = []
  const uniqueMention =[]
  for(let i=0;i<splitTweet.length;i++)
  {
    if((splitTweet[i][0]==="#")&&(!uniqueTag.includes(splitTweet[i]))){uniqueTag.push(splitTweet[i])}
    if((splitTweet[i][0]==="@")&&(!uniqueMention.includes(splitTweet[i]))){uniqueMention.push(splitTweet[i])}
  }
  tweetObj.tags = uniqueTag
  tweetObj.metions =uniqueMention
  tweetObj.tagsCount = uniqueTag.length
  tweetObj.metionsCount = uniqueMention.length
  tweetObj.length = tweet.length



  return tweetObj
};

module.exports = getTweetData;
