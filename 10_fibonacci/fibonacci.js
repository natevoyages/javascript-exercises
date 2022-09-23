const fibonacci = function(number) {
    let result = "OOPS";
    prevA = 1;
    prevB = 1;
    if (number > 0){
        if (number == 1 || number == 2){
        result = 1; 
        }
        else{
          for(let i = 2; i < number; i++){
            result = prevA + prevB;
            prevA = prevB;
            prevB = result;
          }
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
