const CustomError = require("../extensions/custom-error");

 module.exports = function createDreamTeam( members ) {
  if (Array.isArray(members) !== true) return false;  
  let arr = [];
  for(let i=0;i<members.length;i++){
    if (typeof members[i] == 'string') {
      arr.push(members[i].trim().toUpperCase().split("")[0]); 
    }
  }
  return arr.sort().join("");
};
