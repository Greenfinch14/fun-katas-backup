// Please do not change the name of this function
function calculateDivisors(num) {
  let returnNum = 0
  for(let i=1;i<=num;i++)
  {
    if((i%3===0)||(i%5===0)){returnNum +=i}
  }
  return returnNum
}

module.exports = calculateDivisors;