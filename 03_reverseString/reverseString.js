const reverseString = function(string) {
  let charArray =  string.split("");
  let arrayHolder = "nothing";

  for (let i = 0; i < string.length/2; i++){
    arrayHolder = charArray[i];
    charArray[i] = charArray[string.length - 1 - i];
    charArray[string.length - 1 - i] = arrayHolder;
  }
  string = charArray.join('');
  return string;
};

// Do not edit below this line
module.exports = reverseString;
