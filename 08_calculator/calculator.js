const add = function(numOne, numTwo) {
  
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
	
};

const sum = function(numArray) {
 let sum = 0;
 if (numArray === null){
 }	
 else{

 numArray.forEach(num => {sum = sum + num; 
  
     });
   }
   return sum;
};

const multiply = function(numArray) {
  let product = 1;
  numArray.forEach(num => (product = product * num)); 

  return product;
};

const power = function(base, power) {
  return base ** power;
	
};

const factorial = function(num) {
  let result = 1;
  if (num < 2){

  }
  else{
    for(let i = 2; i <= num; i++ )
    {
      result = result * i;
    }
  }

  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
