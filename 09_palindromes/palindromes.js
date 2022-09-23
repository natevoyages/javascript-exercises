const palindromes = function (string) {
 string = string.toLowerCase();
 let newString = string.split('');
 string = newString;
 newString.forEach(char => {
    if(/[^a-z]/.test(char)){
        let index = newString.indexOf(char);
        newString.splice(index, 1);
        string = newString;
     }
     if(/[\s]/.test(char)){
        let index = newString.indexOf(char);
        newString.splice(index, 1);
        string = newString;
     }
    
 });
  string = string.join('');
  newString.reverse();
  newString = newString.join('');
  return newString === string;
};

// Do not edit below this line
module.exports = palindromes;
