// Please do not change the name of this function
function rotateArray (arr, num) {
  if(num===0){return arr}
  eArr = [...arr]
  rArr = []

  if(num>0)
  {
    for(let i=eArr.length-num;i<eArr.length+eArr.length-num;i++)
    {
      rArr.push(eArr[i%eArr.length])
    }
  }
  if(num<0)
  {
    num*=-1
    for(let i=num;i<eArr.length+num;i++)
    {
      rArr.push(eArr[i%eArr.length])
    }
  }
  console.log(rArr)
  return rArr
};

module.exports =  rotateArray;
