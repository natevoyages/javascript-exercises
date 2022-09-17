const sumAll = function(numOne,numTwo) {
  let first = numOne;
  let last = numTwo;
  let numBetween = first + 1;
  let sum;
  if( Number.isInteger(numOne) && Number.isInteger(numTwo) 
  && (numOne > 0) && (numTwo > 0) ){

    if(numOne > numTwo){
      first = numTwo;
      last = numOne;
      numBetween = first + 1;
    }

    sum = first + last;

    while (numBetween < last){
      sum += numBetween;
      numBetween++;
    }

  }
  else{
    sum = 'ERROR';
  }
  return sum;

};
/*Loop using the parameters
compare arguments to see if one is bigger
have if statment -num or nonum return ERROR
*/

// Do not edit below this line
module.exports = sumAll;
