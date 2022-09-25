const findTheOldest = function(people) {



const result =  people.reduce((oldest, person) => {

  if(oldest === 0){
    oldest = person;
  }
  else{
    if(!person.yearOfDeath){
      let d = new Date();
      person.yearOfDeath = d.getFullYear();
    }
    if(!oldest.yearOfDeath){
      let d = new Date();
      oldest.yearOfDeath = d.getFullYear();
    }
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    let personAge = person.yearOfDeath - person.yearOfBirth;
    if(oldestAge < personAge){
      oldest = person;
    }
  }
  return oldest;

}, 0);
return result;

};

// Do not edit below this line
module.exports = findTheOldest;
