const repeatString = function(string, num) {
  let stringHolder = string;

  for(let i = 0; i < num; i++)
  {
    if(i === 0){
    string = string;
    }
    else{
      string = string + stringHolder;
    } 
  }
  if (num === 0){
    string = '';
  }
  else if(num < 0){
    string = 'ERROR';
  }

  return string;

};

// Do not edit below this line
module.exports = repeatString;
