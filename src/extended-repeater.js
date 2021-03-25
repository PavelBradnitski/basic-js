const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let init = String(str);
  if(options.repeatTimes === undefined) {
    if(options.additionRepeatTimes === undefined){
      if (options.addition !== undefined) str = str + String(options.addition);
    } else {
      for(let j=0;j<options.additionRepeatTimes;j++){
        if (j != options.additionRepeatTimes-1){
          if (options.additionSeparator === undefined){
            str = String(str) + String(options.addition) + '|';
          }else{
            str = String(str) + String(options.addition) + String.additionSeparator;
          };
        } else {
          str = String(str) + String(options.addition);
        };
        if(options.separator === undefined){
          str = String(str) + '+';
        }else {
          str = String(str) + options.separator;
        };
      }
      str = str + init;
    }
  } else {
    for(let i = 0; i<options.repeatTimes-1;i++){
      if(options.additionRepeatTimes === undefined){
        if (options.addition !== undefined) str = String(str) + String(options.addition);
        if (options.separator === undefined){
          str = String(str)  + '+' + init;
        }else{
          str = String(str) + String(options.separator) + init;
        };
      }else {
        for(let j=0;j<options.additionRepeatTimes;j++){
          if (j != options.additionRepeatTimes-1){
            if (options.additionSeparator === undefined){
              str = String(str) + String(options.addition) + '|';
            }else{
              str = String(str) + String(options.addition) + String(options.additionSeparator);
            };
          }else {
            str = String(str) + String(options.addition);
          };
        }
        if(options.separator === undefined){
          str = String(str) + '+';
        }else {
          str = String(str) + options.separator;
        };
        str = str + init;
      }
    }
    if (options.additionRepeatTimes === undefined) {
      if (options.addition !== undefined) str = String(str) + String(options.addition);
    } else {
      for(let j=0;j<options.additionRepeatTimes;j++){
        if (j != options.additionRepeatTimes-1){
          if (options.additionSeparator === undefined){
            str = String(str) + String(options.addition) + '|';
          }else{
            str = String(str) + String(options.addition) + String(options.additionSeparator);
          };
          
        }else {
          str = String(str) + String(options.addition);
        };
      }
    }    
  }
  return str;
};
