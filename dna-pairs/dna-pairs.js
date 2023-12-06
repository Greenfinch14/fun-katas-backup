// Please do not change the name of this function
function dnaPairs(dna) {
  if(arguments.length===0){return []}
  const returnArr = dna.split("")
  regex1 = /[ATCG]/g
  for(let i=0;i<returnArr.length;i++)
  {

    if(returnArr[i]==="A"){returnArr[i]=["A","T"]}
    if(returnArr[i]==="T"){returnArr[i]=["T","A"]}
    if(returnArr[i]==="G"){returnArr[i]=["G","C"]}
    if(returnArr[i]==="C"){returnArr[i]=["C","G"]}
  }

  return returnArr
}

module.exports = dnaPairs;
