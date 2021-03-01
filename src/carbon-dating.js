const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(sampleActivity) || !isFinite(+sampleActivity) 
     || sampleActivity === "" || +sampleActivity <= 0) return false;   
  let number = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/0.693*HALF_LIFE_PERIOD);
  if (number > 0) {
    return number; 
  } else {
    return false;
  }
};

