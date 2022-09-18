const ftoc = function(f) {
  let temp = (f - 32) * (5/9);
  if (f !== 32){
  temp = +(temp.toFixed(1));
  }
  return temp;
};

const ctof = function(c) {
  let temp = 32 + ( c  * (9/5) );
  if (c % 5 !== 0){
    temp = +(temp.toFixed(1));
    }
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
