const removeFromArray = function(array, ...removedMore) {
  let arrayResult = [];

  for(let i = 0; i < array.length; i++)
  {
    for(let j = 0; j < removedMore.length; j++){
      if (removedMore[j] === array [i]){
        array[i] = undefined;
      }
    if (array[i] !== undefined){
        arrayResult.push(array[i]);
      }
    }
  }
  
  return arrayResult;
};

// Do not edit below this line
module.exports = removeFromArray;
