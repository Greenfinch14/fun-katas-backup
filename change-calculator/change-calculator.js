// Please do not change the name of this function
function changeCalculator (num) {
  cash = num
  const change = {};
  if(cash>=10){let ammount = Math.floor(cash/10);change['10']=ammount;cash-=(ammount*10)}
  if(cash>=5){let ammount = Math.floor(cash/5);change['5']=ammount;cash-=(ammount*5)}
  if(cash>=2){let ammount = Math.floor(cash/2);change['2']=ammount;cash-=(ammount*2)}
  if(cash>=1){let ammount = Math.floor(cash/1);change['1']=ammount;cash-=(ammount*1)} 

  return change
};

module.exports = changeCalculator;
