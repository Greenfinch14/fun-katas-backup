// Please do not change the name of this function
function updateRemoteStudents (arr) {
  if(arguments.length===0){return {}}
  const arrCopy = arr.map(x => ({...x}));
  for(let i=0;i<arr.length;i++)
  {
    if(!("location" in arrCopy[i])){arrCopy[i].location ="remote"}
  }
  
  return arrCopy

}

module.exports = updateRemoteStudents;