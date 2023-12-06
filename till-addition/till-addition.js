
function tillAddition (cashMoney) {
  let moneymoneymoney = 0
  const moneyInTill = {...cashMoney}
  if("1p" in moneyInTill){moneymoneymoney+=(1*moneyInTill["1p"])}
  if("2p" in moneyInTill){moneymoneymoney+=(2*moneyInTill["2p"])}
  if("5p" in moneyInTill){moneymoneymoney+=(5*moneyInTill["5p"])}
  if("10p" in moneyInTill){moneymoneymoney+=(10*moneyInTill["10p"])}
  if("20p" in moneyInTill){moneymoneymoney+=(20*moneyInTill["20p"])}
  if("50p" in moneyInTill){moneymoneymoney+=(50*moneyInTill["50p"])}
  if("£1" in moneyInTill){moneymoneymoney+=(100*moneyInTill["£1"])}
  if("£2" in moneyInTill){moneymoneymoney+=(200*moneyInTill["£2"])}
  if("£5" in moneyInTill){moneymoneymoney+=(500*moneyInTill["£5"])}
  if("£10" in moneyInTill){moneymoneymoney+=(1000*moneyInTill["£10"])}
  if("£20" in moneyInTill){moneymoneymoney+=(2000*moneyInTill["£20"])}
  if("£50" in moneyInTill){moneymoneymoney+=(5000*moneyInTill["£50"])}
  
  return "£"+String((moneymoneymoney/100).toFixed(2))
};

module.exports = tillAddition;
