const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //function transform( arr ) {
  //throw new CustomError('Not implemented');
  let arr1 = [];
  loop1:
  for(let i = 0;i<arr.length;i++) {
    switch (arr[i]) {
      default:
        arr1.push(arr[i]);
        break;
      case '--discard-next':
        if (i == arr.length - 1) break loop1;
        //arr.splice(i+1, 1);
        i++;
        break;
      case '--discard-prev':
        if (i == 0 || arr[i-2] == '--discard-next') continue loop1;
        arr1.pop();
        break;
      case '--double-next':
        if (i == arr.length - 1 ) break loop1;
        arr1.push(arr[i+1]);
        break;
      case '--double-prev':
        if (i == 0 || arr[i-2] == '--discard-next') continue loop1;
        arr1.push(arr[i-1]);
        break;
      
    }
  }
  return arr1;
  // remove line with error and write your code here
};
//console.log(transform( [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));